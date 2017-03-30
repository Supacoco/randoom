import { Randu } from '../../../src/generators/randu';

describe('Randu test suite', () => {
    describe('Randu::generate', () => {
        test('generate should update the seed', () => {
            const seed = 1337,
                randu = new Randu(seed),
                result = randu.generate();
            
            expect(randu.seed).not.toBe(seed);
        });

        test('generate should return the same result with the same seed', () => {
            const seed = 1337,
                generator1 = new Randu(seed),
                generator2 = new Randu(seed);
            
            const result1 = generator1.generate(),
                result2 = generator2.generate();
            
            expect(result2).toEqual(result1);
        });

        test('generate should return floats between 0 and 1', () => {
            const seed = 1337,
                randu = new Randu(seed),
                result = randu.generate();
            
            expect(result).toBeDefined();
            expect(result).toBeGreaterThan(0);
            expect(result).toBeLessThan(1);
        });

        test('randu implementation', () => {
            const seed = 1337,
                randu = new Randu(seed),
                result = randu.generate();
            
            expect(result).toEqual(0.04080386972054839);
        });
    });
});