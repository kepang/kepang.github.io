$(document).ready( function() {

	// $("<img />").attr("src", "/img/fifa01-goalie.opt.jpg");

	skrollr.init({
		mobileCheck: function() {
			return false;
		}
	});
	
	// bind anchor to click
	$("a[href^=#]").bind("click", function(e) {
		e.preventDefault();
		e.stopPropagation();

		var target = $(this).attr("href");
		$(target).velocity("scroll", {
			duration: 1500,
			offset: 20,
			easing: "ease-in-out"
		});
	});

});