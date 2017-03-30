import { Sequence } from '../../../src/sequence/sequence';

describe('Sequence test suite', () => {
    describe('Sequence::generateSequence', () => {
        test('generate sequence should return an array of generated values', () => {
            const seed = 1337,
                sequenceLength = 12,
                rng = {
                    generate: jest.fn(() => Math.random())
                };

            const sequence = Sequence
                .generateSequence(sequenceLength, rng);

            expect(sequence).toBeDefined();
            expect(sequence.length).toEqual(sequenceLength);
            expect(rng.generate.mock.calls.length)
                .toEqual(sequenceLength);
        });
    });

    describe('Sequence::generateNormalSequence', () => {
        test('generate normal sequence should return an array of generated values', () => {
            const seed = 1337,
                sequenceLength = 12,
                rng = {
                    generate: jest.fn(() => Math.random())
                };

            const sequence = Sequence
                .generateNormalSequence(sequenceLength, rng);

            expect(sequence).toBeDefined();
            expect(sequence.length).toEqual(sequenceLength);
        });
    });
});

