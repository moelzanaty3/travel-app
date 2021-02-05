import controllers from '../trips.controllers'
import { isFunction } from 'lodash'

describe('Save Trip Controllers', () => {
  test('has save trip controllers', () => {
    expect(isFunction(controllers.saveTrip)).toBe(true)
  })
})
