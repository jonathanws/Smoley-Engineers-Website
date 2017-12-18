$(document).ready(function() {

	var experienceCards = [
		$('#produce_marketing'),
		$('#public_education'),
		$('#heavy_industrial'),
		$('#historic_restoration'),
		$('#business_graphics')
	];

	refreshDisplay();


	// When a menu item is clicked
	$("body > .container .nav li").click(function() {
		refreshMenu($(this));
		return false;
	});

	/**
	 * Refresh the menu by removing all active declarations, and adding it back to the clicked one
	 * Then hide all of the cards, and call refreshDisplay() to show the one reference by the active nav
	 */
	function refreshMenu(clicked) {
		$('body > .container .nav').children().each(function(i, obj) {
			obj = $(obj);
			if (obj.hasClass('active')) {
				obj.removeClass('active');
			}
		});

		clicked.addClass('active');

		for (var i = 0; i < experienceCards.length; i++) {
			if (!experienceCards[i].hasClass('hide')) {
				experienceCards[i].addClass('hide');
			}
		}

		refreshDisplay();
	}

	/**
	 * Refresh the display with the card associated with the active nav
	 */
	function refreshDisplay() {
		$('body > .container .nav').children().each(function(i, obj) {
			obj = $(obj);
			if (obj.hasClass('active')) {
				experienceCards[i].removeClass('hide');
			}
		});
	}
});