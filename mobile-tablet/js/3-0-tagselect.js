import colorObj from "./module/color.js"
import pageLoad from "./module/pageload.js";
// import borderBk from "./module/borderbk.js"
import tagChange from "./module/tagcolor.js"

document.body.setAttribute('style', 'margin: 0; padding: 0;');

// *#root
const root = document.getElementById('root');
console.log(root);
// *root style
root.setAttribute('style', `width: 100vw; height: 100vh; display: grid; grid-template-rows: 1fr 5fr 1fr; color: ${colorObj.colorDp}; overflow: hidden;`);
// root.style.background = colorObj.colorBp;
// console.dir(root.style);

// console.log(root.children);
const headerCon = root.children[0];
const mainCon = root.children[1];
const footerCon = root.children[2];
// console.log(headerCon);
// console.log(mainCon);
// console.log(footerCon);

// *headerCon style
headerCon.setAttribute('style', 'display: flex; align-items: center; padding-left: 2vh;');

// *mainCon style
mainCon.setAttribute('style', 'padding: 10vw;');

// *mainCon.children
// console.log(mainCon.children);
const textCon = mainCon.children[0];
const tagCon = mainCon.children[1];

// *textCon.children
const mainText = textCon.children;
console.log(mainText);
mainText[0].style.fontSize = '1.8rem';
mainText[1].style.fontSize = '0.8rem';

// *tagCon style
tagCon.style.display = 'flex';

// tagCon.style.overflow = 'hidden';

// *tagCon.children
const ul = tagCon.children[0];
const li = document.getElementsByTagName('li');
// console.log(li);
// console.log(ul);
// ul style
ul.setAttribute('style', 'width: 20vw; list-style-type: none; display: grid; grid-template-columns: 1fr 1fr 1fr 1fr 1fr; column-gap: 1rem;');


// *li => 태그 아이템 요소
// ul.appendChild(li)*30, li style 
for (let i = 0; i < 30; i++) {
  const li = document.createElement('li');
  li.textContent = 'lorem ipsum';
  ul.appendChild(li);
  console.log(i);
  const liItem = ul.children;
  for (let i = 0; i < liItem.length; i++) {
    liItem[i].setAttribute('style', `width: 8rem; background: ${colorObj.colorYl}; text-align: center; height: 1.5rem; padding: 5px; margin: 10px; border-radius: 50px;`);
    liItem[i].setAttribute('data-tag', i+1);
  }
}

// *태그가 클릭하면 선택되는 이벤트, 다시 한번 클릭하면 취소된다
let isClicked = 0;
ul.addEventListener('click', (event) => {
  console.log(event.target);
  if(event.target.dataset.tag && isClicked === 0){
    // console.log('여기에 적용하자');
    tagChange(event.target, `${colorObj.colorDp}`, `${colorObj.colorYl}`);
    console.log(isClicked);
    isClicked--;
  } else if(event.target.dataset.tag && isClicked !== 0){
    tagChange(event.target, `${colorObj.colorYl}`, `${colorObj.colorDp}`);
    console.log(isClicked);
    isClicked++;
  }
})

// *select footer
const footer = document.querySelector('footer');
console.log(footer);
// *footer style
footer.setAttribute('style', `display: flex; justify-content: flex-end;`)

// *footer.children
const footerBtn = footer.children[0];
// console.log(footer);
// *footerBtn style
footerBtn.setAttribute('style', `width: 8rem; height: 3rem; padding: 10px; position: relative; right: 20px; border-radius: 50px; background: ${colorObj.colorDp}; border: 0px; color: ${colorObj.colorYl};`);
// todo: footerBtn mouseover event
footerBtn.addEventListener('mouseover', function(){
  // console.log(this);
  tagChange(this, `${colorObj.colorYl}`, `${colorObj.colorDp}`);
  this.style.transition = '1s';
});

// *button#before
const before = document.getElementById('before');
console.log(before);
// *button#before style
before.setAttribute('style', `background: none; border: none;`);
before.classList.toggle('before-position');

before.addEventListener('click', ()=>{
  pageLoad('4-0_main.html');
});

const nextBtn = document.getElementById('next');
console.log(nextBtn);
nextBtn.addEventListener('click', ()=>{
  pageLoad('4-0_main.html');
})