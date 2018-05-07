const hasZero = (list) => {
  if (isEmpty(list)) {
    return false;
  }

  const current = head(list);
  const rest = tail(list);

  if (!isList(current)) {
     if (current === 0) {
       return true;
     }
  } else if (hasZero(current)) {
    return true;
  };
  return hasZero(rest);
};

const searchZeros = (tree) => {
  const iter = (list, acc) => {
    if (isEmpty(list)) {
      return acc;
    }

    const current = head(list);
    const rest = tail(list);

    if (!isList(current)) {
       const newAcc = current === 0 ? acc + 1 : acc;
       return iter(rest, newAcc);
    } else {
      return iter(rest, iter(current, acc));
    };
  };

  return iter(tree, 0);
};

const select = (tagName, html) =>

reduce((element, acc) => {
  const acc2 = hasChildren(element) ? concat(select(tagName, children(element)), acc) : acc;

  return is(tagName, element) ? consList(element, acc2) : acc2;
}, l(), html);

// BEGIN (write your solution here)
const select = (tagName, htmlList) => {
  return reduce((element, acc) => {
    if (hasChildren(element)) {
      return select(tagName, children(element));
    }

    return (is(tagName, element)) ? consList(element, acc) : acc;
  }, l(), htmlList);
}
// END


