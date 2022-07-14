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
profileCon.innerHTML = makeElem('div', 3);
setDisplay(profileCon, 'grid');
setSize(profileCon, inherit, hunPer);
profileCon.style.gridTemplateRows = `3fr 1fr 2fr`;

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

// *profileName
const profileName = profileConChild.at(1);
console.log(profileName);
appendChild(profileName, 'p', 'profile-name');
setDisplay(profileName, 'flex');

// *profileName > p
const profileNameTxt = document.getElementById('profile-name');
console.log(profileNameTxt);
profileNameTxt.textContent = '사용자';

// *profileBtnCon
const profileBtnCon = profileConChild.at(-1);
console.log(profileBtnCon);

// *profileBtnCon > div > p*2
let btntxtStr = '<p>오늘의 러닝 타임</p><p>1시간 20분</p>';
appendChild(profileBtnCon, 'div', 'btn-txt');
setDisplay(profileBtnCon, 'flex', center, center, 'column');
profileBtnCon.style.columnGap = ''

// *profileBtnCon.firstElementChild === div
const btnTxtCon = profileBtnCon.firstElementChild;
btnTxtCon.innerHTML = btntxtStr;
btnTxtCon.style.fontSize = `0.8rem`;
btnTxtCon.style.columnGap = `1rem`;
setDisplay(btnTxtCon, 'flex', center, center);
setSize(btnTxtCon, '70%')

// *profileBtnCon.lastElementChild === button
appendChild(profileBtnCon, 'button');
const btn = profileBtnCon.lastElementChild;
btn.classList.toggle('tag-size');
btn.style.width = '10rem';
btn.textContent = '프로필 수정';
tagChange(btn, colorObj.colorDp, colorObj.colorYl);
console.dir(btn);

btn.addEventListener('click', () => {
  pageLoad('9-1_profile edit.html');
});

// *queueCon
const queueCon = profileCon.nextElementSibling;
console.log(queueCon);
// borderBk(queueCon);
queueCon.innerHTML = makeElem('div', 2);
setDisplay(queueCon, 'grid');
queueCon.style.gridTemplateRows = `1fr 3fr`;
setSize(queueCon, inherit, hunPer);

// *queueCon.children
const queueChild = Array.from(queueCon.children);
queueChild.map(elem => {
  setSize(elem, inherit, hunPer);
  // borderBk(elem);
})

// *queueCon.firstElementChild
const queueTxt = queueCon.firstElementChild;
console.log(queueTxt);
queueTxt.innerHTML = `<span>도라마</span> 님의 시청 중인 재생목록`;
queueTxt.style.textAlign = center;
queueTxt.style.paddingTop = '50px';
queueTxt.style.fontSize = '0.8rem';

const boldTxt = document.querySelector('span');
console.log(boldTxt);
boldTxt.style.fontWeight = '600';

// *queueCon.lastElementChild;
const queueVcrCon = queueCon.lastElementChild;
console.log(queueVcrCon);
let queueVcrStr = '';
for (let i = 0; i < 3; i++) {
  let str = `<div><button>다시 재생</button></div>`;
  queueVcrStr += str;
}
console.log(queueVcrStr);
queueVcrCon.innerHTML = queueVcrStr;
setSize(queueVcrCon, inherit, hunPer);
setDisplay(queueVcrCon, 'grid');
queueVcrCon.style.gridTemplateRows = `1fr 1fr 1fr`;
setPosition(queueVcrCon, 'relative', `-${hun/2}px`);

// *queueVcrCon.children
const queueVcrImg = Array.from(queueVcrCon.children);
queueVcrImg.map(elem => {
  setSize(elem, '180px', '110px');
  setBgColor(elem, colorObj.colorGr);
  setDisplay(elem, 'flex', 'flex-end', center);
  elem.style.borderRadius = '25px';
  // *다시 재생 버튼
  elem.firstElementChild.classList.toggle('tag-size');
  // elem.firstElementChild.style.margin = 0;
  setSize(elem.firstElementChild, '6rem', '2rem');
  tagChange(elem.firstElementChild, 'rgba(200, 181, 200, 0.5)', colorObj.colorFf);
})

// todo: root 마지막 자식요소는 하단의 fixed 메뉴로 사용할 것
appendChild(root, 'div', 'menu-con');
console.clear();
const menuCon = document.getElementById('menu-con');
menuCon.innerHTML = makeElem('button', 3);
console.log(menuCon);
// menuCon style
menuCon.setAttribute('style', `width: 100vw; position: fixed; bottom: 3vh; display: flex; align-items: center; justify-content: center; column-gap: 1vh;`);
// select menuCon.children
const menuChild = menuCon.children;
console.log(menuChild);
// menuChild style
const imgArr = ['./SVG/bookmark.svg', './SVG/home.svg', './SVG/profile.svg'];
for (let i = 0; i < menuChild.length; i++) {
  menuChild[i].setAttribute('style', `width: 80px; height: 80px; background: none; border: 0px; justify-content: center;`);
  console.log(menuChild[i].children);
  menuChild[i].innerHTML = makeElem('img', 1);
  menuChild[i].firstElementChild.src = imgArr[i];
  menuChild[i].firstElementChild.setAttribute('style', 'width: 40px; height: 40px; stroke-width: 3px;');
  // => stroke-width로 svg 이미지의 두꼐가 조절이 가능하다
}
// select menuChild[1]
const bookmarkBtn = menuChild[0];
const homeBtn = menuChild[1];
const profileBtn = menuChild[2];
console.log(homeBtn);
homeBtn.style.background = colorObj.colorDp;
homeBtn.style.borderRadius = '50%';

const menuChildArr = Array.from(menuChild);
menuChildArr.map((elem, index) => {
  elem.addEventListener('click', () => {
    index === 0 ? pageLoad('6-0_bookmark.html') :
    index === 1 ? pageLoad('4-0_main.html') :
    index === 2 ? pageLoad('9-0_profile.html') : '';
  })
})