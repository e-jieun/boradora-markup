import colorObj from "./module/color.js";
import { setSize, setDisplay } from "./module/css-function.js";

// *
document.body.setAttribute('style', `margin: 0; padding: 0;`);

// variable declaration
let hun = 100;
// select root
const root = document.getElementById('root');
console.log(root);
// root style
root.setAttribute('style', `width: 100vw; display: flex; justify-content: flex-start; flex-direction: column;`);
// select #keyword-con
const keywordCon = document.getElementById('keyword-con');
console.log(keywordCon);
// keywordCon style
keywordCon.setAttribute('style', `width: inherit; height: 10vmax; display: grid; grid-template-columns: 1fr 9fr; align-items: center;`);
// keywordCon.style.border = '1px solid black';
// select keywordCon.children
// console.log(keywordCon.children);
const beforeBtn = keywordCon.firstElementChild;
const bookText = keywordCon.lastElementChild;
console.log(beforeBtn);
console.log(bookText);

// keywordCon.children style
bookText.style.textAlign = 'center';
bookText.style.color = `${colorObj.colorDp}`;
bookText.style.position = `relative`;
bookText.style.right = `2vh`;
// select #item-con
const itemCon = document.getElementById('item-con');
// itemCon style
itemCon.setAttribute('style', `width: inherit; display: flex; flex-direction: column;`);
// html에 작성한 자식요소 아래에 덧붙여 줄 자식요소 생성
// itemCon.appendChild();
// 1. window wheel event
// 2. if(window.srollY > window.innerHeight){}
// 3. appendChild()
let wheelValue = 0;

// *wheel event로 자식요소 생성해서 붙여주는 부분
window.addEventListener('wheel', addItemFunction);
// wheel event가 시작되면 실행될 callback function
function addItemFunction() {
  wheelValue++;
  console.log('this is additem function');
  let addItem = document.createElement('div');
  // *classList로 각각 요소에 스타일링한 부분
  addItem.classList.add('itemstyle');
  // ?itemCon.children[i]에 텍스트를 넣어줄 부분
  // !innerHTML로 엘리먼트 노드와 텍스트 노드를 문자열로 넣어줘서 해결했다
  addItem.innerHTML += '<p>lorem ipsum</p><div><img></div>';
  addItem.setAttribute('style', `display: flex; justify-content: center; align-items: center;`);

  // !계속 덧붙여주는 개념으로 작성해서
  addItem.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("https://picsum.photos/1000/1000?random=1")`;
  // 제목 텍스트
  const searchTitle = addItem.firstElementChild;
  searchTitle.style.color = '#fff';
  // 재생버튼 동그라미
  // todo: 아이콘 위치 조정
  const playBtnCon = addItem.lastElementChild;
  playBtnCon.setAttribute('style', `width: ${hun/20}vmax; height: ${hun/20}vmax; position: absolute; right: ${hun/10}vw; background-color: ${colorObj.colorDp}; border-radius: ${hun/2}%; display: flex; align-items: center; justify-content: center;`);
  // 재생버튼 세모
  // todo: 세모 지우고 아이콘으로 이미지 태그로 연결하기
  // todo: div => img 태그로 대체해줄 것
  const chevronItem = addItem.lastElementChild.firstElementChild;
  chevronItem.src = './SVG/chevron.svg';
  chevronItem.style.transform = 'rotate(180deg)';
  // todo: 배경 바꿔줘야 한다
  chevronItem.setAttribute('style',`transform: rotate(180deg);`)
  console.log(chevronItem);
  itemCon.appendChild(addItem);
  // 휠 값이 hun/2이 넘으면 휠 이벤트에 실행되는 callback function를 지워줄 부분
  if (wheelValue >= hun / 2) {
    window.removeEventListener('wheel', addItemFunction);
  }
}


// html에 작성한 자식요소
// *itemCon.children style
console.log(itemCon.children);
for (let i = 0; i < itemCon.children.length; i++) {
  let itemChild = itemCon.children[i];
  itemChild.classList.add('itemstyle');
  itemChild.innerHTML = '<p>lorem ipsum</p><div><img></div>';
  itemChild.setAttribute('style', `display: flex; justify-content: center; align-items: center;`)
  // 제목 텍스트
  itemChild.firstElementChild.style.color = '#fff';
  // 재생버튼 동그라미
  // const 
  itemChild.lastElementChild.setAttribute('style', `width: ${hun/20}vmax; height: ${hun/20}vmax; position: absolute; right: ${hun/10}vw; background-color: ${colorObj.colorDp}; border-radius: ${hun/2}%; display: flex; align-items: center; justify-content: center;`);
  // 재생버튼 세모
  // todo: 세모 => 아이콘으로 변경해주기
  const currentChevronItem = itemChild.lastElementChild.firstElementChild;
  currentChevronItem.src = './SVG/chevron.svg';
  currentChevronItem.style.transform = 'rotate(180deg)';
}
// select #menu-con
const menuCon = document.getElementById('menu-con');
console.log(menuCon);
// menuCon style
menuCon.setAttribute('style', `width: 100vw; position: fixed; bottom: 3vh; display: flex; align-items: center; justify-content: center; column-gap: 1vh;`);
// select menuCon.children
const menuChild = menuCon.children;
console.log(menuChild);
// menuChild style
for (let i = 0; i < menuChild.length; i++) {
  menuChild[i].setAttribute('style', `width: 80px; height: 80px; background: none; border: 0px; justify-content: center;`);
  console.log(menuChild[i].children);
  menuChild[i].children[0].setAttribute('style', 'width: 40px; height: 40px; stroke-width: 3px;');
  // => stroke-width로 svg 이미지의 두꼐가 조절이 가능하다
}
// select menuChild[1]
let homeBtn = menuChild[1];
// console.log(homeBtn);
homeBtn.style.background = `${colorObj.colorBp}`;
homeBtn.style.borderRadius = '50%';

// todo: 배경을 각각 다르게 적용해보기
// ?이 부분을 각각의 요소마다 다르게 적용해야함 어떻게 적용하면 될까???
// background-image:  linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("https://picsum.photos/1000/1000?random");

console.log(itemCon.children);

// let randomNum = Math.floor(Math.random()*20);
// for(let i = 0; i < 10; i++){
//   console.log(randomNum);
// }
// todo: 배열에 url에 들어갈 링크를 넣고, 그 다음에 배열을 인덱스 순서대로 꺼내와서 배경 이미지를 바꾸면 될 것 같은데
const searchItemArr = Array.from(itemCon.children);
searchItemArr.forEach((elem, index) => {
  elem.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("https://picsum.photos/1000/1000?random=1")`;
});