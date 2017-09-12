export default class Xoroshiro {
  constructor (seed) {
    this.seed = seed

    this.test = fetch('./xoroshiro.wasm')
      .then(response => response.arrayBuffer())
      .then(bytes => WebAssembly.instantiate(bytes, {}))
      .then(({ instance }) => {
        this.exports = instance.exports
        this.exports.init(this.seed)
      })
  }

  generate () {
    return this.exports.next()
  }
}
