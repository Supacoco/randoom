import { randU } from './randoom';

const generateSequence = (seed, length) => {
    const dots = [];
    let tmpSeed = seed;

    for(let counter = length; counter > 0; counter--) {
        const x = randU(tmpSeed);
        const y = randU(x.next);

        dots.push({
            x: x.result,
            y: y.result
        });

        tmpSeed = y.next;
    };

    return dots;
};

export { generateSequence };

// recursiveness?