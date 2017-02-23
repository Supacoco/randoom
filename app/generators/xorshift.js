import { AbstractGenerator } from './abstractGenerator';

class Xorshift extends AbstractGenerator {
    constructor(seed) {
        super(seed);

        this.x = 123456789;
        this.y = 362436069;
        this.z = 521288629;
    }

    generate() {
        this.t = (this.x ^ (this.x << 11)) & 0x7fffffff;
        
        this.seed = (this.seed ^ (this.seed >> 19) ^
            (this.t ^ (this.t >> 8)));
        
        this.x = this.y;
        this.y = this.z;
        this.z = this.seed;

        return this.seed / 2147483648;
    }   
}

export { 
    Xorshift
}; 