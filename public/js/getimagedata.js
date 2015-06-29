$(document).ready(function(){
		var instaName = localStorage.getItem("instaName");
		$("#instaName").text(instaName);

		var instaLink = localStorage.getItem("instaLink");
		$(".linkMe").attr("href", instaLink);

		var image = localStorage.getItem("image");
		$(".shorter").attr("style", image);
});