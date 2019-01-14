import hoole from "../../src/generators/hoole"

describe("Hoole central test suite", () => {
  test("Hoole implementation", () => {
    const seed = 1337
    const generator = hoole(seed)
    const  result = generator.next()

    expect(result.value).toEqual(0.5182355967078189)
  })

  test("should use date now if no seed is given", () => {
    const _originalDate = Date
    Date.now = jest.fn(() => 1337)

    const generator = hoole()
    const result = generator.next()

    expect(result.value).toEqual(0.5182355967078189)
  });
})
