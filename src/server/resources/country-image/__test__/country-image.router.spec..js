import router from '../country-image.router'

describe('get Country Image router', () => {
  test('be able to get Country Image', () => {
    const routes = [{ path: '/', method: 'get' }]

    routes.forEach((route) => {
      const match = router.stack.find(
        (s) => s.route.path === route.path && s.route.methods[route.method]
      )
      expect(match).toBeTruthy()
    })
  })
})
