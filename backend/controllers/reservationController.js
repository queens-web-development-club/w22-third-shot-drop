const Reservation = require('../models/reservationModel')
const { sendEmail } = require('../middleware/sendEmail')

const getReservations = async (req, res) => {
	const reservations = await Reservation.find()

	res.json(reservations)
}

const createReservation = async (req, res) => {
	if (!req.body.firstName || !req.body.lastName || !req.body.email ||
		!req.body.guestCount || !req.body.level) {

		res.status(400).json({ 'status': 'error' })
		return;
	}

	try {
		const reservation = await Reservation.create({
			level: req.body.level,
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			guestCount: req.body.guestCount
		})

		res.status(201).json({ 'status': 'success' })

		const level = req.body.level === '1' ? "New Player" : "Up Your Game";
		const message = `New Reservation Details:
		
		Name: ${req.body.firstName} ${req.body.lastName}
		Email: ${req.body.email}
		Number of Additional Guests: ${req.body.guestCount}
		Level: "${level}"
		`

		sendEmail(process.env.MAIL_TO, 'New Reservation Created', message)
	}
	catch (error) {
		res.status(500).json({ 'status': 'error' })
	}
}

const deleteReservation = async (req, res) => {
	const reservation = await Reservation.findById(req.params.id)

	if (!reservation) {
		res.status(400).json({ 'status': 'error' })
	}

	await reservation.remove() 
	res.status(200).json({id: req.params.id})
}

module.exports = {
	getReservations,
	createReservation,
	deleteReservation
}