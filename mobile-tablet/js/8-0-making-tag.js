import colorObj from "./module/color.js";
import {
  setSize,
  setDisplay,
  setPosition,
  setBgColor
} from "./module/css-function.js";
// *
document.body.setAttribute('style', `margin: 0; padding: 0;`)
// get #root
const root = document.getElementById('root');
// console.log(root);

// *root style
root.setAttribute('style', `display: grid; grid-template-rows: 1fr 9fr; color: ${colorObj.colorGp};`);
setSize(root, `${window.innerWidth}px`, `${window.innerHeight}px`);
setBgColor(root, `${colorObj.colorBp}`);
// *select root.children
const closeCon = root.firstElementChild;
const tagCon = root.lastElementChild;
// console.log(closeCon);
// console.log(tagCon);
// closeCon style
setDisplay(closeCon, 'flex', 'center', 'flex-end');
// select closeCon.children
const closeItem = closeCon.firstElementChild;
// console.log(closeItem);
// closeItem style
closeItem.classList.toggle('flex-center-center');
closeItem.setAttribute('style', `width: 10vw; height: 10vw; flex-direction: column;`);
// closeItem.children style
const closeItemChild = Array.from(closeItem.children);
closeItemChild.forEach((elem, index) => {
  elem.setAttribute('style', `list-style-type: none;`);
  setSize(elem, `50px`, `2px`);
  setBgColor(elem, colorObj.colorDp);
  // console.dir(closeItem.children[i].style);
  index === 0 ? elem.style.transform = `rotate(45deg)` : elem.style.transform = `rotate(-45deg)`;
})
// *tagCon style
tagCon.classList.toggle('flex-center-center');
tagCon.setAttribute('style',`flex-direction: column; row-gap: 2vh;`)
setPosition(tagCon, 'relative', '', '15vh');
// *tagCon.children
// console.log(tagCon.children);
const tagItem = Array.from(tagCon.children);
tagItem.forEach((elem, index) => {
  elem.setAttribute('style', `width: 40vw; height: 20vh; background: ${colorObj.colorYl}; text-align: center; border-radius: 50px;`);
  if(index === 1){
    elem.style.marginBottom = '20px';
    elem.style.border = `none`;
  } else if(index === 2){
    elem.style.width = `15vw`;
    elem.style.height = `2.5vw`;
    elem.style.background = colorObj.colorDp;
    elem.style.color = colorObj.colorYl;
    elem.style.padding = '10px';
    elem.textContent = '태그를 입력했어요';
    elem.style.fontSize = '0.8rem';
  } else{
    elem.style.background = 'none';
    elem.style.height = '1.5rem';
  }
});
// https://github.com/kongukjae/web-C-lecture/commit/7b9f674e246b2b348c1cc87d14512d203f7711b0
console.clear();