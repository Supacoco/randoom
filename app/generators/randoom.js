const randUb = (seed) => {
    const next = (seed * 65539) % 2147483648;
    
    return {
        result: next / 2147483648,
        next
    };
};

const randMSWindows = (seed) => {
    const next = (seed * 214013 + 2531011) / 65536 % 32768;

    return {
        result: next / 32767,
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

const randCLib = (seed) => {
    const next = (seed * 1103515245 + 12345) / 65536 % 32768;

    return {
        result: next / 32767,
        next
    };
};

class XorShift {
    constructor() {
        this.x = 123456789;
        this.y = 362436069;
        this.z = 521288629;
    }

    generate() {
        if (!this.seed) {
            throw new Error('XorShift::generate - expected seed to be initialized');
        }

        this.t = (this.x ^ (this.x << 11)) & 0x7fffffff;
        
        const next = (this.seed ^ (this.seed >> 19) ^
            (this.t ^ (this.t >> 8)));
        
        this.updateState();

        return {
            result: next / 2147483648,
            next
        };
    }

    updateState() {
        this.x = this.y;
        this.y = this.z;
        this.z = this.seed;
    }

    resetState() {
        this.x = 123456789;
        this.y = 362436069;
        this.z = 521288629;
    }
}

const xorShift = new XorShift()
const randXorShift = (seed) => {
    xorShift.seed = seed;
    return xorShift.generate();
};

export {
    randUb,
    randMSWindows,
    hooleCentralRandomizer,
    randCLib,
    randXorShift
};