// export const reduce = (func, acc, elements) => {
//   if (isEmpty(elements)) {
//     return acc;
//   }

//   return reduce(func, func(head(elements), acc), tail(elements));
// };

export const reduce = (func, acc, elements) => {
  const iter = (items, acc2) => {
    if (isEmpty(items)) {
      return acc2;
    }

    const nodHtml = head(items);
    const newAcc = func(nodHtml, acc2);

    return iter(tail(items), newAcc);
  }

  return iter(elements, acc);
}

export const emptyTagsCount = (tagName, elements) => {
  const predicate = element => is(tagName, element) && value(element) === '';
  const func = (element, acc) => (predicate(element) ? acc + 1 : acc);
  return reduce(func, 0, elements);
};