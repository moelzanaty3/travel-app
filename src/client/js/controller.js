import { fetchData, saveData } from './request'
import { handleError } from '../utils/utils'

/**
 * Get All Trips Available for this this user
 */
const getTripDetails = async () => {
  // Get the city value
  const city = document.getElementById('city').value
  // Get the Start Date value
  const start = document.getElementById('check-in').value
  // Get the End Date value
  const end = document.getElementById('check-out').value
  // handle if the start date is greater than end date
  if (start > end) {
    handleError("Please Change Dates as End Date can't be before Start Date")
    return
  }
  // handle if the start date in the past
  if (new Date(start.toString()) < new Date()) {
    handleError("Start Date Can't be in the past")
    return
  }
  // Get Geo Location Information based on selected city/country
  const { latitude, longitude, countryCode } = await fetchData(`api/geo-location?city=${city}`)
  // Get Flag / Code for targeted City/Country
  const { country, countryFlag } = await fetchData(`api/country-code/?countryCode=${countryCode}`)
  // Get Forecast Weather for targeted City/Country
  const { description: weatherForecast } = await fetchData(
    `api/weather-forecast?latitude=${latitude}&longitude=${longitude}`
  )
  // Get Image for targeted City/Country
  const { imageURL } = await fetchData(`api/country-image?city=${city}&country=${country}`)

  return {
    city,
    start,
    end,
    longitude,
    latitude,
    countryCode,
    country,
    countryFlag,
    weatherForecast,
    imageURL,
  }
}
/**
 * @param trip
 * @returns {Promise<void>}
 */
const saveTrip = async (trip) => {
  await saveData('api/trip', trip)
}
/**
 * Get All Trips that available for the current user
 * @returns {Promise<*>}
 */
const getAllTrips = async () => {
  return await fetchData('api/trip')
}

export { getTripDetails, saveTrip, getAllTrips }
