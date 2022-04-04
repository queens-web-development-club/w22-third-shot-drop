const express = require('express')
const router = express.Router()
const { getReservations, createReservation, deleteReservation } = require('../controllers/reservationController')

router.get('/', getReservations)

router.post('/', createReservation)

router.delete('/:id', deleteReservation)

module.exports = router