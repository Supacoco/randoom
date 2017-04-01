import { BaseContext } from './draw/baseContext';
import { NormalContext } from './draw/normalContext';
import { Xorshift } from './generators/xorshift';
import { Sequence } from './sequence/sequence';

import './styles/main.scss';

const bootstrap = () => {
    const root = document.createElement('div');

    root.id = 'root';
    document.body.appendChild(root);
};

const testXorShiftLinear = () => {
    const seed = 1,
        length = 20000,
        context = new BaseContext(),
        xorshift = new Xorshift(seed);

    context.drawSequence(
        Sequence.generateSequence(length, xorshift)
    );

    document.querySelector('#root').appendChild(context.svg);
};

const testXorShiftNormal = () => {
    const seed = 1,
        length = 20000,
        context = new NormalContext(),
        xorshift = new Xorshift(seed);

    context.drawSequence(
        Sequence.generateNormalSequence(length, xorshift)
    );

    document.querySelector('#root').appendChild(context.svg);
};

try {
    bootstrap();
    testXorShiftNormal();
    testXorShiftLinear();
} catch (err) {
    console.log('oopsy', err);
}