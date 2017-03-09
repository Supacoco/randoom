import { BaseContext } from './baseContext';

class NormalContext extends BaseContext {

    setup() {
        super.setup();
        
        this.viewBox = '0 0 6 6';
        this.dotSize = 0.006;

        this.svg.setAttribute('viewBox', this.viewBox);
    }

    drawDot(x, y) {
        super.drawDot(
            x + 3,
            y + 3
        );
    }
}

export {
    NormalContext
}