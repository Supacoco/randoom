import XKCD from '../../src/generators/xkcd'

describe('XKCD test suite', () => {
  describe('XKCD::generate', () => {
    test('generate should return 4', () => {
      const xkcd = new XKCD()
      expect(xkcd.generate()).toEqual(0.4)
    })
  })
})
