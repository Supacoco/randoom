export default function* (init = Date.now()) {
  let x = 123456789
  let y = 362436069
  let z = 521288629
  let seed = init

  while (true) {
    let t = (x ^ (x << 11)) & 0x7fffffff
    seed = (seed ^ (seed >> 19) ^
      (t ^ (t >> 8)))

    x = y
    y = z
    z = seed

    yield seed / 2147483648
  }
}
