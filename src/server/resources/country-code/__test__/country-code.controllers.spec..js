import controllers from '../country-code.controllers'
import { isFunction } from 'lodash'

describe('Country Code controllers', () => {
  test('has weather controllers', () => {
    expect(isFunction(controllers.getCountryInfo)).toBe(true)
  })
})
