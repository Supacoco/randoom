import CLib from '../../src/generators/cLib';

describe('C Lib random number generator', () => {
    describe('CLib::generate', () => {
        test('C lib implementation', () => {
            const seed = 1337,
                cLib = new CLib(seed),
                result = cLib.generate();

            expect(result).toEqual(0.03661547490943394);
        });
    })
});