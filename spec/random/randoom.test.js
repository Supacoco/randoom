import { 
    randU,
    randMSWindows,
    hooleCentralRandomizer
} from '../../app/random/randoom';

describe('randU test suite', () => {
    test('basic case', () => {
        const { result, next } = randU(1337);

        expect(result).toBeDefined();
        expect(next).toBeDefined();
        expect(result).toBeGreaterThan(0);
        expect(result).toBeLessThan(1);
    });

    test('same seed should produce same result', () => {
        const firstGeneration = randU(1337),
            secondGeneration = randU(1337);

        expect(secondGeneration).toEqual(firstGeneration);
    });
});

describe('randMSWindows test suite', () => {
    test('basic case', () => {
        const { result, next } = randMSWindows(1337);

        expect(result).toBeDefined();
        expect(next).toBeDefined();
        expect(result).toBeGreaterThan(0);
        expect(result).toBeLessThan(1); 
    });

    test('same seed should produce same result', () => {
        const firstGeneration = randMSWindows(1337),
            secondGeneration = randMSWindows(1337);

        expect(secondGeneration).toEqual(firstGeneration);
    });
});

describe('hooleCentralRandomizer test suite', () => {
    test('basic case', () => {
        const { result, next } = hooleCentralRandomizer(1337);

        expect(result).toBeDefined();
        expect(next).toBeDefined();
        expect(result).toBeGreaterThan(0);
        expect(result).toBeLessThan(1); 
    });

    test('same seed should produce same result', () => {
        const firstGeneration = hooleCentralRandomizer(1337),
            secondGeneration = hooleCentralRandomizer(1337);
        
        expect(secondGeneration).toEqual(firstGeneration);
    });
});