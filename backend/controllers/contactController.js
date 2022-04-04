const { sendEmail } = require('../middleware/sendEmail')

const contactUs = async (req, res) => {
	if (!req.body.name || !req.body.phoneNum || !req.body.email ||
		!req.body.message) {

		res.status(400).json({ 'status': 'invalid form data' })
		return;
	}

	try {
		const message = `Contact details:
		
		Name: ${req.body.name}
		Phone Number: ${req.body.phoneNum}
		Email: ${req.body.email}
		
		Message: ${req.body.message}
		`

		sendEmail(process.env.MAIL_TO, 'Contact Form', message)
		res.status(200).json({ 'status': 'success' })
		
		if (!process.env.MAIL_TO){
			console.log("Unable to get administrator's email")
			res.status(500).json({'status' : 'error'})
		}
	}
	catch(error) {
		console.log(error)
		res.status(500).json({ 'status': 'server error' })
	}

}

module.exports = {
	contactUs
}
