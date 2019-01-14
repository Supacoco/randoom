export default function* (init = Date.now()) {
  let seed = init

  while (true) {
    seed = (seed * 9301 + 49297) % 233280
    yield seed / 233280
  }
}
