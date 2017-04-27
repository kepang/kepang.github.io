$(document).ready(
	function() {
		$("#hamburger-menu").click(
			function(event) {
				event.preventDefault();
				console.log("Default Prevented");

				if($("#slide-out").hasClass("so-hidden")) {
					$("#slide-out").removeClass("so-hidden").addClass("so-shown");
				}
				else {
					$("#slide-out").removeClass("so-shown").addClass("so-hidden");
				}
			}
		);
	}
);