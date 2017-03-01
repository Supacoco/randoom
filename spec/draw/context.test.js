import { Context } from '../../app/draw/context';

describe('Context class test suite', () => {
    test('basic case', () => {
        const context = new Context();
        
        expect(context).toBeDefined();
        expect(context.svg).toBeDefined();
        expect(context.svg.getAttribute('viewBox')).toBeDefined();
    });

    describe('Context::drawDot', () => {
        test('drawing a dot', () => {
            const context = new Context(),
                x = 12,
                y = 42;
            
            context.drawDot(x, y);

            expect(context.svg.children.length).toEqual(1);
            expect(context.svg.children[0].getAttribute('cx')).toBe(x.toString());
            expect(context.svg.children[0].getAttribute('cy')).toBe(y.toString());
            expect(context.svg.children[0].getAttribute('fill')).toBe(context.dotColor);
        });
    });

    describe('Context::drawSequence', () => {
        test('drawing a sequence', () => {
            const context = new Context(),
                sequence = [12, 42, 1337, 3.14];
            
            context.drawSequence(sequence);

            expect(context.svg.children.length).toEqual(sequence.length / 2);
        });

        test('drawing an odd numbered sequence should throw an error', () => {
            const context = new Context(),
                sequence = [12, 42, 1337];
            
            expect(() => {
                context.drawSequence(sequence);
            }).toThrowError('Context::drawSequence - Sequence length is not even.');
        });
    });
});