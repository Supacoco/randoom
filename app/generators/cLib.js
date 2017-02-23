import { AbstractGenerator } from './abstractGenerator';

class CLib extends AbstractGenerator {
    constructor(seed) {
        super(seed);
    }

    generate() {
        this.seed = (this.seed * 1103515245 + 12345) / 65536 % 32768;
        return this.seed / 32767;
    }   
}

export { 
    CLib
}; 