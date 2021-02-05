const fetch = require('node-fetch')
const { WEATHER_BASE_URL } = require('../../config')

async function getWeatherForecast(latitude, longitude) {
  const URL = `${WEATHER_BASE_URL}/current?lat=${latitude}&lon=${longitude}&key=${process.env.WEHATER_API_KEY}`
  try {
    const response = await fetch(URL)
    const { data } = await response.json()
    const { weather } = data[0]
    return weather
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  getWeatherForecast,
}
