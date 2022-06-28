import {
  setDisplay,
  setBgColor,
  setPosition,
  setSize
} from "./module/css-function.js";
import colorObj from "./module/color.js";
import makeElem from "./module/makeelem.js";
import appendChild from "./module/appendchild.js";
import {
  hun
} from "./module/variable.js";
import borderBk from "./module/borderbk.js";

const root = document.getElementById('root');
// console.log(root);

// *root에 자식요소 3개
root.innerHTML = makeElem('section', 3);
// console.log(root.children);
setDisplay(root, 'grid');
setSize(root, `${hun}vw`, `${hun}vh`);
root.style.gridTemplateRows = `1fr 5fr 1fr`;

let sectionIdArr = ['before', 'main', 'welcome'];
const section = Array.from(root.children);
// console.log(section);
section.forEach((elem, index) => {
  index === 0 ? elem.id = sectionIdArr[index] : '';
  index === 1 ? elem.id = sectionIdArr[index] : '';
  index === 2 ? elem.id = sectionIdArr[index] : '';
  setSize(elem, 'inherit');
})

// *#before
const before = document.getElementById('before');
// console.log(before);

// *before > img
appendChild(before, 'img', 'before-btn');

const beforeBtn = before.firstElementChild;
// console.dir(beforeBtn);
let beforeBtnSrc = './SVG/yellow-chevron.svg';
beforeBtn.src = beforeBtnSrc;
setSize(beforeBtn, '42px', '42px');

// *#main
const main = document.getElementById('main');
// console.log(main);

// *main > div*3
main.innerHTML = makeElem('div', 3);
setDisplay(main, 'grid');
setSize(main, '', '100%');
main.style.gridTemplateRows = `3fr 3fr 1fr`;

// *main.children
const mainChild = Array.from(main.children);
console.log(mainChild);
mainChild.map(elem => {
  setSize(elem, `${hun}vw`, '100%');
  borderBk(elem);
});

// *introText
const introText = main.firstElementChild;
introText.innerHTML = makeElem('div', 1);
setDisplay(introText, 'flex', 'center', 'center', 'column');

// *introTextCon
const introTextCon = introText.firstElementChild;
introTextCon.innerHTML = makeElem('p', 2);

// *introTextItem
let introTextArr = [`안녕하세요<br>
회원님!`, `회원님을 저희에게<br>
소개해주실래요?`];
let introTextOne = `안녕하세요
회원님!`;
const introTextItem = Array.from(introTextCon.children);
console.log(introTextItem);
introTextItem.map((elem, index) => {
  elem.innerHTML = introTextArr[index];
});

// *inputCon
const inputCon = introText.nextElementSibling;
inputCon.innerHTML = makeElem('ul', 1);
setDisplay(inputCon, 'flex');

const inputUl = inputCon.querySelector('ul');
console.log(inputUl);
inputUl.innerHTML = makeElem('li', 9);
inputUl.classList.add('padding-left');
let liTxtArr = ['내 닉네임은', '이메일은', '비밀번호는', '야.'];

const makeInput = document.createElement('input');


const inputLi = Array.from(inputUl.children);
let liStr = '';
// let remakeInputLiArr = '';
inputLi.map((elem, index)=>{
  // elem.classList.add('list-style-none');
  // todo: 1, 4, 7 인덱스만 input으로 변경
  if(index%3 === 1){
    // console.log(index);
    inputLi.splice(index, 0, makeInput);
    liStr = inputLi.join('');
  }
});
console.log(liStr);
inputUl.innerText = liStr;

// todo: inputUl에 innerHTML로 재할당할 문자열을 만들자
// psuedo 1. 빈 문자열을 만들어 준다
let inputLiStr = '';
// psuedo 2. 문자열에 li 태그일 때와
// pseudo 3. 문자열이 input일 때와 다르게 추가해줘야 한다 => input은 닫는 태그가 없음
inputLi.forEach((elem, index) => {
  elem === 'li' ? inputLiStr += makeElem('li', 1) : inputLiStr += `<input>`;
});
console.log(inputLiStr);


// *doneBtn
const doneBtn = main.lastElementChild;

console.log(introText);
console.log(inputCon);
console.log(doneBtn);

// *#welcome
const welcome = document.getElementById('welcome');
console.log(welcome);