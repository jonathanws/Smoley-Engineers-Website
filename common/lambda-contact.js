var AWS = require('aws-sdk');
var ses = new AWS.SES();


exports.handler = (event, context) => {
	
	console.log('event' , event);
	
	var RECEIVER = 'jonathanws18@gmail.com';
	var SENDER = 'jonathanws18@gmail.com';
	
	var accentColor = '#607d8b';
	var htmlMessageStyle='display: inline-block; width: 50%; padding-bottom: 8px;';
	
	var htmlMessageLeftSideStyle = 'style="' + htmlMessageStyle + 'font-weight: bold;';
	var htmlMessageRightSideStyle = 'style="' + htmlMessageStyle + 'text-align: right;';
	var html = '<div style="padding: 10px; background-color: #f5f5f5; padding: 10px 25%; font-family: \'Segoe UI\';">'
			+ '<div style=" padding: 30px; text-align: center;">Logo</div>'
			+ '<div style="padding: 30px; margin-bottom: 60px; background-color: white; color: #555; border: 1px solid #ccc; border-top: 6px solid #607d8b; border-radius: 4px;">'
				+ '<div style="padding: 0 20%; text-align: center;">'
					+ '<h2 style="font-weight: normal; margin-top: 0;">Contact request from</h2>'
					+ '<h2><b>SmoleyEngineers.com</b></h2>'
				+ '</div>'
				+ '<hr style="border: 1px solid ' + accentColor + '; margin: 20px 0; border-radius: 10px;"></hr>'
				+ '<div ' + htmlMessageLeftSideStyle + '">Name:</div>'
				+ '<div ' + htmlMessageRightSideStyle + '">' + event.name + '</div>'
				+ '<div ' + htmlMessageLeftSideStyle + '">Company:</div>'
				+ '<div ' + htmlMessageRightSideStyle + '">' + event.company + '</div>'
				+ '<div ' + htmlMessageLeftSideStyle + '">Email:</div>'
				+ '<div ' + htmlMessageRightSideStyle + '">'
					+ '<a href="mailto:' + event.email + '" target="_blank" style="color: ' + accentColor + '">' + event.email + '</a>'
				+ '</div>'
				+ '<div ' + htmlMessageLeftSideStyle + '">Phone:</div>'
				+ '<div ' + htmlMessageRightSideStyle + '">' + event.phone + '</div>'
				+ '<div ' + htmlMessageLeftSideStyle + '">Message:</div>'
				+ '<div ' + htmlMessageRightSideStyle + '">' + event.message + '</div>'
			+ '</div>'
		+ '</div>'
	;
	
	console.log('Received contact request');
	
	var params = {
		Destination: {
			ToAddresses: [RECEIVER]
		},
		Message: {
			Body: {
				Html: {
					Data: html,
					Charset: 'UTF-8'
				},
				Text: {
					Data: 'Name: ' + event.name + '\nCompany: ' + event.company + '\nEmail: ' + event.email + '\nPhone: ' + event.phone + '\nMessage: ' + event.message,
					Charset: 'UTF-8'
				}
			},
			Subject: {
				Data: 'Website Referral Form: ' + event.name,
				Charset: 'UTF-8'
			}
		},
		Source: SENDER
	};
	
	// Send the email
	ses.sendEmail(params, function (err, data) {
		if (err) {
			console.log(err, err.stack);
			context.fail('Internal Error: The email could not be sent.');
		} else {
			console.log('Email successfully sent ', data);
			context.succeed('The email was successfully sent to ' + event.email);
		}
	});
};