import { Context } from '../../app/draw/context';

describe('Context class test suite', () => {
    test('basic case', () => {
        const context = new Context();
        
        expect(context).toBeDefined();
        expect(context.svg).toBeDefined();
        expect(context.svg.getAttribute('viewBox')).toBeDefined();
    });

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

    test('drawing a sequence', () => {
        const context = new Context(),
            dots = [
                { x: 12, y: 42 },
                { x: 42, y: 12 }
            ];
        
        context.drawSequence(dots);

        expect(context.svg.children.length).toEqual(dots.length);
    });
});