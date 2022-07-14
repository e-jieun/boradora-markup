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
  hun,
  center,
  none
} from "./module/variable.js";
import borderBk from "./module/borderbk.js";
import tagChange from "./module/tagcolor.js";
import moveToPage from "./module/locationhref.js";

const root = document.getElementById('root');
// console.log(root);

// *root에 자식요소 3개
root.innerHTML = makeElem('section', 3);
// console.log(root.children);
setDisplay(root, 'grid');
setSize(root, `${hun}vw`, `${hun}vh`);
root.style.gridTemplateRows = `1fr 3fr 2.5fr`;
root.style.overflow = 'hidden';
setBgColor(root, colorObj.colorBp);
root.style.color = colorObj.colorDp;

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
setSize(before, '42px', '42px');
setDisplay(before, 'flex');
// console.log(before);

// *before > img
appendChild(before, 'img', 'before-btn');

const beforeBtn = before.firstElementChild;
// console.dir(beforeBtn);
let beforeBtnSrc = './SVG/yellow-chevron.svg';
beforeBtn.src = beforeBtnSrc;
setSize(beforeBtn, '80px', '76px');
setPosition(beforeBtn, 'absolute', '1vw', '', '1vw');

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
  // borderBk(elem);
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
setSize(inputCon, 'inherit', '');
setDisplay(inputCon, 'flex', 'center', 'center');

const inputUl = inputCon.querySelector('ul');
console.log(inputUl);
inputUl.innerHTML = makeElem('li', 9);
inputUl.classList.add('padding-left');
let liTxtArr = ['내 닉네임은', '이메일은', '비밀번호는', '에요'];

// ?결국 문자열을 추가하는 방식으로 만들었는데 왜 splice로 고쳐진 배열을 반환받았을 때는 되지 않았던 걸까?
// todo: inputUl에 innerHTML로 재할당할 문자열을 만들자
// psuedo 1. 빈 문자열을 만들어 준다
// psuedo 2. 문자열에 li 태그일 때와
// pseudo 3. 문자열이 input일 때와 다르게 추가해줘야 한다 => input은 닫는 태그가 없음
let inputLiStr = '';
for(let i = 0; i < 9; i++){
  if(i%3 === 1){
    console.log(i);
    inputLiStr += `<input>`;
  } else{
    inputLiStr += makeElem('li', 1);
  }
}
console.log(inputLiStr);

inputUl.innerHTML = inputLiStr;
setDisplay(inputUl, 'grid');
inputUl.style.gridTemplateColumns = '1.5fr 2fr 1fr';
inputUl.style.rowGap = '3vh';

// *input의 input부분
const input = Array.from(inputUl.getElementsByTagName('input'));
console.log(input);
input.forEach((elem, index) => {
  elem.classList.add('tag-size');
  elem.style.border = none;
  setSize(elem, 'inherit', '1.5rem');
  tagChange(elem, colorObj.colorYl);
});

// *input의 텍스트 부분
const inputLi = Array.from(inputUl.getElementsByTagName('li'));
console.log(inputLi);

inputLi.map((elem, index) => {
  elem.style.fontSize = '0.8rem';
  elem.classList.add('list-style-none');
  if(index%2 === 0){
    elem.style.textAlign = 'end';
    index/2 === 0 ? elem.textContent = liTxtArr[index/2] : '';
    index/2 === 1 ? elem.textContent = liTxtArr[index/2] : '';
    index/2 === 2 ? elem.textContent = liTxtArr[index/2] : '';
  } else{
    elem.textContent = liTxtArr.at(-1);
  }
  console.log(elem);
  // index%3 === 0 ? elem.textContent = liTxtArr[index] : elem.textContent = liTxtArr.at(-1);
});

// *doneBtn
const doneBtnCon = main.lastElementChild;
doneBtnCon.innerHTML = makeElem('button', 1, '입력 완료');
console.log(doneBtnCon);
setDisplay(doneBtnCon, 'flex');

// *버튼 자체
const doneBtnItem = doneBtnCon.firstElementChild;
doneBtnItem.classList.add('tag-size');
doneBtnItem.style.border = none;
tagChange(doneBtnItem, colorObj.colorDp, colorObj.colorYl);

// todo: 버튼을 클릭하면 tagselect 페이지로 넘어간다
doneBtnItem.addEventListener('click', function(){
  console.log(this);
  let tagselectLink = '3-0_tag select.html'
  moveToPage(tagselectLink);
});

// *#welcome
const welcome = document.getElementById('welcome');
console.log(welcome);
welcome.innerHTML = makeElem('p', 1, '이제 저희 서비스를 소개해드릴게요');
setDisplay(welcome, 'flex');
welcome.style.fontSize = '0.8rem';
console.clear();