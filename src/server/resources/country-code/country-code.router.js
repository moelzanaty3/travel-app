const Router = require('express').Router
const controllers = require('./country-code.controllers')

const router = Router()

// api/country-code
router.route('/').get(controllers.getCountryInfo)

module.exports = router
