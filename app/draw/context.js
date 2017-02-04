class Context {
    constructor() {
        this.svg = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'svg'
        );

        this.svg.setAttribute('width', 500);
        this.svg.setAttribute('height', 500);
        this.svg.setAttribute('viewBox', '0 0 1 1');
    }

    drawPoint(x, y, color) {
        const dot = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'ellipse'
        );

        dot.setAttributeNS(null, 'cx', x);
        dot.setAttributeNS(null, 'cy', y);
        dot.setAttributeNS(null, 'rx', 0.001);
        dot.setAttributeNS(null, 'ry', 0.001);
        dot.setAttributeNS(null, 'fill', color);

        this.svg.appendChild(dot);
    }
};

export { Context };
