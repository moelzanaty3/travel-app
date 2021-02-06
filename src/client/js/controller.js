import { fetchData, saveData } from './request'
import { handleError } from '../utils/utils'

const getTripDetails = async () => {
  const city = document.getElementById('city').value
  const start = document.getElementById('check-in').value
  const end = document.getElementById('check-out').value
  if (start > end) {
    handleError("Please Change Dates as End Date can't be before Start Date")
    return
  }
  if (new Date(start.toString()) < new Date()) {
    handleError("Start Date Can't be in the past")
    return
  }
  const { latitude, longitude, countryCode } = await fetchData(`api/geo-location?city=${city}`)
  const { country, countryFlag } = await fetchData(`api/country-code/?countryCode=${countryCode}`)
  const { description: weatherForecast } = await fetchData(
    `api/weather-forecast?latitude=${latitude}&longitude=${longitude}`
  )
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

const saveTrip = async (trip) => {
  await saveData('api/trip', trip)
}

const getAllTrips = async () => {
  return await fetchData('api/trip')
}

export { getTripDetails, saveTrip, getAllTrips }
