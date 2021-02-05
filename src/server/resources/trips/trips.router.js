const Router = require('express').Router
const controllers = require('./trips.controllers')

const router = Router()

// api/trips
router.route('/').get(controllers.getAllTrips).post(controllers.saveTrip)

module.exports = router
