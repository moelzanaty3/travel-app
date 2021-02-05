const Router = require('express').Router
const controllers = require('./country-image.controllers')

const router = Router()

// api/country-code
router.route('/').get(controllers.getImageURL)

module.exports = router
