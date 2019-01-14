export default function* (init = Date.now()) {
  let seed = init
  
  while (true) {
    seed = (seed * 214013 + 2531011) / 65536 % 32768
    yield seed / 32767
  }
}
