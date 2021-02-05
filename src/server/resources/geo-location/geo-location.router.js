const Router = require('express').Router
const controllers = require('./geo-location.controllers')

const router = Router()

// api/geo-location
router.route('/').get(controllers.getGeoLocation)

module.exports = router
