const mongoose = require('mongoose')

const reservationSchema = mongoose.Schema({
	level: {
		type: String, 
		required: true
	},
	firstName: {
		type: String, 
		required: true
	},
	lastName: {
		type: String, 
		required: true
	},
	email: {
		type: String, 
		required: true
	},
	guestCount: {
		type: Number, 
		required: true
	}
})

module.exports = mongoose.model('Reservation', reservationSchema)