const fetch = require('node-fetch')
const { PIXABAY_BASE_URL } = require('../../config')

async function getImageURL(city, country) {
  const BASE_URL = `${PIXABAY_BASE_URL}/?key=${process.env.PIXABAY_API_KEY}`
  const queryFormat = `image_type=photo&pretty=true&category=places`
  let URL = `${BASE_URL}&q=${city}&${queryFormat}`
  try {
    let images = ''
    const response = await fetch(URL)
    const { totalHits: totalCityHist, hits: cityHits } = await response.json()
    if (totalCityHist === 0) {
      URL = `${BASE_URL}&q=${country}&${queryFormat}`
      const response = await fetch(URL)
      const { hits: countryHits } = await response.json()
      images = countryHits
    } else {
      images = cityHits
    }
    return {
      imageURL: images[0].largeImageURL,
    }
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  getImageURL,
}
