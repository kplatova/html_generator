// BEGIN РЕШЕНИЕ УЧИТЕЛЯ
export const filter = (func, elements) => {
  const iter = (items, acc) => {
    if (isEmpty(items)) {
      return reverse(acc);
    }
    const item = head(items);
    const newAcc = func(item) ? cons(item, acc) : acc;
    return iter(tail(items), newAcc);
  };

  return iter(elements, l());
};

export const quotes = (elements) => {
  const filtered = filter(element => is('blockquote', element), elements);
  const result = map(value, filtered);
  return result;
};
// END

// BEGIN МОЕ РЕШЕНИЕ
export const filter = (func, elements) => {

  const iter = (funcIter, el, filteredElements) => {
    if (isEmpty(el)) {
      return reverse(filteredElements);
    }

    const currentElement = head(el);
    const tElements = tail(el);

    if (funcIter(currentElement)) {
      return iter(funcIter, tElements, cons(currentElement, filteredElements));
    } else {
      return iter(funcIter, tElements, filteredElements);
    }
  }

  return iter(func, elements, l());
}

export const quotes = (dom) => {
  const quotesList = filter((element) => is('blockquote', element), dom);

  return map(value, quotesList);
};

// END
