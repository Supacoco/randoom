const randU = (seed) => {
    const next = (seed * 65539) % 2147483648;
    
    return {
        result: next / 2147483648,
        next
    };
};

const randMSWindows = (seed) => {
    const next = ((seed * 214013 + 2531011) / 65536) % 32768;

    return {
        result: next / 32768,
        next
    };
};

const hooleCentralRandomizer = (seed) => {
    const next = (seed * 9301 + 49297) % 233280;

    return {
        result: next / 233280,
        next
    };
};

export {
    randU,
    randMSWindows,
    hooleCentralRandomizer
};