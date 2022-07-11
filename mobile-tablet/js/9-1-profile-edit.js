import {
  setSize,
  setDisplay,
  setPosition,
  setBgColor
} from "./module/css-function.js";
import {
  hun,
  center,
  inherit,
  hunPer
} from "./module/variable.js";
import makeElem from "./module/makeelem.js";
import borderBk from "./module/css-function.js";
import appendChild from "./module/appendchild.js";
import colorObj from "./module/color.js";
import tagChange from "./module/tagcolor.js";
import pageLoad from "./module/pageload.js";

const root = document.getElementById('root');
console.log(root);
setSize(root, `${hun}vw`, `${hun}vh`);
setDisplay(root, 'grid');
root.style.gridTemplateRows = `2fr 3fr`;
root.style.overflow = 'hidden';
setBgColor(root, colorObj.colorBp);
root.style.color = colorObj.colorDp;

// *root>section*3
root.innerHTML = makeElem('section', 3);

// *profileCon
const profileCon = root.firstElementChild;
console.log(profileCon);
// borderBk(profileCon);
profileCon.innerHTML = makeElem('div', 2);
setDisplay(profileCon, 'grid');
setSize(profileCon, inherit, hunPer);
profileCon.style.gridTemplateRows = `2fr 1fr`;

// *profileCon.children
const profileConChild = Array.from(profileCon.children);
console.log(profileConChild);
profileConChild.map(elem => {
  setSize(elem, inherit, hunPer);
  // borderBk(elem);
});

// *profilePic
const profilePic = profileConChild.at(0);
console.log(profilePic);
setDisplay(profilePic, 'flex', 'flex-end', center);

// *profilePic > img
appendChild(profilePic, 'img', 'profile-pic');
const pic = profilePic.firstElementChild;
setSize(pic, '100px', '100px');
pic.classList.toggle('circle');
setBgColor(pic, colorObj.colorGr);

// *profileBtnCon
const profileBtnCon = profileConChild.at(-1);
console.log(profileBtnCon);

// *profileBtnCon > div > p*2
setDisplay(profileBtnCon, 'flex', center, center, 'column');


// *profileBtnCon.lastElementChild === button
appendChild(profileBtnCon, 'button');
const btn = profileBtnCon.lastElementChild;
btn.classList.toggle('tag-size');
btn.style.width = '10rem';
btn.textContent = '프로필 수정 완료';
tagChange(btn, colorObj.colorDp, colorObj.colorYl);
console.dir(btn);

btn.addEventListener('click', () => {
  pageLoad('9-0_profile.html');
});

// *queueCon
const queueCon = profileCon.nextElementSibling;
console.log(queueCon);
// borderBk(queueCon);
queueCon.innerHTML = makeElem('div', 1);
// setDisplay(queueCon, 'grid');
setSize(queueCon, inherit, hunPer);

// *queueCon.children
const queueChild = queueCon.firstElementChild;
setSize(queueChild, inherit, hunPer);

// *queueCon.lastElementChild;
let queueVcrStr = '';
for (let i = 0; i < 2; i++) {
  let str = `<p></p><input>`;
  queueVcrStr += str;
}
console.log(queueVcrStr);
queueChild.innerHTML = queueVcrStr;
setSize(queueChild, inherit, hunPer);
// queueChild.style.gridTemplateRows = `1fr 1fr`;
setDisplay(queueChild, 'flex', center, center, 'column');
setPosition(queueChild, 'relative', `-${hun/2}px`);

// *queueVcrCon.children

let pTxtArr = ['가입하신 이메일을 입력해주세요', '새로운 비밀번호를 입력해주세요'];
const pTxt = Array.from(queueChild.getElementsByTagName('p'));
console.log(pTxt);
pTxt.map((elem, index) => {
  elem.textContent = pTxtArr[index];
  elem.style.fontSize = '0.8rem';
  elem.style.margin = 0;
});
const inputTxt = Array.from(queueChild.getElementsByTagName('input'));
inputTxt.map(elem => {
  elem.classList.add('tag-size');
  setSize(elem, '60vw', '2rem');
  setBgColor(elem, colorObj.colorYl);
  elem.style.marginBottom = '3rem';

});

// todo: root 마지막 자식요소는 하단의 fixed 메뉴로 사용할 것