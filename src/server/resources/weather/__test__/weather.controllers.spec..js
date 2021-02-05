import controllers from '../weather.controllers'
import { isFunction } from 'lodash'

describe('weather controllers', () => {
  test('has weather controllers', () => {
    expect(isFunction(controllers.getWeatherForecast)).toBe(true)
  })
})
