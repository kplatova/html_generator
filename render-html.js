// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';
// eslint-disable-next-line
import { l, isEmpty, head, tail, cons as consList, toString as listToString } from 'hexlet-pairs-data';

export const make = () => l();
// BEGIN (write your solution here)

const node = (name, value) => cons(name, value); // return TAG par

const name = (tag) => car(tag); // return TAG_NAME str

const value = (tag) => cdr(tag); // return TAG_VALUE str

const append = (where, what) => consList(what, where);

// рекурсивно
const toString = (dom) => { // :list
    if (isEmpty(dom)) {
        return '';
    }
    const element = head(dom);
    const tag = name(element)

    return `${toString(tail(dom))}<${tag}>${value(element)}</${tag}>`
}

export { node, name, value, append, toString };
// END
