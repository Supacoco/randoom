import { AbstractGenerator } from '../../../src/generators/abstractGenerator';

describe('AbstractGenerator test suite', () => {
    test('AbstractGenerator should not be instantiable', () => {
        expect(() => {
            new AbstractGenerator(1337);
        }).toThrow();
    });
});