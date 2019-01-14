import randu from "../../src/generators/randu"

describe("Randu test suite", () => {
  test("randu implementation", () => {
    const seed = 1337
    const generator = randu(seed)
    const result = generator.next()

    expect(result.value).toEqual(0.04080386972054839)
  })

  test("should use date now if no seed is given", () => {
    const _originalDate = Date
    Date.now = jest.fn(() => 1337)

    const generator = randu()
    const result = generator.next()

    expect(result.value).toEqual(0.04080386972054839)
  });
})
