const nodemailer = require('nodemailer')
const dotenv = require('dotenv').config()

const sendEmail = async (email_to, subject, text) => {
	let transporter = nodemailer.createTransport({
		service: 'hotmail',
		auth: {
		  user: String(process.env.MAIL_FROM), // generated ethereal user
		  pass: String(process.env.MAIL_PASSWORD), // generated ethereal password
		},
	});

	let options = {
		from : process.env.MAIL_FROM,
		to : email_to,
		subject,
		text
	}

	transporter.sendMail(options, function (error, info) {
		if (err) {
			console.log(err)
			return;
		}
		console.log(info.response)		
	})
}

module.exports = {
	sendEmail
}