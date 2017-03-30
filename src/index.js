import { LinearContext } from './draw/linearContext';
import { NormalContext } from './draw/normalContext';
import { Xorshift } from './generators/xorshift';
import { Sequence } from './sequence/sequence';

import './styles/main.scss';

const bootstrap = () => {
    const root = document.createElement('div');
    
    root.id = 'root';
    document.body.appendChild(root);
};

const testXorShift = () => {
    const seed = 1,
        length = 20000,
        linearContext = new LinearContext(),
        normalContext = new NormalContext(),
        xorshift = new Xorshift(seed),
        xorshiftBis = new Xorshift(seed);

    normalContext.drawSequence(
        Sequence.generateNormalSequence(length, xorshift)
    );

    linearContext.drawSequence(
        Sequence.generateSequence(length, xorshiftBis)
    );

    document.querySelector('#root').appendChild(normalContext.svg);
    document.querySelector('#root').appendChild(linearContext.svg);
};

bootstrap();
testXorShift();