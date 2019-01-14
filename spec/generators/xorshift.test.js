import xorshift from "../../src/generators/xorshift"

describe("Xorshift test suite", () => {
  test("xorshift implementation", () => {
    const seed = 1337
    const generator = xorshift(seed)
    const result = generator.next()

    expect(result.value).toEqual(0.6985572916455567)
  });

  test("should use date now if no seed is given", () => {
    const _originalDate = Date
    Date.now = jest.fn(() => 1337)

    const generator = xorshift()
    const result = generator.next()

    expect(result.value).toEqual(0.6985572916455567)
  })
})
