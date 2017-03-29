import { LinearContext } from './draw/linearContext';
import { NormalContext } from './draw/normalContext';
import { Xorshift } from './generators/xorshift';

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
        xorshift.generateNormalSequence(length)
    );

    linearContext.drawSequence(
        xorshiftBis.generateSequence(length)
    );

    const test = linearContext.svg.cloneNode(true);

    document.querySelector('#root').appendChild(normalContext.svg);
    document.querySelector('#root').appendChild(linearContext.svg);
    document.querySelector('#root').appendChild(test);
};

bootstrap();
testXorShift();