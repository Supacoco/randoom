import { AbstractGenerator } from './abstractGenerator';

class Randu extends AbstractGenerator {
    constructor(seed) {
        super(seed);
    }

    generate() {
        this.seed = this.seed * 65539 % 2147483648;
        return this.seed / 2147483648;
    }   
}

export { 
    Randu
}; 