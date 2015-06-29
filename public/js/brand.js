$(function() {

	// When users click on 'about' it should:
	// 1. Hide the logo
	// 2. Show 'about' text within the homespacer div
	// When users click anywhere else on the page, the 'about' text should disappear
	$('#homeAboutLink').click(function(event){
		// Don't refresh the page
		event.preventDefault();
		event.stopPropagation();
		console.log("Clicked on ABOUT");
		if($(this).attr('data-info') === 'null') {
			console.log("I was null!");
			$('.homeSpacerLogo').hide();
			$('.aboutText').show();
			$(this).attr('data-info', 'active');
			// Since it was positioned relative, the links shifted. This moves them back down.
			$(this).css("top", "188px");
			$('#homeLogoutLink').css("top", "188px");
		}
		else if($('#homeAboutLink').attr('data-info') ===  'active'){
			$('.homeSpacerLogo').show();
			$('.aboutText').hide();
			$('#homeAboutLink').attr('data-info', 'null');
			$('#homeAboutLink').css("top", "50px");
			$('#homeLogoutLink').css("top", "50px");
		}
	});

	$('body').on('click', function(event){
		if($('#homeAboutLink').attr('data-info') ===  'active'){
			$('.homeSpacerLogo').show();
			$('.aboutText').hide();
			$('#homeAboutLink').attr('data-info', 'null');
			$('#homeAboutLink').css("top", "50px");
			$('#homeLogoutLink').css("top", "50px");
		}
	}); // Closing the #homeAboutLink click function

	// If user hovers over any of the images, that image's instagram name will appear on the spacer div
	var formerImage;
	var compName;
	var instaLink;

	$('.homeDiv').on("mouseenter", function(event){
		if($('#homeAboutLink').attr('data-info') === 'null') {
			compName = ($(this).attr('data-name'));
			instaLink = ($(this).attr('data-link'));
			var queryThis = "#" + compName.toString();
			formerImage = $(this).css('background-image');
			$('.blackHide').show();
			$(queryThis).show();
			isComplaint($(this));
		}
	});
		$('.homeDiv').on("mouseleave", function(event){
		if($('#homeAboutLink').attr('data-info') === 'null') {
		var compName = ($(this).attr('data-name'));
		var queryThis = "#" + compName.toString();
		$(this).css("background-image", formerImage);
		$('.blackHide').hide();
		$(queryThis).hide();
	}
	});

		var isComplaint = function(homeDiv){
			var animalImgs = ["url(/images/Animal_1.jpg)", "url(/images/Animal_2.jpg)", "url(/images/Animal_3.jpg)"];
			var gmImgs = ["url(/images/GM_1.jpg)", "url(/images/GM_2.jpg)", "url(/images/GM_3.jpg)"];
			var toxicenviroImgs = ["url(/images/toxicenviro_1.jpg)", "url(/images/toxicenviro_2.jpg)", "url(/images/toxicenviro_3.jpg)"];
			var tarsandsImgs = ["url(/images/tarsands_1.jpg)", "url(/images/tarsands_2.jpg)", "url(/images/tarsands_3.jpg)"];
			var palmoilImgs = ["url(/images/palmoil_1.jpg)", "url(/images/palmoil_2.jpg)", "url(/images/palmoil_3.jpg)"];
			var politicalImgs = ["url(/images/bribes_1.jpg)", "url(/images/bribes_2.jpg)", "url(/images/bribes_3.jpg)"];
			var cottonImgs = ["url(/images/cotton_1.jpg)", "url(/images/cotton_2.jpg)", "url(/images/cotton_3.jpg)"];
			var humanrightsImgs = ["url(/images/humanrights_1.jpg)", "url(/images/humanrights_2.jpg)", "url(/images/humanrights_3.jpg)"];
			var burmaImgs = ["url(/images/burma_1.jpg)", "url(/images/burma_2.jpg)", "url(/images/burma_3.jpg)"];


  		var rando = Math.random() * 3;
  		rando = Math.floor(rando);
			if(homeDiv.attr('data-complaint') ===  'Animals'){
				return homeDiv.css("background-image", animalImgs[rando]);
			}	
			else if(homeDiv.attr('data-complaint') ===  'GM'){
				return homeDiv.css("background-image", gmImgs[rando]);
			}
			else if(homeDiv.attr('data-complaint') ===  'Toxic Environment'){
				return homeDiv.css("background-image", toxicenviroImgs[rando]);
			}
			else if(homeDiv.attr('data-complaint') ===  'Tar Sands'){
				return homeDiv.css("background-image", tarsandsImgs[rando]);
			}
			else if(homeDiv.attr('data-complaint') ===  'Palm oil'){
				return homeDiv.css("background-image", palmoilImgs[rando]);
			}
			else if(homeDiv.attr('data-complaint') ===  'Political Lobbying'){
				return homeDiv.css("background-image", politicalImgs[rando]);
			}
			else if(homeDiv.attr('data-complaint') ===  'Cotton Sourcing'){
				return homeDiv.css("background-image", cottonImgs[rando]);
			}
			else if(homeDiv.attr('data-complaint') ===  'Human Rights'){
				return homeDiv.css("background-image", humanrightsImgs[rando]);
			}
			else if(homeDiv.attr('data-complaint') ===  'Unethical sourcing'){
				return homeDiv.css("background-image", burmaImgs[rando]);
			}
		};

		$(".homeDiv").on("click", function(e){
			localStorage.clear();
			// var image = $(this).attr("style");
			localStorage.setItem("instaName", "@" + compName);
			localStorage.setItem("instaLink", instaLink);
			localStorage.setItem("image", "background-image:" + formerImage);
		});

		// When user clicks on the show page's header image - take user to the instagram page
		$(".shorter").click(function(){
		// Our prev() is the <a> which has the instaLink dynamically generated
  	window.location = $(this).prev().attr('href');
		});

}); // Closing the whole $ready function