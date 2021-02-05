const getCountryCodeService = require('./country-code.service')
const responseBuilder = require('../../helpers/response/responseBuilder')

async function getCountryInfo(req, res) {
  try {
    let { countryCode } = req.query
    let countryInfo = await getCountryCodeService.getCountryInfo(countryCode)
    responseBuilder.sendResponse(
      'success',
      '',
      countryInfo,
      res,
      'Country Code Retrieved successfully'
    )
  } catch (error) {
    responseBuilder.sendResponse('failure', error, '', res, 'Failed to Retrieve Country Code')
  }
}

module.exports = {
  getCountryInfo,
}
