import { 
    randU,
    randMSWindows,
    hooleCentralRandomizer
} from './random/randoom';
import { generateSequence } from './random/sequence';
import { Context } from './draw/context';

const initUI = () => {
    const context = new Context(),
        contextMS = new Context(),
        contextHoole = new Context();

    for (const point of generateSequence({ seed: 1, length: 5000, generatorFn: randU })) {
        context.drawPoint(
            point.x,
            point.y,
            'red'
        );
    }

    document.body.appendChild(context.svg);

    for (const point of generateSequence({ seed: 1, length: 5000, generatorFn: randMSWindows })) {
        contextMS.drawPoint(
            point.x,
            point.y,
            'teal'
        );
    }

    document.body.appendChild(contextMS.svg);

    for (const point of generateSequence({ seed: 1, length: 5000, generatorFn: hooleCentralRandomizer })) {
        contextHoole.drawPoint(
            point.x,
            point.y,
            'gunmetal'
        );
    }

    document.body.appendChild(contextHoole.svg);
};

initUI();