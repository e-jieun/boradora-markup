const makeElem = (elem, count, contents = '') => {
  let isString = ``;
  for (let i = 0; i < count; i++) {
    isString += `<${elem}>${contents}</${elem}>`;
  }
  return isString;
}

export default makeElem;
