class Context {
    constructor(dotColor = '#900C3F') {
        this.svg = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'svg'
        );

        this.svg.setAttribute('width', 500);
        this.svg.setAttribute('height', 500);
        this.svg.setAttribute('viewBox', '0 0 1 1');

        this.dotColor = dotColor;
    }

    drawDot(x, y) {
        const dot = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'ellipse'
        );

        dot.setAttributeNS(null, 'cx', x);
        dot.setAttributeNS(null, 'cy', y);
        dot.setAttributeNS(null, 'rx', 0.001);
        dot.setAttributeNS(null, 'ry', 0.001);
        dot.setAttributeNS(null, 'fill', this.dotColor);

        this.svg.appendChild(dot);
    }

    drawSequence(dots) {
        if (dots.length % 2) {
            throw new Error('Context::drawSequence - Sequence length is not even.');
        }

        for(let index = 0; index < dots.length; index++) {
            this.drawDot(
                dots[index],
                dots[++index]
            );
        } 
    }
};

export { Context };
