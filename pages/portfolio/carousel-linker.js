$(document).ready(function() {
	$("div.carousel-inner div.item").click(function() {
		var link = $(this).attr('data');
		if (link) {
			window.location = link;
		}
		return false;
	});
});