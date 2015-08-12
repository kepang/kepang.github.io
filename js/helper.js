$(document).ready( function() {

	skrollr.init({

		mobileCheck: function() {
			return false;
		}

	});

	// disable skrollr if using handheld device
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$("#EA-intro-wrap").attr("data-smooth-scrolling", "off");
	}	

	
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