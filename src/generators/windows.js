export default class Windows {
    constructor(seed) {
        this.seed = seed
    }

    generate() {
        this.seed = (this.seed * 214013 + 2531011) / 65536 % 32768
        return this.seed / 32767
    }   
}
