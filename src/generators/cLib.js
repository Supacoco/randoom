export default class CLib {
  constructor (seed) {
    this.seed = seed
  }

  generate () {
    this.seed = (this.seed * 1103515245 + 12345) / 65536 % 32768
    return this.seed / 32767
  }
}
