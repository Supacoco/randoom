import Hoole from '../../src/generators/hoole';

describe('Hoole central randomizer test suite', () => {
    describe('Hoole::generate', () => {
        test('Hoole implementation', () => {
            const seed = 1337,
                hoole = new Hoole(seed),
                result = hoole.generate();
            
            expect(result).toEqual(0.5182355967078189);
        });
    });
});