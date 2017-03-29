import { AbstractGenerator } from './abstractGenerator';

class Windows extends AbstractGenerator {
    constructor(seed) {
        super(seed);
    }

    generate() {
        this.seed = (this.seed * 214013 + 2531011) / 65536 % 32768;
        return this.seed / 32767;
    }   
}

export { 
    Windows
}; 