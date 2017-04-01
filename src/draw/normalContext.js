import { BaseContext } from './baseContext';

const NormalContext = () => {
    const baseContext = new BaseContext('0 0 6 6', 0.006);

    return new Proxy(baseContext, {
        get: (target, prop, receiver) => {
            if (prop === 'drawDot') {
                return function(x, y) {
                    return target[prop].apply(target, [x + 3, y + 3]);
                }
            }
            return Reflect.get(target, prop, receiver);
        }
    });
}

export {
    NormalContext
}