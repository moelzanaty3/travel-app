import router from '../geo-location.router'

describe('item router', () => {
  test('be able to get geo location', () => {
    const routes = [{ path: '/', method: 'get' }]

    routes.forEach((route) => {
      const match = router.stack.find(
        (s) => s.route.path === route.path && s.route.methods[route.method]
      )
      expect(match).toBeTruthy()
    })
  })
})
