import colorObj from "./module/color.js";
import borderBk from "./module/borderbk.js";
<<<<<<< HEAD
=======
import moveToPage from "./module/locationhref.js";
<<<<<<< HEAD
>>>>>>> issue-3
=======
import pageLoad from "./module/pageload.js";
>>>>>>> issue-4

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
<<<<<<< HEAD
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
=======
const signinItem = Array.from(signinCon.children);
// input#signin, input#signup style
signinItem.forEach((elem, index) => {
  elem.setAttribute('style', `width: 200px; height: 50px; border-radius: 50px; padding-left: 1vh; border: 0px; background: ${colorObj.colorYl}; color: ${colorObj.colorDp};`);
})

// *로그인 버튼
const logIn = signinCon.firstElementChild;
console.log(logIn);

// *로그인 페이지로 연결되도록 해주는 부분
logIn.addEventListener('click', function(){
  // console.log(this);
  let logInLink = '2-1_signin.html';
  moveToPage(logInLink);
})

// *회원가입 버튼
const signUp = signinCon.lastElementChild;
console.log(signUp);

// *회원가입 페이지로 연결되도록 해주는 부분
signUp.addEventListener('click', function(){
  pageLoad('2-2_signup.html');
})


// *logoCon.children
const logoImg = logoCon.children[0];
console.log(logoImg);
// *logoDiv
<<<<<<< HEAD
>>>>>>> issue-3
logoImg.setAttribute('style', 'width: 200px; height: 100px;');
=======
logoImg.setAttribute('style', 'width: 200px; height: 100px;');
console.clear();
>>>>>>> issue-4
