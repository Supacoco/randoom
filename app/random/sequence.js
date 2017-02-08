const generateSequence = ({ seed, length, generatorFn }) => {
    const dots = [];
    let x, y, next = seed;

    for(let counter = length; counter > 0; counter--) {
        ({ result: x, next } = generatorFn(next));
        ({ result: y, next } = generatorFn(next));

        dots.push({ x, y });
    };

    return dots;
};

export { generateSequence };