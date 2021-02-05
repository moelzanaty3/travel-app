const dotenv = require('dotenv')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
let logger = require('morgan')
let createError = require('http-errors')

const geoLocationRouter = require('./resources/geo-location/geo-location.router')
const weatherForecastRouter = require('./resources/weather/weather.router')
const countryCodeRouter = require('./resources/country-code/country-code.router')
const countryImageRouter = require('./resources/country-image/country-image.router')
const tripRouter = require('./resources/trips/trips.router')

dotenv.config()

const app = express()

app.use(logger('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('dist'))

app.use('/api/geo-location', geoLocationRouter)
app.use('/api/weather-forecast', weatherForecastRouter)
app.use('/api/country-code', countryCodeRouter)
app.use('/api/country-image', countryImageRouter)
app.use('/api/trip', tripRouter)

app.get('/', (req, res) => {
  res.sendFile('dist/index.html')
  // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, (error) => {
  if (error) throw new Error(error)
  console.log('Server listening on port 8081!')
})

app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.sendFile('dist/error.html')
})
