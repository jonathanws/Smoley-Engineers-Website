var URL = 'https://lxio1pynn3.execute-api.us-east-1.amazonaws.com/prod/smoleyEngineersSendContactEmail';

$('#messageSentError button').click(function() {
	$('#messageSentError').addClass('hide');
	return false;
});

$('#messageSentSuccessful button').click(function() {
	$('#messageSentSuccessful').addClass('hide');
	return false;
});

$('#contact-us')
	.submit(function(event) {
		event.preventDefault();

		console.log('hey i\'m called');

		var SUCCESS = 'success';
		var ERROR = 'error';
		var data = {
			name: $('#form-name').val(),
			company: $('#form-company').val(),
			email: $('#form-email').val(),
			phone: $('#form-phone').val(),
			message: $('#form-message').val()
		};

		// Show either success or error alert.  Removes other alert if already showing
		function showAlert(status) {
			var a;
			var b;
			if (status == SUCCESS) {
				a = '#messageSentError';
				b = '#messageSentSuccessful';
			}
			if (status == ERROR) {
				a = '#messageSentSuccessful';
				b = '#messageSentError';
			} else {
				console.log('ERROR, status is: ' + status);
			}

			if (!$(a).hasClass('hide')) {
				$(a).addClass('hide');
			}
			$(b).removeClass('hide');
		}

		$.ajax({
			type: 'POST',
			url: URL,
			dataType: 'json',
			contentType: 'application/json',
			data: JSON.stringify(data),
			success: function(response) {
				console.log('woo!', response);
				showAlert(SUCCESS);
			},
			error: function(error) {
				console.log('no dice', error);
				showAlert(ERROR);
			}
		});
	});