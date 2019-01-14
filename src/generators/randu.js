export default function* (init = Date.now()) {
  let seed = init

  while (true) {
    seed *= 65539 % 2147483648
    yield seed / 2147483648
  }
}
