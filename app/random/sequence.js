import { randU } from './randoom';

const generateSequence = ({ seed, length }) => {
    const dots = [];
    let x, y, next = seed;

    for(let counter = length; counter > 0; counter--) {
        ({ result: x, next } = randU(next));
        ({ result: y, next } = randU(next));

        dots.push({ x, y });
    };

    return dots;
};

export { generateSequence };