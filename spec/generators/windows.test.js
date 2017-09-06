import Windows from '../../src/generators/windows'

describe('Windows random number generator test suite', () => {
  describe('Windows::generate', () => {
    test('windows implementation', () => {
      const seed = 1337,
        windows = new Windows(seed),
        result = windows.generate()

      expect(result).toEqual(0.13442486602255127)
    })
  })
})