const appendChild = (parent, tagName, id = '', contents = '') => {
  const elem = document.createElement(tagName);
  elem.id = id;
  elem.innerHTMl = contents;
  parent.appendChild(elem);
}

export default appendChild;