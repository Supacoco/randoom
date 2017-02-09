import { generateSequence } from '../../app/random/sequence';

describe('generateSequence test suite', () => {
    test('basic case', () => {
        const seed = 1337,
            length = 12,
            generatorFnMock = jest.fn(() => {
                return {
                    result: 0.31415,
                    next: 2048
                };
            });

        const sequence = generateSequence({ 
            seed, 
            length, 
            generatorFn: generatorFnMock
        });

        expect(sequence).toBeDefined();
        expect(sequence.length).toEqual(length);
        expect(generatorFnMock).toHaveBeenCalledTimes(length * 2);
    });
});