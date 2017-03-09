import { BaseContext } from './baseContext';

class LinearContext extends BaseContext {
    
    setup() {
        super.setup();

        this.viewBox = '0 0 1 1';
        this.dotSize = 0.001;

        this.svg.setAttribute('viewBox', this.viewBox);
    }
};

export { 
    LinearContext
};
