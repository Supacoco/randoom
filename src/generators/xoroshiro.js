import Long from 'long'

export const splitmix64 = (seed) => {
  let z = seed

  z = z.add(Long.fromString('0x9E3779B97F4A7C15'), false, 16)
  z = z.xor(z.shiftRightUnsigned(30))
  z = z.multiply(Long.fromString('0xBF58476D1CE4E5B9', false, 16))
  z = z.xor(z.shiftRightUnsigned(27))
  z = z.multiply(Long.fromString('0x94D049BB133111EB', false, 16))
  z = z.xor(z.shiftRightUnsigned(31))

  return z
}

export default class Xoroshiro {
  constructor (seed) {
    this.seed = seed
    this.initialize()
  }

  initialize () {
    this.state0 = splitmix64(new Long(this.seed, 0, false))
    this.state1 = splitmix64(this.state0)
  }

  rotl (x, k) {
    const v1 = x.shiftLeft(k)
    const v2 = x.shiftRightUnsigned(64 - k)
    return v1.or(v2)
  }

  generate () {
    let s0 = this.state0
    let s1 = this.state1
    let result = s0.add(s1)
    s1 = s1.xor(s0)

    this.state0 = this.rotl(s0, 55).xor(s1).xor(s1.shiftLeft(14))
    this.state1 = this.rotl(s1, 36)

    if (result.isNegative()) {
      result = result.negate()
    }

    // precision lost when using toNumber :(
    return (result.toNumber() / Number.MAX_SAFE_INTEGER) % 1
  }
}
