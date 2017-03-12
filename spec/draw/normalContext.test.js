import { NormalContext } from '../../app/draw/normalContext';

describe('NormalContext class test suite', () => {
    test('basic case', () => {
        const context = new NormalContext();

        expect(context).toBeDefined();
        expect(context.svg).toBeDefined();
        expect(context.svg.getAttribute('viewBox')).toEqual('0 0 6 6');
        expect(context.dotSize).toEqual(0.006);
    });

    describe('NormalContext::drawDot', () => {
        test('drawing a dot', () => {
            const context = new NormalContext(),
                x = 12,
                y = 42;

            context.drawDot(x, y);

            expect(context.svg.children.length).toEqual(1);
            expect(context.svg.children[0].getAttribute('cx')).toBe((x + 3).toString());
            expect(context.svg.children[0].getAttribute('cy')).toBe((y + 3).toString());
            expect(context.svg.children[0].getAttribute('fill')).toBe(context.dotColor);
        });
    });
});