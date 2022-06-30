import {
  setDisplay,
  setSize,
  setBgColor,
  setPosition
} from "../module/css-function.js";
import makeElem from "../module/makeelem.js";
import {
  hun,
  center,
  inherit,
  hunPer
} from "../module/variable.js";
import borderBk from "../module/css-function.js";
import appendChild from "../module/appendchild.js";
import colorObj from "../module/color.js";
import tagChange from "../module/tagcolor.js";

const root = document.getElementById('root');

if (window.innerWidth >= 1024) {
  console.log('pc버전의 메인화면입니다')
  // *pc버전의 메인 페이지는 완전 다른 구성을 하고 있으므로 root의 자식요소를 지우고 다시 작성해줬음
  setSize(root, `${hun}vw`, `${hun}vh`);
  root.innerHTML = '';
  setDisplay(root, 'grid');
  root.style.gridTemplateColumns = `2fr 8fr`;
  root.innerHTML = makeElem('section', 2);

  // *root > section*2
  // console.log(root.children);
  const section = Array.from(root.children);
  console.log(section);
  section.map(elem => {
    setSize(elem, hunPer, inherit);
    // borderBk(elem);
  });

  // *menuCon
  section.at(0).id = 'menu';
  const menuCon = document.querySelector('#menu');
  console.log(menuCon);
  setBgColor(menuCon, colorObj.colorYl);
  // setPosition(menuCon, 'fixed', 0, '', 0, '');
  setDisplay(menuCon, 'grid');
  menuCon.style.gridTemplateRows = `2fr 8fr`;

  // *menuCon > div*2
  menuCon.innerHTML = makeElem('div', 2);
  const menuItem = Array.from(menuCon.children);
  menuItem.map(elem => {
    setSize(elem, `20vw`, hunPer);
    // borderBk(elem);
  });

  // *검색창
  const searchCon = menuItem.at(0);
  appendChild(searchCon, 'img', 'logo');
  appendChild(searchCon, 'input', 'search');
  appendChild(searchCon, 'div', 'search-btn');
  console.log(searchCon);
  setDisplay(searchCon, `flex`, center, center, 'column');

  // *검색창 아이템
  const searchItem = Array.from(searchCon.children);
  console.log(searchItem);
  // *로고
  const logo = searchItem.at(0);
  console.log(logo);
  logo.setAttribute('src', 'SVG/logo.svg');
  setSize(logo, `50px`);

  // *검색창
  const search = searchItem.at(1);
  console.log(search);
  search.classList.add('tag-size');
  setSize(search, '70%', '2rem');

  // *검색버튼
  const searchBtn = searchItem.at(-1);
  searchBtn.classList.add('circle');
  setBgColor(searchBtn, colorObj.colorDp);
  setPosition(searchBtn, 'relative', '', '', `${hun/2}px`);
  setSize(searchBtn, '30px', '30px');
  setDisplay(searchBtn, 'flex');
  console.log(searchBtn);
  appendChild(searchBtn, 'img');
  searchBtn.firstElementChild.setAttribute('src', `SVG/white-search.svg`);
  setSize(searchBtn.firstElementChild, '20px', '20px');

  // *tagCon
  const tagCon = menuItem.at(-1);
  console.log(tagCon);
  appendChild(tagCon, 'ul');

  // *tagUl
  const tagUl = tagCon.firstElementChild;
  console.log(tagUl);
  tagUl.innerHTML = makeElem('li', 6);
  tagUl.classList.add('padding-left');
  setDisplay(tagUl, 'flex', center, center, 'column');
  tagUl.textContent = `추천 검색 키워드`;

  // *tagLi
  let liStrArr = ['lorem ipsum', 'lorem ipsum', 'lorem ipsum', 'lorem ipsum', 'lorem ipsum', 'lorem ipsum'];
  let liStr = makeElem('li', 1, '추천 검색 키워드');
  for (let i = 0; i < liStrArr.length; i++) {
    liStr += `<li>${makeElem('p', 1, liStrArr[i])}</li>`;
  }
  console.log(liStr);
  tagUl.innerHTML = liStr;
  const tagLi = Array.from(tagUl.children);
  tagLi.map((elem, index) => {
    elem.style.padding = 0;
    elem.style.fontSize = `0.8rem`;
    elem.classList.add('list-style-none');
    if(index === 0){
      elem.style.color = colorObj.colorDp;
    } else{
      elem.classList.add('list-style-none', 'padding-left', 'tag-size');
      tagChange(elem, colorObj.colorBp, colorObj.colorDp);
    }
    
  })

}