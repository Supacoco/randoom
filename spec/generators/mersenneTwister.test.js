import twister from "../../src/generators/mersenneTwister"

describe("MersenneTwister test suite", () => {
  test("MersenneTwister implementation", () => {
    const seed = 1337
    const generator = twister(seed)
    const result = generator.next()

    expect(result.value).toEqual(0.26202467625542186)
  })

  test("should reuse previous result as seed", () => {
    const seed = 1337
    const generator = twister(seed)
    const firstResult = generator.next()
    const secondResult = generator.next()

    expect(firstResult.value).toEqual(0.26202467625542186)
    expect(secondResult.value).toEqual(0.5605297529978048)
  })

  test("should use current date as seed if none is provided", () => {
    const _originalDate = Date
    Date.now = jest.fn(() => 1337)

    const generator = twister()
    const result = generator.next()

    expect(result.value).toEqual(0.26202467625542186)

    Date = _originalDate
  });
});
