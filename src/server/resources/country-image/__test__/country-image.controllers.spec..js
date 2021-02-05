import controllers from '../country-image.controllers'
import { isFunction } from 'lodash'

describe('Country Image controllers', () => {
  test('has weather controllers', () => {
    expect(isFunction(controllers.getImageURL)).toBe(true)
  })
})
