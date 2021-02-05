import router from '../weather.router'

describe('get weather router', () => {
  test('be able to get weather', () => {
    const routes = [{ path: '/', method: 'get' }]

    routes.forEach((route) => {
      const match = router.stack.find(
        (s) => s.route.path === route.path && s.route.methods[route.method]
      )
      expect(match).toBeTruthy()
    })
  })
})
