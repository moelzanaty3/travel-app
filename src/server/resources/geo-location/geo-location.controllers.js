const geoLocationService = require('./geo-location.service')
const responseBuilder = require('../../helpers/response/responseBuilder')

async function getGeoLocation(req, res) {
  try {
    let city = req.query.city
    let geoLocation = await geoLocationService.getGeoLocation(city)
    responseBuilder.sendResponse(
      'success',
      '',
      geoLocation,
      res,
      'Geo Location Retrieved successfully'
    )
  } catch (error) {
    responseBuilder.sendResponse('failure', error, '', res, 'Failed to retrieve Geo Location')
  }
}

module.exports = {
  getGeoLocation,
}
