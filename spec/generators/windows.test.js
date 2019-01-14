import windows from "../../src/generators/windows"

describe("Windows random number generator test suite", () => {
  test("windows implementation", () => {
    const seed = 1337
    const generator = windows(seed)
    const result = generator.next()

    expect(result.value).toEqual(0.13442486602255127)
  })

  test("should use date now if no seed is given", () => {
    const _originalDate = Date
    Date.now = jest.fn(() => 1337)

    const generator = windows()
    const result = generator.next()

    expect(result.value).toEqual(0.13442486602255127)
  })
})
