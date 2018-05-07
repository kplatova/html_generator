export const extractHeaders = (elements) => {
  const filtered = filter(element => is('h2', element), elements);
  return map(element => node('p', value(element)), filtered);
};

export const wordsCount = (tagName, word, elements) => {
  const filtered = filter(element => is(tagName, element), elements);
  const values = map(element => value(element), filtered);
  return reduce((text, acc) => wc(word, text) + acc, 0, values);
};

//////////

// BEGIN (write your solution here)
export const extractHeaders = html => {
  const h2List = filter(element => is('h2', element), html);
  return map(element => node('p', value(element)), h2List);
}

export const wordsCount = (tag, word, html) => {
  // получаем список только с этими тегами
  const tagsList = filter(element => is(tag, element), html);

  // создаем список элелементов текст
  const textList = map((element) => value(element), tagsList);

  // делаем подсчет в этих элементах
  return reduce((element, acc) => wc(word, element) + acc, 0, textList);
}
// END