import xkcd from "../../src/generators/xkcd"

describe("XKCD test suite", () => {
  test("generate should return 4", () => {
    const generator = xkcd()
    const result = generator.next()

    expect(result.value).toEqual(0.4)
  })
})
