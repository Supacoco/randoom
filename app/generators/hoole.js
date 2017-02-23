import { AbstractGenerator } from './abstractGenerator';

class Hoole extends AbstractGenerator {
    constructor(seed) {
        super(seed);
    }

    generate() {
        this.seed = (this.seed * 9301 + 49297) % 233280;
        return this.seed / 233280;
    }   
}

export { 
    Hoole
}; 