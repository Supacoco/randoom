class BaseContext {
    
    constructor(viewBox = '0 0 1 1', dotSize = 0.001, dotColor = '#900C3F', width = 500, height = 500) {
        this.svg = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'svg'
        );

        this.dotColor = dotColor;
        this.width = width;
        this.height = height;
        this.viewBox = viewBox;
        this.dotSize = dotSize;

        this.svg.setAttribute('width', this.width);
        this.svg.setAttribute('height', this.height);
        this.svg.setAttribute('viewBox', this.viewBox);
    }

    drawDot(x, y) {
        const dot = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'ellipse'
        );

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
}

export {
    BaseContext
}