$(document).ready( function() {


	var hash = window.location.hash.substr(1);

	// fade effect when transitioning from EA project page
	if (hash == "EA-article-wrap") {
		$("#EA-intro").css({"-webkit-animation": "fadein 2s", "animation": "fadein 2s"});
	}

	if (hash == "proj2") {
		$("#IAT-235	").css({"-webkit-animation": "fadein 2s", "animation": "fadein 2s"});
	}	

	// Progressively enhance skrollr if not on mobile
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) == false ) {
		$("body").addClass("desktop");

		$(".home nav.me").attr("data-start", "transform:translateY(-5em)");
		$(".home nav.me").attr("data-40p-start", "transform:translateY(-5em)");
		$(".home nav.me").attr("data-60p-start", "transform:translateY(0em)");
		$(".home nav.me").attr("data-anchor-target", "#intro");

		$("#p1").attr("data-30p-start", "opacity:1; display:inherit; z-index:1");
		$("#p1").attr("data-40p-start", "opacity:0; display:none; z-index:-1");
		$("#p1").attr("data-anchor-target", "#intro");
		
		$("#scroll-box").attr("data-start", "transform:translateY(0px)");
		$("#scroll-box").attr("data-40p-start", "transform:translateY(100%)");
		$("#scroll-box").attr("data-target-anchor", "#intro");

		$("#p2").attr("data-40p-start", "opacity:0; display:inherit");
		$("#p2").attr("data-45p-start", "opacity:1; display:inherit");
		$("#p2").attr("data-160p-start", "opacity:0; display:none");
		$("#p2").attr("data-250p-start", "opacity:0; display:none");

		$("#p3").addClass("dark-bg");

		$("#EA-intro-wrap").attr("data--30p-bottom-top", "opacity:0; transform:scale(0.5)");
		$("#EA-intro-wrap").attr("data-center", "opacity:1; transform:scale(1)");
		$("#EA-intro-wrap").attr("data-anchor-target", "#EA-intro-wrap");

		$("#siat-logo").attr("data-bottom-top", "opacity:0");
		$("#siat-logo").attr("data-center-top", "opacity:0.5");
		$("#siat-logo").attr("data-anchor-target", "#siat-logo");

		$("#infodsn-header").attr("data-bottom-top", "opacity:0; transform:scale(0.8)");
		$("#infodsn-header").attr("data-center-top", "opacity:1; transform:scale(1.0)");
		$("#infodsn-header").attr("data-anchor-target", "#infodsn-header");

		$("#logos-figure").attr("data-bottom-top", "opacity:0; transform:scale(0.7)");
		$("#logos-figure").attr("data-center-top", "opacity:1; transform:scale(1)");
		$("#logos-figure").attr("data-anchor-target", "#logos-figure");

		$("#shuffle-h3").attr("data-bottom-top", "opacity:0; transform:translateX(-1.5em)");
		$("#shuffle-h3").attr("data-center-top", "opacity:1; transform:translateX(0)");
		$("#shuffle-h3").attr("data-anchor-target", "#shuffle-h3");

		$("#shuffle-ul").attr("data-bottom-top", "opacity:0");
		$("#shuffle-ul").attr("data-center-top", "opacity:1");
		$("#shuffle-ul").attr("data-anchor-target", "#shuffle-ul");

		$("#bvd-wf-figure").attr("data-bottom-top", "opacity:0; transform:scale(0.7)");
		$("#bvd-wf-figure").attr("data-center-top", "opacity:1; transform:scale(1)");
		$("#bvd-wf-figure").attr("data-anchor-target", "#bvd-wf-figure");

		$("#caselet-figure").attr("data-bottom-top", "opacity:0; transform:scale(0.7)");
		$("#caselet-figure").attr("data-center-top", "opacity:1; transform:scale(1)");
		$("#caselet-figure").attr("data-anchor-target", "#caselet-figure");		
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