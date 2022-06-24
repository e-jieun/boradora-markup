import colorObj from "./module/color.js";
import borderBk from "./module/borderbk.js";

document.body.setAttribute('style', 'margin: 0; padding: 0;');
console.log(document.body);
// #root 식별
const root = document.getElementById('root');
// section[0] 식별
const logoCon = root.children[0];
// section[1] 식별
const signinCon = root.children[1];
console.log(root);
console.log(logoCon);
console.log(signinCon);

// borderBk(logoCon);
// borderBk(signinCon);

// root style
root.setAttribute('style', 'width: 100vw; height: 100vh; display: grid; justify-content: center;');
root.style.background = colorObj.colorBp;
// logoCon style
logoCon.setAttribute('style', 'display: flex; align-items: flex-end; justify-content: center; margin-bottom: 10vh;')
// signinCon style
signinCon.setAttribute('style', 'display: flex; flex-direction: column; align-items: flex-end; justify-content: flex-start; row-gap: 1vh;');

console.log(signinCon.children);
const signinItem = signinCon.children;
// input#signin, input#signup style
for (let i = 0; i < signinItem.length; i++) {
  signinItem[i].setAttribute('style', 'width: 200px; height: 50px; border-radius: 50px; padding-left: 1vh; border: 0px;');
  signinItem[i].style.background = colorObj.colorYl;
  signinItem[i].style.color = colorObj.colorDp;
}
console.log(signinCon.childNodes);

// logoCon.children
const logoImg = logoCon.children[0];
console.log(logoImg);
// logoDiv
logoImg.setAttribute('style', 'width: 200px; height: 100px;');