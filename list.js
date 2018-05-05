// eslint-disable-next-line
import { l, cons, head, tail, isEmpty, toString as listToString } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
const has = (curList, number) => {
  if (isEmpty(curList)) { // guard expression
    return false;
  }

  if (head(curList) === number) {
    return true;
  }

  return has(tail(curList), number);
};

// мой вариант
const reverse = (curList) => {
  const iter = (list, rev) => {
    if (isEmpty(list)) {
      return rev;
    }

    return iter(tail(list), cons(head(list), rev));
  };

  return iter(curList, l());
};

// вариант учителя

export const reverse = (list) => {
  const iter = (items, acc) =>
    (isEmpty(items) ? acc : iter(tail(items), cons(head(items), acc)));

  return iter(list, l());
};

const copy = (list) => l(head(list), copy(tail(list)));

const concat = (l1, l2) => {
  if (isEmpty(l1)) {
    return l2;
  }

  return cons(head(l1), concat(tail(l1), l2));
};

export {has, reverse, concat};
// END