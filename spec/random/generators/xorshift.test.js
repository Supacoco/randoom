import { Xorshift } from '../../../app/generators/xorshift';

describe('Xorshift test suite', () => {
    describe('Xorshift::generate', () => {
        test('xorshift implementation', () => {
            const seed = 1337,
                xorshift = new Xorshift(seed),
                result = xorshift.generate();
            
            expect(result).toEqual(0.6985572916455567);
        });
    });
});