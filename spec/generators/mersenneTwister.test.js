import twister from '../../src/generators/mersenneTwister-meh'

describe('MersenneTwister test suite', () => {
  describe('MersenneTwister::generate', () => {
    test('MersenneTwister implementation', () => {
      const seed = 1337
      const generator = twister(seed)
      const result = generator.next()

      expect(result.value).toEqual(0.26202467625542186)
    })

    test('should reuse previous result as seed', () => {
      const seed = 1337
      const generator = twister(seed)
      const firstResult = generator.next()
      const secondResult = generator.next()

      console.log(generator.next())
      console.log(firstResult)
      console.log(secondResult)

      expect(firstResult.value).toEqual(0.26202467625542186)
      expect(secondResult.value).toEqual(0.5605297529978048)
    })
  })
})
