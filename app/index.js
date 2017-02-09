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
        contextHoole = new Context(),
        seed = 1,
        length = 5000;

    context.drawSequence(
        generateSequence({ seed, length, generatorFn: randU })
    );

    document.body.appendChild(context.svg);

    contextMS.drawSequence(
        generateSequence({ seed, length, generatorFn: randMSWindows })
    );

    document.body.appendChild(contextMS.svg);

    contextHoole.drawSequence(
        generateSequence({ seed, length, generatorFn: hooleCentralRandomizer })
    );

    document.body.appendChild(contextHoole.svg);
};

initUI();