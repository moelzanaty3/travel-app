const fetch = require('node-fetch')
const { GEONAME_BASE_URL } = require('../../config')

async function getGeoLocation(city) {
  const URL = `${GEONAME_BASE_URL}/searchJSON?formatted=true&q=${city}&username=${process.env.GEONAME_API_KEY}`
  try {
    const response = await fetch(URL)
    const json = await response.json()
    const { lat, lng, countryCode } = json.geonames[0]
    return {
      latitude: lat,
      longitude: lng,
      countryCode,
    }
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  getGeoLocation,
}
