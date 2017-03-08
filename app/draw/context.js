class Context {
    constructor(dotColor = '#900C3F', gaussianMode = false) {
        this.svg = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'svg'
        );

        this.gaussianMode = gaussianMode;
        this.dotColor = dotColor;
        this.setup();
    }

    setup() {
        this.width = 500;
        this.height = 500;
        this.viewBox = '0 0 1 1';
        this.dotSize = 0.001;

        if (this.gaussianMode) {
            this.viewBox = '0 0 6 6';
            this.dotSize = 0.006;
        }

        this.svg.setAttribute('width', this.width);
        this.svg.setAttribute('height', this.height);
        this.svg.setAttribute('viewBox', this.viewBox);
    }

    drawDot(x, y) {
        const dot = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'ellipse'
        );

        if (this.gaussianMode) {
            x += 3;
            y += 3;
        }

        dot.setAttribute('cx', x);
        dot.setAttribute('cy', y);
        dot.setAttribute('rx', this.dotSize);
        dot.setAttribute('ry', this.dotSize);
        dot.setAttribute('fill', this.dotColor);

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
