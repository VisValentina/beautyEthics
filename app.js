var express = require('express'),
		app = express(),
    passport = require('passport'), 
    util = require('util'), 
    morgan = require('morgan'),
    request = require('request'),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    cookieParser = require("cookie-parser"),
    session = require("cookie-session"),
    shuffle = require('shuffle-array'),
    InstagramStrategy = require('passport-instagram').Strategy;
    db = require("./models");

    app.set('view engine', 'ejs');
    app.set('views', __dirname + '/views');
		app.use(morgan('tiny'));
		app.use(methodOverride('_method'));
		app.use(express.static(__dirname + '/public'));
		app.use(bodyParser.urlencoded({extended:true}));

		// Initiate the session cookie (this will be relevant for Instagram session too)
		app.use(session({
	  maxAge: 3600000,
	  secret: 'secret',
	  name: 'oatmeal raisin'
		}));

		// Instagram Passport Setup
		var INSTAGRAM_CLIENT_ID = "SECRET";
		var INSTAGRAM_CLIENT_SECRET = "SECRET";

		// Passport will maintain persistent login sessions.
		// In order for persistent sessions to work, the authenticated user must be serialized to the session, and deserialized when subsequent requests are made.
		// The serialize function determines what data from the user object should be stored in the session.
		// The result of the serializeUser method is attached to the session as req.session.passport.user = {}
		
		// !! Here I've added the user.id - should I do this or will it override the user_id that is created from the model?
		passport.serializeUser(function(user, done) {
  	done(null, user);
		});

		passport.deserializeUser(function(obj, done) {
  	done(null, obj);
		});

		// The InstagramStrategy within Passport.
		// We need: an accessToken, refreshToken, and Instagram profile, and invoke a callback with a user object.
	passport.use(new InstagramStrategy({
    clientID: INSTAGRAM_CLIENT_ID,
    clientSecret: INSTAGRAM_CLIENT_SECRET,
    callbackURL: "SECRET"
  },
  function(accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {
      console.log("THIS IS OUR ACCESS TOKEN", accessToken);
      console.log("THIS IS OUR REFRESH TOKEN", refreshToken);
      // The user's Instagram profile is returned to represent the logged-in user.
      // !! In a typical application, you would want to associate the Instagram account with a user record in your database, and return that user instead.
      profile.accessToken = accessToken;

      return done(null, profile);
    });
  }
));

		// Initialize Passport!
	  app.use(passport.initialize());
  	app.use(passport.session());

    // *************** BRAND INFO ***************//
    // var brandIds = [196766934, 448044564, 1323766664, 887391878, 182211878, 18977415, 326928838, 144140774, 260742208, 1385709710, 459676149, 145628278, 19262530, 469275009, 1273842973];
    var brandIds;
    var compIds;

		// *************** DEAL WITH LOGIN AND SIGNUP ***************//

		// Root: User must sign in via Instagram
		app.get('/', function(req, res){
  	res.render('users/index');
		});

		app.get('/auth/instagram',
  	passport.authenticate('instagram', {scope: 'comments' }),
  	function(req, res){
    // The request will be redirected to Instagram for authentication, so this
    // function will not be called.
    });

		// If authentication fails, the user will be redirected back to the
    // login page.  Otherwise, the primary route function function will be called,
    // which, in this example, will redirect the user to the /brands page.
    app.get('/auth/instagram/callback', 
    passport.authenticate('instagram', { scope: ['comments'], failureRedirect: '/' }),
    function(req, res) {
    res.redirect('/brands');
    });

    app.get('/logout', function(req, res){
    req.logout();
    // req.session.destroy(); this didn't work
    res.redirect('/');
    });
    // This didn't work either
    // app.get('/logout', function (req, res){
    //   req.session.destroy(function (err) {
    //   res.redirect('/'); //Inside a callback… should be bulletproof!
    // });
    // });


    // *************** THE ROUTES ***************//

    // The main page with listings of all live brands and their images
	  app.get('/brands', function(req, res){
      var responseCount = 0;
      // Where we store all the brands' images
      var responseArr = [];
      // This function is called each time we make a request (in our case, 8 times)
      var handleResponses = function(error, response, body) {
        responseCount++;
        if(error) {
          res.render('errors/404');
        }
        // !!! Add data-attribute tag and list the brand-data name for it, that way we can extract it in the front end JS
        var brandData = JSON.parse(body).data[0];
        var instaName = brandData.user.username;
        var imgData = brandData.images.standard_resolution.url;
        var instaLink = brandData.link;
        console.log(instaLink);
        var complaint;
        var ownerNum;

        brandIds.forEach(function(el){
          if(el.instaName === '@' + instaName) {
            complaint = el.complaint;
            ownerNum = el.owner;
          }
        });
        responseArr.push({imgData: imgData, instaName: instaName, complaint: complaint, ownerNum: ownerNum, instaLink: instaLink});
        if (responseCount === 8) {
          res.render('brands/index', {images: responseArr});
        }
      };
      shuffle(brandIds);
	    // console.log(req.user);
      // Now we make an api request for the brand images from Instagram
      request.get("https://api.instagram.com/v1/users/" + brandIds[0].instaId + "/media/recent/?access_token=" + req.user.accessToken, handleResponses);
      request.get("https://api.instagram.com/v1/users/" + brandIds[1].instaId + "/media/recent/?access_token=" + req.user.accessToken, handleResponses);
      request.get("https://api.instagram.com/v1/users/" + brandIds[2].instaId + "/media/recent/?access_token=" + req.user.accessToken, handleResponses);
      request.get("https://api.instagram.com/v1/users/" + brandIds[3].instaId + "/media/recent/?access_token=" + req.user.accessToken, handleResponses);
      request.get("https://api.instagram.com/v1/users/" + brandIds[4].instaId + "/media/recent/?access_token=" + req.user.accessToken, handleResponses);
      request.get("https://api.instagram.com/v1/users/" + brandIds[5].instaId + "/media/recent/?access_token=" + req.user.accessToken, handleResponses);
      request.get("https://api.instagram.com/v1/users/" + brandIds[6].instaId + "/media/recent/?access_token=" + req.user.accessToken, handleResponses);
      request.get("https://api.instagram.com/v1/users/" + brandIds[7].instaId + "/media/recent/?access_token=" + req.user.accessToken, handleResponses);
	  });


    app.get('/brands/:id', function(req,res){
      db.Company.findById(req.params.id).populate('brands').exec(function(err,company){
        // brand.instaId has all the data we want
        // let's use request
        // console.log(company.brands[0].instaId)
        // request.get("https://api.instagram.com/v1/users/" + company.brands[0].instaId + "/media/recent/?access_token=" + req.user.accessToken, function(err,response,data){
        //   var testing = JSON.parse(data)
        //   var images = testing.images
        //   console.log(images)
          res.render("brands/show", {company:company});
        });
        
      // });
    });











// *************** SETUP SERVERS AND ERROR HANDLING ***************//

app.get('*', function(req,res){
  res.render('errors/404');
});

app.listen(3000, function(){
  console.log("Server is listening on port 3000");

  db.Brand.find({}, function(error, data){
    brandIds = data;
    // console.log(brandIds);
  });
    db.Company.find({}, function(error, data){
    compIds = data;
    // console.log(compIds);
  });
});