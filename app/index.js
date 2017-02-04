import { generateSequence } from './random/sequence';
import { Context } from './draw/context';

const initUI = () => {
    const context = new Context();

    for (const point of generateSequence(1, 10000)) {
        context.drawPoint(
            point.x,
            point.y,
            'red'
        );
    }

    document.body.appendChild(context.svg);   
};

initUI();