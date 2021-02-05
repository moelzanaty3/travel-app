const tripService = require('./trips.service')
const responseBuilder = require('../../helpers/response/responseBuilder')

async function getAllTrips(req, res) {
  try {
    let trips = await tripService.getAllTrips()
    responseBuilder.sendResponse('success', '', trips, res, 'Trips Retrieved successfully')
  } catch (error) {
    responseBuilder.sendResponse('failure', error, '', res, 'Failed to Retrieved Trips')
  }
}

async function saveTrip(req, res) {
  try {
    let trip = req.body
    let saveTrip = await tripService.saveTrip(trip)
    responseBuilder.sendResponse('success', '', saveTrip, res, 'Trip Saved successfully')
  } catch (error) {
    responseBuilder.sendResponse('failure', error, '', res, 'Failed to Save Trip')
  }
}

module.exports = {
  saveTrip,
  getAllTrips,
}
