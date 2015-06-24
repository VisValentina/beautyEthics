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

}); // Closing the whole $ready function