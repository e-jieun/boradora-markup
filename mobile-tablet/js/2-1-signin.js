import colorObj from "./module/color.js"
import borderBk from "./module/borderbk.js"
import moveToPage from "./module/locationhref.js";

document.body.setAttribute('style', 'margin: 0; padding: 0;');
console.log(document.body);
// *#root
const root = document.getElementById('root');
// *section[0]
const logoCon = root.children[0];
// *section[1]
const signinCon = root.children[1];
console.log(root);
console.log(logoCon);
console.log(signinCon);
// borderBk(logoCon);
// borderBk(signinCon);

// *root style
root.setAttribute('style', 'width: 100vw; height: 100vh; display: grid; justify-content: center;');
root.style.background = colorObj.colorBp;
// *logoCon style
logoCon.setAttribute('style', 'display: flex; align-items: flex-end; justify-content: center; margin-bottom: 10vh;')
// *signinCon style
signinCon.setAttribute('style', 'display: flex; flex-direction: column; align-items: flex-end; justify-content: flex-start; row-gap: 1vh;');

console.log(signinCon.children);
const signinItem = signinCon.children;
// *input#email, input#pw style
for (let i = 0; i < signinItem.length - 2; i++) {
  signinItem[i].setAttribute('style', 'width: 200px; height: 50px; border-radius: 50px; padding-left: 1vh; border: 0px;');
  signinItem[i].style.background = colorObj.colorYl;
}

// *input#next
const nextBtn = signinCon.lastElementChild;
console.log(nextBtn);

// *nextBtn을 클릭하면 태그 선택 화면으로 이동하도록 해줌
nextBtn.addEventListener('click', function(){
  // console.log(this);
  let tagselectLink = '3-0_tag select.html';
  moveToPage(tagselectLink);
})

signinItem[signinItem.length - 1].setAttribute('style', 'width: 70px;height: 50px; border-radius: 50px; border: 0px; ');
signinItem[signinItem.length - 1].style.background = colorObj.colorDp;
signinItem[signinItem.length - 1].style.color = colorObj.colorYl;
// console.dir(signinItem[signinItem.length-1]);

// *button
const pwFind = document.querySelector('button');
console.log(pwFind);
// *pwFind style
pwFind.setAttribute('style', 'width: 100%; border: none; background: none; font-size: 0.8rem;');
pwFind.style.color = colorObj.colorDp;

// *logoCon.children
const logoImg = logoCon.firstElementChild;
console.log(logoImg);
// *logoDiv
logoImg.setAttribute('style', 'width: 200px; height: 100px;');