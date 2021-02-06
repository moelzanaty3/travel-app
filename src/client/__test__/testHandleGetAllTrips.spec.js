// to solve ReferenceError: regeneratorRuntime is not defined
// https://knowledge.udacity.com/questions/174638
import 'babel-polyfill'
import { getTripDetails } from '../js/controller'

describe('Testing Get All Trips Details functionality', () => {
  test('It should return true because the function is defined', () => {
    expect(getTripDetails).toBeDefined()
  })
  test('It should return true as getTripDetails is a function', () => {
    expect(typeof getTripDetails).toBe('function')
  })
})
