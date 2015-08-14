$(document).ready( function() {

	// Progressively enhance skrollr if not on mobile
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) == false ) {
		$("body").addClass("desktop");

		$(".home nav.me").attr("data-start", "transform:translateY(-5em)");
		$(".home nav.me").attr("data-40p-start", "transform:translateY(-5em)");
		$(".home nav.me").attr("data-60p-start", "transform:translateY(0em)");
		$(".home nav.me").attr("data-anchor-target", "#intro");

		$("#p1").attr("data-40p-start", "opacity:0; display:none; z-index:-1");

		$("#p2").attr("data-40p-start", "opacity:0; display:inherit");
		$("#p2").attr("data-45p-start", "opacity:1; display:inherit");
		$("#p2").attr("data-160p-start", "opacity:0; display:none");
		$("#p2").attr("data-250p-start", "opacity:0; display:none");

		$("#p3").addClass("dark-bg");

		$("#EA-intro-wrap").attr("data--30p-bottom-top", "opacity:0");
		$("#EA-intro-wrap").attr("data-center", "opacity:1");
		$("#EA-intro-wrap").attr("data-anchor-target", "#EA-intro-wrap");

		$("#siat-logo").attr("data-bottom-top", "opacity:0");
		$("#siat-logo").attr("data-center-top", "opacity:0.5");
		$("#siat-logo").attr("data-anchor-target", "#siat-logo");

		$("#infodsn-header").attr("data-bottom-top", "opacity:0");
		$("#infodsn-header").attr("data-center-top", "opacity:1");
		$("#infodsn-header").attr("data-anchor-target", "#infodsn-header");
	}



	skrollr.init({
		smoothScrolling:false,

		mobileCheck: function() {
			return false;
		}

	});

	
	// bind anchor to click for nav scrolling
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