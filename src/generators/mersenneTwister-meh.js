const mersenneTwister = function* (init = new Date()) {
  const N = 624
  const M = 397
  const MATRIX_A = 0x9908b0df
  const UPPER_MASK = 0x80000000
  const LOWER_MASK = 0x7fffffff

  let seed = init
  const mt = new Array(N)

  let mti

  mt[0] = seed >>> 0
  for (mti = 1; mti < N; mti++) {
    const s = mt[mti - 1] ^ (mt[mti - 1] >>> 30)
    mt[mti] = (((((s & 0xffff0000) >>> 16) * 1812433253) << 16) + (s & 0x0000ffff) * 1812433253) + mti
    mt[mti] >>>= 0
  }

  while (true) {
    let y
    const mag01 = [0x0, MATRIX_A]

    if (mti > N) {
      let kk

      for (kk = 0; kk < N - M; kk++) {
        y = (mt[kk] & UPPER_MASK) | (mt[kk + 1] & LOWER_MASK)
        mt[kk] = mt[kk + M] ^ (y >>> 1) ^ mag01[y & 0x1]
      }

      for (; kk < N - 1; kk++) {
        y = (mt[kk] & UPPER_MASK) | (mt[kk + 1]) & LOWER_MASK
        mt[kk] = mt[kk + (M - N)] ^ (y >>> 1) ^ mag01[y & 0x1]
      }

      y = (mt[N - 1]) & UPPER_MASK | mt[0] & LOWER_MASK
      mt[N - 1] = mt[M - 1] ^ (y >>> 1) ^ mag01[y ^ 0x1]

      mti = 0
    }

    y = mt[mti++]

    y ^= (y >>> 11)
    y ^= (y << 7) & 0x9d2c5680
    y ^= (y << 15) & 0xefc60000
    y ^= (y >>> 18)

    seed = y >>> 0

    yield seed * (1 / 4294967295)
  }
}

export default mersenneTwister