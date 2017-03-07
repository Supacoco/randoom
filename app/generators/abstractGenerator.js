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

    generateNormalSequence(length) {
        const dots = [];
        let x, y, r;

        for (let counter = length; counter > 0; counter--) {
            do {
                x = 2 * this.generate() - 1;
                y = 2 * this.generate() - 1;
                r = x ** 2 + y ** 2;
            } while (r >= 1 || r === 0);

            dots.push(
                x * Math.sqrt(-2 * Math.log(r) / r)
            );
        }

        return dots;
    }
}

export {
    AbstractGenerator
};