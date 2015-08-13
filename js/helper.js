$(document).ready( function() {

	// disable skrollr if using handheld device
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) == false ) {
		$("#EA-intro-wrap").attr("data-smooth-scrolling", "off");
		$("#EA-intro-wrap").attr("data-bottom-top", "opacity:0");
		$("#EA-intro-wrap").attr("data-center-top", "opacity:1");
		$("#EA-intro-wrap").attr("data-anchor-target", "#EA-intro-wrap");

		$("#p1").attr("data-40p-start", "opacity:0");

	}



	skrollr.init({
		smoothScrolling:false,

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