const request = require('supertest')
const { app } = require('../index')

describe('API Test', () => {
  test('It should response the GET method', (done) => {
    request(app)
      .get('/')
      .then((response) => {
        expect(response.statusCode).toBe(200)
        done()
      })
  })
  test('Should Direct To index.html', (done) => {
    request(app)
      .get('/')
      .send('./dist/index.html')
      .then((response) => {
        expect(response.statusCode).toEqual(200)
        done()
      })
  })
  test('It Should response with error for wrong path', (done) => {
    request(app)
      .get('/zanaty')
      .then((response) => {
        expect(response.statusCode).toBe(404)
        done()
      })
  })
})
