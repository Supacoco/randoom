import { LinearContext } from './draw/linearContext';
import { NormalContext } from './draw/normalContext';
import { Randu } from './generators/randu';
import { Windows } from './generators/windows';
import { Hoole } from './generators/hoole';
import { Xorshift } from './generators/xorshift';

const initUI = () => {
    const seed = 1,
        length = 20000,
        linearContext = new LinearContext('black', true),
        normalContext = new NormalContext('black'),
        xorshift = new Xorshift(seed),
        xorshiftBis = new Xorshift(seed);

    normalContext.drawSequence(
        xorshift.generateNormalSequence(length)
    );

    linearContext.drawSequence(
        xorshiftBis.generateSequence(length)
    );

    document.body.appendChild(normalContext.svg);
    document.body.appendChild(linearContext.svg);
};

initUI();