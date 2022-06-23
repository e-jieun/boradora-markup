import colorObj from "./color.js";

const tagChange = (elem, bgColor, textColor) => {
  elem.style.backgroundColor = `${bgColor}`;
  elem.style.color = `${textColor}`;
}

export default tagChange;