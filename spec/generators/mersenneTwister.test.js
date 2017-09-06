import MersenneTwister from '../../src/generators/mersenneTwister'

describe('MersenneTwister test suite', () => {
  describe('MersenneTwister::generate', () => {
    test('MersenneTwister implementation', () => {
      const seed = 1337,
        twister = new MersenneTwister(seed),
        result = twister.generate()

        expect(result).toEqual(0.26202467625542186)
        expect(twister.generate()).toEqual(0.5605297529978048)
    })

    test('second call to generate', () => {
      const seed = 1337,
        twister = new MersenneTwister(seed)
      
      twister.generate()

      expect(twister.generate()).toEqual(0.5605297529978048)
    })
  })
})