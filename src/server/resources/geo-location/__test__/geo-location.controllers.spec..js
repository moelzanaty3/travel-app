import controllers from '../geo-location.controllers'
import { isFunction } from 'lodash'

describe('geo location controllers', () => {
  test('has get location controllers', () => {
    expect(isFunction(controllers.getGeoLocation)).toBe(true)
  })
})
