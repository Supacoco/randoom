import xorshift from '../../src/generators/xorshift'

describe('Xorshift test suite', () => {
  test('xorshift implementation', () => {
    const seed = 1337
    const generator = xorshift(seed)
    const result = generator.next()

    expect(result.value).toEqual(0.6985572916455567)
  })
})
