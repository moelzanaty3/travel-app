import router from '../country-code.router'

describe('get Country Code router', () => {
  test('be able to get Country Code', () => {
    const routes = [{ path: '/', method: 'get' }]

    routes.forEach((route) => {
      const match = router.stack.find(
        (s) => s.route.path === route.path && s.route.methods[route.method]
      )
      expect(match).toBeTruthy()
    })
  })
})
