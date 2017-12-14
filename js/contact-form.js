var URL = 'https://lxio1pynn3.execute-api.us-east-1.amazonaws.com/prod/smoleyEngineersSendContactEmail'

$('#contact-us')
	.submit(function(event) {
		event.preventDefault();

		console.log('hey i\'m called');

		var data = {
			name: $('#form-name').val(),
			company: $('#form-company').val(),
			email: $('#form-email').val(),
			phone: $('#form-phone').val(),
			message: $('#form-message').val()
		};

		$.ajax({
			type: 'POST',
			url: URL,
			dataType: 'json',
			contentType: 'application/json',
			data: JSON.stringify(data),
			success: function (response) {
				console.log('woo!', response);
				$("#messageSentSuccessful").removeClass('hide');
			},
			error: function (error) {
				console.log('no dice', error);
				$("#messageSentError").removeClass('hide');
			}
		});
	});