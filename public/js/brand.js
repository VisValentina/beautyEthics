$(function() {

	// When users click on 'about' it should:
	// 1. Hide the logo
	// 2. Show 'about' text within the homespacer div
	// When users click anywhere else on the page, the 'about' text should disappear
	$('#homeAboutLink').click(function(event){
		$('#homeLogo').hide(); 
	});
});