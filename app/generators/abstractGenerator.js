class AbstractGenerator {
    constructor(seed) {
        if (this.constructor === AbstractGenerator) {
            throw new TypeError('AbstractGenerator should not be instanciated'); 
        }

        this.seed = seed;
    }

    generateSequence(length) {
        const dots = [];

        for (let counter = length; counter > 0; counter--) {
            dots.push(this.generate());
        }

        return dots;
    }
}

export {
    AbstractGenerator
};