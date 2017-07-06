export default class Xoroshiro {
    constructor(seed) {
      this.seed = seed
      this.state = []
      this.initialize()
    }

    initialize() {
      this.state[0] = this.splitmix64(this.seed)
      this.state[1] = this.splitmix64(this.state[0])
      console.log('state: ', this.state)
    }

    splitmix64(seed) {
      let z = seed + 0x9E3779B97F4A7C15
      console.log(z)
      z = (z ^ (z >> 30)) * 0xBF58476D1CE4E5B9
      console.log(z)
      z = (z ^ (z >> 27)) * 0x94D049BB133111EB
      console.log(z)
      console.log(z ^ (z >> 31))
      return z ^ (z >> 31)
    }
    
    rotl(x, k) {
      return (x << k) | (x >> (64 - k))
    }

    generate() {
      let s0 = this.state[0]
      let s1 = this.state[1]
      let result = s0 + s1

      s1 ^= s0
      this.state[0] = this.rotl(s0, 55) ^ s1 ^ (s1 << 14)
      this.state[1] = this.rotl(s1, 36)

      return result
    }
}