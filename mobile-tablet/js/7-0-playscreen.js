import colorObj from "./module/color.js";
import {
  setBgColor,
  setSize,
  setPosition,
  setDisplay
} from "./module/css-function.js";
import makeElem from "./module/makeelem.js";
import appendChild from "./module/appendchild.js"

// *
document.body.setAttribute('style', `margin: 0; padding: 0; box-sizing: border-box;`);
// variable declaration

let hun = 100;
// get #root, #menu-con, #screen-con
const root = document.getElementById('root');
const menuCon = root.firstElementChild;
const screenCon = root.lastElementChild;
console.log(root);
console.log(menuCon);
console.log(screenCon);
// root style
root.setAttribute('style', `width: ${hun}vw; height: ${hun}vh;`);
root.style.backgroundImage = `url("https://picsum.photos/1000/1000?random=1")`;
// screenCon style
screenCon.setAttribute('style',
  `width: inherit; height: ${window.offsetHeight}px; position: fixed; bottom: 0; display: grid; grid-template-rows: 2fr 1fr;`
);
// screenCon.children
const subtitleCon = screenCon.firstElementChild;
const playmenuCon = screenCon.lastElementChild;
console.log(subtitleCon);
console.log(playmenuCon);
// subtitleCon style
// 자막 두 개를 만들어 줄 부분
// subtitleCon.innerHTML = '<p>こんにちは。</p><p>안녕하세요.</p>';
subtitleCon.setAttribute('style', `display: grid; align-items: center; justify-content: center;`);
for (let i = 0; i < 2; i++) {
  let subtitleItem = document.createElement('p');
  subtitleCon.appendChild(subtitleItem);
}
subtitleCon.firstElementChild.textContent = 'こんにちは。';
subtitleCon.lastElementChild.textContent = '안녕하세요.';

const subtitleItem = Array.from(subtitleCon.children);
console.log(subtitleItem);
subtitleItem.map(elem => {
  setBgColor(elem, 'rgba(255, 255, 255, 0.5)');
  elem.style.padding = '5px';
})

// playmenuCon style
playmenuCon.setAttribute('style', `display: grid; grid-template-rows: 1fr 3fr;`);
for (let i = 0; i < 2; i++) {
  let playmenuItemCon = document.createElement('div');
  playmenuCon.appendChild(playmenuItemCon);
}
// playmenuCon.children style
playmenuCon.firstElementChild.style.background = colorObj.colorCr;
playmenuCon.lastElementChild.style.background = colorObj.colorBp;
playmenuCon.lastElementChild.innerHTML = `<div>play</div><div>MENU</div>`;
playmenuCon.lastElementChild.setAttribute('style',
  `display: grid; grid-template-columns: 9fr 1fr; background: ${colorObj.colorBp};`);
// menuBtn style
let menuBtn = playmenuCon.lastElementChild.lastElementChild;
// console.log(menuBtn);
menuBtn.style.background = colorObj.colorDp;
menuBtn.style.color = colorObj.colorBp;
if (!menuBtn.classList.contains('flex-center-center')) {
  menuBtn.classList.add('flex-center-center');
}
// playBtnCon style
const playBtnCon = playmenuCon.lastElementChild.firstElementChild;
console.log(playBtnCon);
// let playBtnItemArr = ['-10초','play','+10초'];
playBtnCon.innerHTML = '<div>-10초</div><img><div>+10초</div>'
if (!playBtnCon.classList.contains('flex-center-center')) {
  playBtnCon.classList.add('flex-center-center');
}
playBtnCon.style.justifyContent = 'space-evenly';
playBtnCon.style.color = colorObj.colorDp;

// console.log(playBtnCon.firstElementChild.nextElementSibling);
const playTriangle = playBtnCon.firstElementChild.nextElementSibling;
console.log(playTriangle);
playTriangle.src = `./SVG/play-triangle.svg`;
setSize(playTriangle, '30px', '30px');

// *나타나는 선택 카테고리 메뉴

// todo: 겹쳐줘야 하니까 root의 마지막 차일드로 붙여주자
appendChild(root, 'div', 'car-con');
console.log(root.children);

// *나타나는 메뉴 부분
const carCon = root.lastElementChild;
console.log(carCon);
setSize(carCon, `100vw`, `100vh`);
setBgColor(carCon, `rgba(65,65,65,0.5)`);
carCon.style.zIndex = 2;
setDisplay(carCon, 'grid');
carCon.style.gridTemplateColumns = '1fr 1fr';
// todo: 큰 컨테이너 => 2개
carCon.innerHTML = makeElem('section', 2);
Array.from(carCon.children).forEach(elem => {
  setSize(elem, '', 'inherit');
});

// todo: 컨테이너 1 =>  자막선택, 재생속도, 북마크(큰 카테고리)
// *section1
const menuNameCon = carCon.firstElementChild;
menuNameCon.innerHTML = makeElem('ul', 1);
setDisplay(menuNameCon, 'flex', 'center', 'flex-end');
// *카테고리 감싸주는 부분
const menuName = menuNameCon.firstElementChild;
setSize(menuName, '50%', '40%');
menuName.style.borderRight = '1px solid #fff';
console.log(menuName);
menuName.innerHTML = makeElem('div', 3, 'hi');
setDisplay(menuName, 'grid', 'center');
setPosition(menuName, 'relative', '', '5vh');


// *section2
const menuItemCon = carCon.lastElementChild;
menuItemCon.innerHTML = makeElem('section', 2);
setDisplay(menuItemCon, 'grid');
menuItemCon.style.gridTemplateColumns = '4fr 1fr';
console.log(menuItemCon);
// *section2 children
const menuItemConChild = Array.from(menuItemCon.children);
console.log(menuItemConChild);

// *카테고리 누르면 반대편에 나타나도록 하는 부분
const menuItemAppear = menuItemCon.firstElementChild;
console.log(menuItemAppear);
setSize(menuItemAppear, '', '40%');
setDisplay(menuItemAppear, 'grid', 'center', 'space-around');
setPosition(menuItemAppear, 'relative', '', '5vh');
menuItemAppear.style.color = colorObj.colorFf;

// *button 들이 들어가는 con
const buttonCon = menuItemCon.lastElementChild;
console.log(buttonCon);
// appendChild(buttonCon, 'button', 'x-button', `${makeElem('ul', 2)}`);
appendChild(buttonCon, 'div', 'plus-button');
setDisplay(buttonCon, 'flex', 'center', 'center', 'column');
setSize(buttonCon, '', 'inherit');

// *북마크 더하기 버튼
// ?크기를 지정해주지 않아서 안 나타났던
const plusBtnCon = document.getElementById('plus-button');
setSize(plusBtnCon, 'inherit', '20%');
setDisplay(plusBtnCon, 'flex', 'center', 'center', 'column');
setPosition(plusBtnCon, 'absolute', '5vh');
console.log(buttonCon.children);
console.log(plusBtnCon);

// todo: 컨테이너 2 => 2. 북마크 추가, X버튼 => 기본으로 있어야 하는 부분
// *북마크 ul에 li 두 개 만들기
appendChild(plusBtnCon, 'ul', 'bookmarkAdd');
// !자식요소가 없었는데 없는 자식요소에 자식요소를 생성하도록 해서 문제였음
const plusBtnOne = document.getElementById('bookmarkAdd');
setSize(plusBtnOne, `40px`, `40px`);
plusBtnOne.style.paddingLeft = '0';
plusBtnOne.style.marginTop = 0;
plusBtnOne.style.border = `1px solid ${colorObj.colorFf}`;
plusBtnOne.innerHTML = `${makeElem('li', 2)}`;
setDisplay(plusBtnOne, 'flex', 'center', 'center', 'column');

// *+ 만들어주기
const plus = Array.from(plusBtnOne.children);
console.log(plus);
plus.forEach((elem, index) => {
  console.log('hi');
  setSize(elem, '60%', '1px');
  setBgColor(elem, colorObj.colorFf);
  elem.style.listStyleType = 'none';
  index > 0 ? elem.style.transform = `rotate(90deg)`:'';
});


// *북마크 추가 텍스트 넣기
appendChild(plusBtnCon, 'div', 'bookmarkTxt');
console.log(plusBtnCon.children);
const plusBtnTwo = document.getElementById('bookmarkTxt');
// !innerHTML로 들어가서 안 나타났었다
plusBtnTwo.textContent = '북마크 추가';
plusBtnTwo.style.fontSize = '0.5rem';
plusBtnTwo.style.color = colorObj.colorFf;
console.log(plusBtnTwo);

// *카테고리 메뉴 부분
const menuNameItem = Array.from(menuName.children);
let now = new Date();
let menuNameArr = ['자막선택', '재생속도', '북마크'];
let menuItemArr = [`${makeElem('div', 1, '동시자막')}${makeElem('div', 1, '무자막')}`, `${makeElem('div', 1, `0.5x`)}${makeElem('div', 1, `0.75x`)}${makeElem('div', 1, `1.0x`)}${makeElem('div', 1, `1.25x`)}${makeElem('div', 1, `1.5x`)}`, `${appendChild(menuItemAppear, 'div', '')}`];

menuNameItem.forEach((elem, index) => {
  elem.setAttribute('data-menu', index + 1);
  elem.style.color = colorObj.colorFf;
  index === 0 ? elem.textContent = menuNameArr[index] : index === 1 ? elem.textContent = menuNameArr[index] : '';
  index === menuNameArr.length - 1 ? elem.textContent = menuNameArr.at(-1) : '';
  console.log(menuNameArr.at(-1));

  // todo: 컨테이너 2 => 1. 누를 때마다 생기는(클릭 이벤트) 각 카테고리의 하위 메뉴 => 누를 때마다 바뀌어서 생겨나는 부분
  elem.addEventListener('click', function (event) {
    console.log(event.target);
    // true인 경우에는 만들어 주고, 아닌 경우에는 메뉴를 다시 없는 상태로 만들어줘야 한다
    // true인 경우에는 컨테이너에 자식요소를 각각 다르게 해서 다시 없애주고, 다시 붙여주고... => innerHTML을 재할당하면 값이 싹 바뀌니까 배열에 자식을 뭘 붙여줄 것인지 알아내서 문자열로 넣고 각각 클릭할 때마다 다른 innerHTML을 만들도록 하면 될 것 같다
    if (event.target.dataset.menu === elem.dataset.menu) {
      // event.target.style.color = `${colorObj.colorDp}`;
      menuItemAppear.innerHTML = menuItemArr[Number(event.target.dataset.menu) - 1];
      console.log(menuItemAppear);
    } else {
      // elem.style.color = `${colorObj.colorFf}`;
    }
  });
});
console.log(menuName);




// carCon.style.display = 'none';

const makeMenu = playmenuCon.lastElementChild.lastElementChild;
console.log(menuBtn);

let isClick = true;
// *클릭 이벤트
makeMenu.addEventListener('click', function () {
  // console.log('makemenu');
  if (isClick === true) {
    console.log(true);
    // setBgColor(this, '#ff0000');
    setDisplay(carCon, 'block');
    isClick = false;
  } else {
    console.log(false);
    setDisplay(carCon, 'none');
    isClick = true;
  }
  // console.log(this);
});