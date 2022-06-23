import colorObj from "./module/color.js";
import {
  dramaExplain,
  dramaTitle
} from "./module/dramainform.js";

// *
document.body.setAttribute('style', `margin: 0; padding: 0; box-sizing: border-box; overflow: hidden;`);
// *select root
const root = document.getElementById('root');
// *root style
root.setAttribute('style', `width: 100vw; height: 100vh; display: grid; grid-template-rows: 1fr 9fr;`);
// *select #header
const headerCon = document.getElementById('header');
// *headerCon style
headerCon.setAttribute('style', `display: flex; justify-content: space-between; padding: 20px; align-items: center; background: ${colorObj.colorYl};`);
// *select headerCon.children[0].svg => logo
const headerLogo = headerCon.children[0].children[0];
console.log(headerLogo);
// *headerLogo parent style
headerCon.children[0].setAttribute('style', `width: 50px; height: 50px; display: flex; align-items: center;`);

// *select headerCon.children[1]
// todo: 클릭 이벤트를 만들어주기, 클릭 이벤트를 만들어서 드롭다운 메뉴로 구성해주기
// todo: 그리고 클릭 이벤트 타겟이 headerSearch가 아니라면 드롭다운 접어주기 shrink up
// *두번째 자식이 headerSearch
const headerSearch = headerCon.children[1];
console.log(headerSearch);
headerSearch.setAttribute('style', `width: 40px; height: 40px; background: none; border: none; display: flex; align-items: center; justify-content: center;`);
console.log(headerSearch.firstElementChild);
headerSearch.firstElementChild.setAttribute('style', `width: 30px; height: 30px; display: flex;`)

// *클릭 이벤트 클릭하면 생겨나는 부분
// *화면을 덮는 검색창 top: 헤더 바로 밑에 위치하도록 하기; right: 0; 최대 크기 정해줘야 함, 태블릿 버전 때문에 
console.log(headerSearch.children);
const searchBar = document.createElement('div');
headerSearch.firstElementChild.after(searchBar);
const searchBarText = `
    <div>
      <input type="text"></input>
      <ul>추천하는 키워드</ul>
      <ul>
        <li data-keyword="1">lorem ipsum</li>
        <li data-keyword="2">lorem ipsum</li>
        <li data-keyword="3">lorem ipsum</li>
        <li data-keyword="4">lorem ipsum</li>
        <li data-keyword="5">lorem ipsum</li>
        <li data-keyword="6">lorem ipsum</li>
        <li data-keyword="7">lorem ipsum</li>
      </ul>
    </div>
    `
searchBar.innerHTML = searchBarText;
searchBar.setAttribute('style', `width: 100vw; height: 90vmax; position: absolute; top: 10vh; right: 0; background: ${colorObj.colorYl}; z-index: 2;`);

// *생성된 드롭다운 메뉴 전체 컨테이너 부분
const searchBarCon = headerSearch.firstElementChild.nextElementSibling.firstElementChild;
console.log(searchBarCon);
searchBarCon.setAttribute('style', `height: inherit; display: flex; align-items: center; justify-content: flex-start; flex-direction: column;`)

// *검색창
const searchInput = searchBarCon.firstElementChild;
console.log(searchInput);
// https://developer.mozilla.org/ko/docs/Web/CSS/box-shadow
searchInput.setAttribute('style', `width: 60vw; height: 5vh; border: none; border-radius: 50px; margin-bottom: 2rem;`);

// *추천하는 키워드
// todo: padding-left 없애줘야 함
const recommendText = searchInput.nextElementSibling;
console.log(recommendText);
recommendText.style.paddingLeft = 0;
recommendText.style.color = colorObj.colorDp;

// * 태그 부분 => list
// todo: padding-left 없애줘야 함
const recommendKeywordCon = searchBarCon.lastElementChild;
console.log(recommendKeywordCon);
recommendKeywordCon.setAttribute('style', `height: 50%; display: grid; row-gap: 3vh; padding-left: 0;`);
recommendKeywordCon.style.height = '50%';


// *키워드 아이템
const recommendKeywordItem = Array.from(recommendKeywordCon.children);
// console.log(recommendKeywordItem);
recommendKeywordItem.map(elem => {
  // todo: 키워드의 스타일링 해줄 부분
  elem.setAttribute('style', `list-style-type: none; width: 35vw; height: 2rem; background: ${colorObj.colorBp}; border-radius: 50px; padding-top: 1rem; color: ${colorObj.colorGp};`);
})
// todo: 가장 나중에 숨겨줄 부분
searchBar.style.display = 'none';

let isClick = true;
headerSearch.firstElementChild.addEventListener('click', (event) => {
  console.log(event.target);
  console.log('서치할 수 있는 창을 만들자');
  if (isClick === true) {
    searchBar.style.display = 'block';
    searchBar.style.transition = '1s';
    isClick = false;
  } else {
    // ?문제는 클릭했을 때 사라지기는 하는데 문제는 인풋을 입력하기 위해 클릭해도 사라진다는 것이다 => 해결: 아이콘 자체에 클릭 이벤트를 달아서 그 부분 이외엔 이벤트가 일어나지 않도록 해줌
    searchBar.style.display = 'none';
    // searchBar.style.transition = '1s';
    isClick = true;
  }
})

// *select #main
const mainCon = document.getElementById('main');
mainCon.setAttribute('style', `width: 100vw; display: grid; grid-template-rows: 4fr 2fr 1fr; align-items: center; justify-content: center; overflow: hidden;`);
console.log(mainCon);
// *select #button-con
const buttonCon = document.getElementById('button-con');
console.log(buttonCon);
// *buttonCon style
buttonCon.setAttribute('style', `width: 90vw; display: flex; justify-content: space-between;`);
// *select #text-con
const textCon = document.getElementById('text-con');
console.log(textCon);
// *textCon style
textCon.setAttribute('style', `width: 90vw; display: flex; flex-direction: column; align-items: center;`);
console.log(textCon.children);
// textCon.children
const title = textCon.children[0];
const drama = textCon.children[1];
const tagCon = textCon.children[2];
// *textCon.children style
title.setAttribute('style', `font-size: 2rem; color: ${colorObj.colorYl};`);

drama.setAttribute('style', `width: 50vw; text-align: center; color: ${colorObj.colorBp}; text-stroke: 1px`);
tagCon.setAttribute('style', `display: flex; justify-content: space-around; list-style-type: none;`);

tagCon.style.display = 'flex';
tagCon.style.justifyContent = 'space-around';
tagCon.style.listStyleType = 'none';

// *tagCon.children
console.log(tagCon.children); //arr
for (let i = 0; i < tagCon.children.length; i++) {
  tagCon.children[i].setAttribute('style', `width: 8rem; background: ${colorObj.colorYl}; text-align: center; height: 1.5rem; padding: 5px; margin: 10px; border-radius: 50px; color: ${colorObj.colorDp};`);
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
  menuChild[i].children[0].setAttribute('style', 'width: 40px; height: 40px;stroke-width: 3px;');
  // => stroke-width로 svg 이미지의 두꼐가 조절이 가능하다
}
// select menuChild[1]
let homeBtn = menuChild[1];
// console.log(homeBtn);
homeBtn.style.background = '#c8b5c8ff';
homeBtn.style.borderRadius = '50%';
// --------------------------------------
// slide 효과를 넣는다
// 배경에 슬라이드 넣기
// 1. 슬라이드 컨테이너를 배경에 위치시킨다 0
// 2. 슬라이드 아이템을 배열이니까 컨테이너의 0 자식요소로 불러온다
// 3. 이미지로 들어갈 배열을 선언(우선 색깔을 넣어주자) 0
// 4. 한 섹션마다 이미지를 넣어준다 0
// 5. 클릭이벤트를 달아준다
// 6. 클릭하면 위치가 이동하는 부분을 주면 좋을 것
const slideCon = document.getElementById('slide-con');
console.log(slideCon);
// slideCon style
slideCon.setAttribute('style', `min-width: 100vw; height: 100vh; display: flex; position: absolute;z-index: -1; top: 0;`);
// console.log(slideCon.children);
const slideChild = slideCon.children;
// console.log(slideChild);
// 우선 구분해줄 배경색 배열
// todo: 지금은 배경색을 넣어줬는데 이미지 소스로 변경해주기
let colorArr = ['https://picsum.photos/1000/1000?random=1', 'https://picsum.photos/1000/1000?random=2', 'https://picsum.photos/1000/1000?random=3', 'https://picsum.photos/1000/1000?random=4', 'https://picsum.photos/1000/1000?random=5'];
// *slideChild style
for (let i = 0; i < slideChild.length; i++) {
  slideChild[i].setAttribute('style', `width: 100vw; height: 100vh; min-width: 100vw;`);
  slideChild[i].innerHTML = `<img src=${colorArr[i]}>`;

  const slideChildImg = slideChild[i].firstElementChild;
  console.log(slideChildImg);
  slideChildImg.setAttribute('style', `width: 100vw; height: 100vh; object-fit: cover; filter: brightness(0.5);`)
  // slideChildImg.style.objectFit = 'cover';
}
// console.log(buttonCon.children);
// *select buttonCon.children[2]
const leftBtn = buttonCon.lastElementChild;
const rightBtn = buttonCon.firstElementChild;
const playBtn = rightBtn.nextElementSibling;
console.log(leftBtn);
console.log(rightBtn);
console.log(playBtn);

// *buttonCon.children
const buttonItem = buttonCon.children;
// *buttonCon.children style
for (let i = 0; i < buttonItem.length; i++) {
  buttonItem[i].style.background = 'none';
  buttonItem[i].style.border = 'none';
}

// *playBtn style
console.log(playBtn);
playBtn.setAttribute('style', `width: 50px; height: 50px; background: ${colorObj.colorBp}; border: none; transform: rotate(180deg); border-radius: 50%;`);
// *playBtn.children[0].style.

// *leftBtn style
leftBtn.style.transform = 'rotate(180deg)';
let widthValue = window.innerWidth;
let clickValue = 0;
// 이 부분은 왼쪽 버튼
// leftBtn click event
// todo: 이미지 바뀌는 부분에 따라서 텍스트 내보내주기
title.textContent = dramaTitle[clickValue];
drama.textContent = dramaExplain[clickValue];

leftBtn.addEventListener('click', () => {
  // console.log('왼쪽으로 이전 이미지가 넘어가는 인터랙션을 주시오');
  console.dir(slideChild[0]); //offsetWidth: 531;
  // 넓이 기준점을 0-클릭수만큼 곱해주고
  // widthValue = slideChild[0].offsetWidth * index;
  title.textContent = dramaTitle[clickValue];
  drama.textContent = dramaExplain[clickValue];
  widthValue = window.innerWidth * clickValue;
  clickValue++;
  // 우선 슬라이드 효과는 줄 수 있다
  for (let i = 0; i < slideChild.length; i++) {
    // console.log(widthValue);
    slideChild[i].style.position = 'relative';
    slideChild[i].style.left = `-${widthValue}px`;
    // todo: 이미지 바뀌는 부분에 따라서 텍스트 내보내주기
    // slideChild[i].style.transition = '2s';
    console.log('현재 left 값 위치: ' + slideChild[i].style.left);
  }
  console.log('현재 widthValue: ' + widthValue);

  let rightClickValue = 1;
  // todo: 이곳에서 left 값이 얼마인지 알아야 한다
  rightBtn.addEventListener('click', () => {
    console.log('rightbtn');
    rightClickValue++;
    console.log('현재 오른쪽 버튼 값이 계산되기 전 widthValue: ' + widthValue);
    for (let i = 0; i < slideChild.length; i++) {
      // todo: 1. 다시 돌아가는 버튼은 left 버튼의 현재 left 값에서 이동할 수 있어야 한다 
      // ?한번 클릭했을 때만 되는 문제 해결하기 => 변수를 선언해서 해결했다
      // ?그런데 left 값이 실행되고 나서의 값이 
      slideChild[i].style.left = -widthValue + (window.innerWidth * rightClickValue) + 'px';
      // todo: 2. 그러면 오른쪽 버튼은 left값에 +브라우저 내부값 하나만 더 해주면 되는 것 아닐까? 클릭할 때마다
      // todo: 3. 그러면 left 값은 -windthValue px에 +window.innerHeight을 더해준 값이 된다
      // title.textContent = dramaTitle[i];
      // drama.textContent = dramaExplain[i];
      console.log('오른쪽 클릭 left값 위치: ' + slideChild[i].style.left);
    }
  });
});


// todo: 다시 돌아가는 버튼(버튼컨의 첫 칠드런)에 이벤트를 누르면 다시 앞의 컨텐츠로 돌아가는 효과를 줘야 한다 
// rightBtn.addEventListener('click', () => {
//   console.log('rightbtn');
//   // todo: 1. 다시 돌아가는 버튼은 left 버튼의 현재 left 값에서 이동할 수 있어야 한다 
//   // todo: 2. 그러면 오른쪽 버튼은 left값에 +브라우저 내부값 하나만 더 해주면 되는 것 아닐까? 클릭할 때마다
//   // todo: 3. 그러면 left 값은 -windthValue px에 +window.innerHeight을 더해준 값이 된다
// });