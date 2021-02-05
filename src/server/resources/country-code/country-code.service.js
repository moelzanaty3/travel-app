const fetch = require('node-fetch')
const { RESET_COUNTRIES_BASE_URL } = require('../../config')

async function getCountryInfo(countryCode) {
  const URL = `${RESET_COUNTRIES_BASE_URL}/${countryCode}`
  try {
    const response = await fetch(URL)
    const { name: country, flag: countryFlag } = await response.json()
    return { country, countryFlag }
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  getCountryInfo,
}
