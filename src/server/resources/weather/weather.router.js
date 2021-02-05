const Router = require('express').Router
const controllers = require('./weather.controllers')

const router = Router()

// api/weather-forecast
router.route('/').get(controllers.getWeatherForecast)

module.exports = router
