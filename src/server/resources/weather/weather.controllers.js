const weatherForecastService = require('./weather.service')
const responseBuilder = require('../../helpers/response/responseBuilder')

async function getWeatherForecast(req, res) {
  try {
    let { latitude, longitude } = req.query
    let weatherForecast = await weatherForecastService.getWeatherForecast(latitude, longitude)
    responseBuilder.sendResponse(
      'success',
      '',
      weatherForecast,
      res,
      'Weather Retrieved successfully'
    )
  } catch (error) {
    responseBuilder.sendResponse('failure', error, '', res, 'Failed to retrieve Weather')
  }
}

module.exports = {
  getWeatherForecast,
}
