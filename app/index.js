import { Context } from './draw/context';
import { Randu } from './generators/randu';
import { Windows } from './generators/windows';
import { Hoole } from './generators/hoole';
import { Xorshift } from './generators/xorshift';

const initUI = () => {
    const seed = 1,
        length = 20000,
        context = new Context('black'),
        contextBis = new Context('black'),
        xorshift = new Xorshift(seed),
        xorshiftBis = new Xorshift(seed);

    context.drawSequence(
        xorshift.generateNormalSequence(length)
    );

    document.body.appendChild(context.svg);

    contextBis.drawSequence(
        xorshiftBis.generateSequence(length)
    );

    document.body.appendChild(contextBis.svg);

};

initUI();