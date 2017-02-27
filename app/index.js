import { Context } from './draw/context';
import { Randu } from './generators/randu';
import { Windows } from './generators/windows';
import { Hoole } from './generators/hoole';
import { Xorshift } from './generators/xorshift';

const initUI = () => {
    const seed = 1,
        length = 10,
        context = new Context('black'),
        xorshift = new Xorshift(seed);

    context.drawSequence(
        xorshift.generateSequence(length)
    );

    document.body.appendChild(context.svg);
};

initUI();