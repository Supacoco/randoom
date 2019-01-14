import cLib from "../../src/generators/cLib"

describe("C Lib test suite", () => {
  test("C lib implementation", () => {
    const seed = 1337
    const generator = cLib(seed)
    const result = generator.next()

    expect(result.value).toEqual(0.03661547490943394)
  })

  test("should use date now if no seed is given", () => {
    const _originalDate = Date
    Date.now = jest.fn(() => 1337)

    const generator = cLib()
    const result = generator.next()

    expect(result.value).toEqual(0.03661547490943394)
  })
})
