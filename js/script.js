$(document).ready(function () {
	var user = "Alborz.Jelvani";
	var domain = "rutgers.edu";
	var toggle = true;
	$("#address").on("mouseover", function () {
		if (toggle) {
			$("#address").html("<a href='mailto:" + user + "@" + domain + "'" + ">" + user + "@" + domain + "</a>").css("font-weight", "normal");
			toggle = false;
		}
	});
	$("body").on("mouseenter mouseleave", "a", function (e) {

		if (e.type === "mouseenter") {
			$(this).stop();
			$(this).animate({

				zoom: 1.3,

			}, 200, function () {
			});
		} else {
			$(this).stop();
			$(this).animate({
				zoom: 1
			}, 200, function () {

			});
		}
	}
	);
	$("#lastUpdate").text("Page Last Modified: " + document.lastModified);
});