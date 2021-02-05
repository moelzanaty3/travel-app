import router from '../trips.router'

describe('Save Trip Router', () => {
  test('be able to save trip', () => {
    const routes = [
      { path: '/', method: 'get' },
      { path: '/', method: 'post' },
    ]

    routes.forEach((route) => {
      const match = router.stack.find(
        (s) => s.route.path === route.path && s.route.methods[route.method]
      )
      expect(match).toBeTruthy()
    })
  })
})
