export default class Hoole {
  constructor (seed) {
    this.seed = seed
  }

  generate () {
    this.seed = (this.seed * 9301 + 49297) % 233280
    return this.seed / 233280
  }
}
