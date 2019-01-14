export default function* (init = Date.now()) {
  let seed = init

  while (true) {
    seed = ((seed * 1103515245 + 12345) / 65536) % 32768
    yield seed / 32767
  }
}
