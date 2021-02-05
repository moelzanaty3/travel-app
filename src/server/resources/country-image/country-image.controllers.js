const getCountryImageService = require('./country-image.service')
const responseBuilder = require('../../helpers/response/responseBuilder')

async function getImageURL(req, res) {
  try {
    let { city, country } = req.query
    let countryInfo = await getCountryImageService.getImageURL(city, country)
    responseBuilder.sendResponse(
      'success',
      '',
      countryInfo,
      res,
      'Country Image Retrieved successfully'
    )
  } catch (error) {
    responseBuilder.sendResponse('failure', error, '', res, 'Failed to Retrieve Country Image')
  }
}

module.exports = {
  getImageURL,
}
