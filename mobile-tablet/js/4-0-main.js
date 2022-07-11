import colorObj from "./module/color.js";
import {
  setSize
} from "./module/css-function.js";
import {
  dramaExplain,
  dramaTitle
} from "./module/dramainform.js";
import stringNum from "./module/stringnum.js";
import mathAbs from "./module/mathabs.js";
import pageLoad from "./module/pageload.js";

// *모바일, 태블릿
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
    // console.log('서치할 수 있는 창을 만들자');
    if (isClick === true) {
      searchBar.style.display = 'block';
      searchBar.style.transition = '1s';
      isClick = false;
      headerSearch.firstElementChild.addEventListener('click', ()=>{
        pageLoad('5-0_search.html');
      })
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
  const bookmarkBtn = menuChild[0];
  const homeBtn = menuChild[1];
  const profileBtn = menuChild[2];
  console.log(homeBtn);
  homeBtn.style.background = '#c8b5c8ff';
  homeBtn.style.borderRadius = '50%';

  const menuChildArr = Array.from(menuCon.children);
  menuChildArr.forEach((elem, index) => {
    elem.addEventListener('click', (event)=>{
      index === 0 ? pageLoad('6-0_bookmark.html') : '';
      index === 1 ? pageLoad('4-0_main.html') : '';
      index === 2 ? pageLoad('9-0_profile.html') : '';
    })
  })


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
  let imgArr = ['https://picsum.photos/1000/1000?random=1', 'https://picsum.photos/1000/1000?random=2', 'https://picsum.photos/1000/1000?random=3', 'https://picsum.photos/1000/1000?random=4', 'https://picsum.photos/1000/1000?random=5'];
  // *slideChild style
  for (let i = 0; i < slideChild.length; i++) {
    slideChild[i].setAttribute('style', `width: 100vw; height: 100vh; min-width: 100vw;`);
    slideChild[i].innerHTML = `<img src=${imgArr[i]}>`;

    const slideChildImg = slideChild[i].firstElementChild;
    console.log(slideChildImg);
    slideChildImg.setAttribute('style', `width: 100vw; height: 100vh; object-fit: cover; filter: brightness(0.5);`)
    // slideChildImg.style.objectFit = 'cover';
  }
  // console.log(buttonCon.children);
  // console.clear();
  // *select buttonCon.children[2]
  const rightBtn = buttonCon.lastElementChild;
  const leftBtn = buttonCon.firstElementChild;
  const playBtn = leftBtn.nextElementSibling;
  // console.log('left'+leftBtn);
  // console.log('right'+rightBtn);
  console.log(playBtn);

  // *buttonCon.children
  const buttonItem = Array.from(buttonCon.children);
  // *buttonCon.children style
  buttonItem.map(elem => {
    elem.setAttribute('style', `background: none; border: none;`);
    setSize(elem.firstElementChild, '20px', '20px');
  })

  // *playBtn style
  console.log(playBtn);
  playBtn.setAttribute('style', `width: 50px; height: 50px; background: ${colorObj.colorBp}; border: none; transform: rotate(180deg); border-radius: 50%;`);
  // *playBtn.children[0].style.

  // *leftBtn style
  rightBtn.style.transform = 'rotate(180deg)';
  let widthValue = window.innerWidth;
  let clickValue = 0;
  // 이 부분은 왼쪽 버튼
  // leftBtn click event
  // todo: 이미지 바뀌는 부분에 따라서 텍스트 내보내주기
  title.textContent = dramaTitle[clickValue];
  drama.textContent = dramaExplain[clickValue];

  // todo: 문제는 텍스트 => 이 부분은 window.innerwidth로 지금의 left값을 나눠주고 양수로 바꿔주면 인덱스와 같아져서 그 인덱스를 적용시키면 되지 않을까? => 해결 완료


  slideCon.style.left = 0;
  const buttonCallback = {
    rightSlide: function () {
      let isStatus = slideCon.style.left;
      console.log(isStatus);
      isStatus = stringNum(isStatus);

      let moveToRight = -isStatus - window.innerWidth;
      console.log(moveToRight);
      console.log(window.innerWidth);
      slideCon.style.left = moveToRight + 'px';
      console.log(slideCon.style.width);

      // *콘텐츠 끝에서 버튼을 멈춰주는 부분
      if (moveToRight <= -window.innerWidth * imgArr.length) {
        moveToRight = -window.innerWidth * (imgArr.length - 1);
        slideCon.style.left = moveToRight + 'px';
      }
      // *양수로 만들어주는 함수를 변수로 담은 부분
      let strIndex = mathAbs(moveToRight / window.innerWidth);

      console.log('현재 widthValue: ' + widthValue);
      // *텍스트 넣어주는 부분
      // todo: 이미지 바뀌는 부분에 따라서 텍스트 내보내주기
      title.textContent = dramaTitle[strIndex];
      drama.textContent = dramaExplain[strIndex];
    },
    leftSlide: function () {
      // *slideCon의 left의 현재값
      let isStatus = slideCon.style.left;

      // *문자열인 단위값을 .substring()으로 문자열 뒤에서 2자리를 떼고 문자열을 반환해주는 함수 사용
      isStatus = stringNum(isStatus);
      console.log(isStatus);

      // *브라우저의 보이는 창 넓이값만큼 현재 값에 더해준 부분
      let moveToLeft = -isStatus + window.innerWidth;
      console.log(moveToLeft);
      // *왼쪽 버튼을 클릭하면 앞의 슬라이드로 이동해준다
      slideCon.style.left = moveToLeft + 'px';
      console.log(slideCon.style.left);
      // *left 값이 0보다 크면 0에서 멈춰주도록 한 부분
      // *인덱스 0의 이미지 슬라이드일 경우 더 이상 앞으로 움직이지 않는다
      if (moveToLeft >= 0) {
        moveToLeft = 0;
        slideCon.style.left = `${moveToLeft}px`;
      }

      // ?무조건 양수로 바꿔주는 메서드
      console.log(moveToLeft / window.innerWidth);
      // *양수로 만들어주는 함수를 변수로 담은 부분
      // ?return으로 해주지 않아서 return받지 못한 것이었음
      let strIndex = mathAbs(moveToLeft / window.innerWidth);


      // *텍스트 넣어주는 부분
      // todo: 이미지 바뀌는 부분에 따라서 텍스트 내보내주기
      // !객체로 따로 분리돼있음
      title.textContent = dramaTitle[strIndex];
      drama.textContent = dramaExplain[strIndex];
    }
  }

  // *버튼 이벤트 걸어준 부분 => 콜백함수는 위에 작성되어있음
  rightBtn.addEventListener('click', buttonCallback.rightSlide);
  leftBtn.addEventListener('click', buttonCallback.leftSlide);