export const map = (func, elements) => {

  const iter = (funcIter, el, mapedElements) => {
    if (isEmpty(el)) {
      return reverse(mapedElements);
    }

    return iter(funcIter, tail(el), cons(funcIter(head(el)), mapedElements));
  }

  return iter(func, elements, l());
}

export const mirror = (dom) => map((element) => {
  const newElement = node(name(element), reverseStr(value(element)));

  return newElement;
}, dom);