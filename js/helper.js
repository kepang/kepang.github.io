$(document).ready( function() {


	function scrollToAnchor(aid){
	    var aTag = $("a[name='"+ aid +"']");
	    $('html,body').animate({scrollTop: aTag.offset().top}, 1500, "swing");
	}

	$("#about-link").click(function() {
	   scrollToAnchor('about');

	});

	$("#about-nav").click(function() {
		scrollToAnchor('about');
	});

	$("#see-me").click(function() {
		scrollToAnchor('start-portfolio');
	});	

});