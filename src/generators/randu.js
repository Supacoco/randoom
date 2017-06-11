export default class Randu {
    constructor(seed) {
        this.seed = seed
    }

    generate() {
        this.seed = this.seed * 65539 % 2147483648
        return this.seed / 2147483648
    }   
}
