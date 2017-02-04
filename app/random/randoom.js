const randU = (seed) => {
    const next = (seed * 65539) % 2147483648;
    
    return {
        result: next / 2147483648,
        next
    };
};

export {
    randU
};