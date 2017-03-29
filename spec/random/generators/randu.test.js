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

    describe('Randu::generateSequence', () => {
        test('generate sequence should return an array of generated values', () => {
            const seed = 1337,
                sequenceLength = 12,
                randu = new Randu(1337);

            randu.generate = jest.fn();
        
            const sequence = randu
                .generateSequence(sequenceLength);

            expect(sequence).toBeDefined();
            expect(sequence.length).toEqual(sequenceLength);
            expect(randu.generate.mock.calls.length)
                .toEqual(sequenceLength);
        });
    });

    describe('Randu::generateNormalSequence', () => {
        test('generate normal sequence should return an array of generated values', () => {
            const seed = 1337,
                sequenceLength = 12,
                randu = new Randu(1337);

            const sequence = randu
                .generateNormalSequence(sequenceLength);

            expect(sequence).toBeDefined();
            expect(sequence.length).toEqual(sequenceLength);
        });
    });
});