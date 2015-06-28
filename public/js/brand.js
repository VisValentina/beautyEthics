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
		compName = ($(this).attr('data-name'));
		instaLink = ($(this).attr('data-link'));
		var queryThis = "#" + compName.toString();
		formerImage = $(this).css('background-image');
		$('.blackHide').show();
		$(queryThis).show();
		isComplaint($(this));
	});
		$('.homeDiv').on("mouseleave", function(event){
		var compName = ($(this).attr('data-name'));
		var queryThis = "#" + compName.toString();
		$(this).css("background-image", formerImage);
		$('.blackHide').hide();
		$(queryThis).hide();
	});

		var isComplaint = function(homeDiv){
			var animalImgs = ["url(/images/Animal_1.jpg)", "url(/images/Animal_2.jpg)", "url(/images/Animal_3.jpg)"];
  		var rando = Math.random() * 3;
  		rando = Math.floor(rando);
			if(homeDiv.attr('data-complaint') ===  'Environment'){
				return homeDiv.css("background-image", "url(/images/Environment_1.jpg)");
			}	
			else if(homeDiv.attr('data-complaint') ===  'GM'){
				return homeDiv.css("background-image", "url(/images/GM.jpg)");
			}
			else if(homeDiv.attr('data-complaint') ===  'Bribes'){
				return homeDiv.css("background-image", "url(/images/Bribes.jpg)");
			}
			else if(homeDiv.attr('data-complaint') ===  'Tar Sands'){
				return homeDiv.css("background-image", "url(/images/TarSands.jpg)");
			}
			else if(homeDiv.attr('data-complaint') ===  'Animals'){
				return homeDiv.css("background-image", animalImgs[rando]);
			}
		};

		$(".homeDiv").on("click", function(e){
			localStorage.clear();
			// var image = $(this).attr("style");
			localStorage.setItem("instaName", "@" + compName);
			localStorage.setItem("instaLink", instaLink);
			localStorage.setItem("image", "background-image:" + formerImage);
		});

}); // Closing the whole $ready function