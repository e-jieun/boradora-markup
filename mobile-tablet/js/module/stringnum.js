// ?변경된 문자열을 새로 반환해주는 문자열 메서드 .replace()
// ?regex부분에 사용한 정규식: /[^0-9]/g ===  NOT(^)0-9의 정수인 것을 제외하고 전역에서 검사(g)해서 새로운 문자열로 반환
// ?현재 값에서 px을 제외하고 숫자값만 받아와서 연산이 가능하도록 해준

 // *문자열에서 숫자만 들어간 문자열을 다시 정수로 되돌려주도록 하는 함수 
const stringNum = (elem) => {
  console.log(elem);
  let regex = /[^0-9]/g; //정규식 없이도 문자열 메서드로 문자열을 뒤의 px단위 두 자리만 자르고 새로운 문자열로 리턴받으면 되는 부분이었다
  return elem = parseInt(elem.replace(regex, ''));

  // // let string = elem.substring(0, elem.length-2);
  // // return elem = parseInt(string); //px만 자르고 잘 리턴된다  //?substring으로는 해결이 안된다... 이 부분을 해결하니까 잘 해결이 됐다

  // // *다시 시도
  // // psuedo 1. px 단위를 변수로 담아준다
  // let pxUnit = 'px';
  // let currentPxValue = '';
  // // psuedo 2. px이란 문자열을 원소가 포함하고 있는지에 대해 조건식을 작성한다
  // if(elem.includes(pxUnit)){
  //   console.log(elem);
  //   let getEndIndex = elem.indexOf(pxUnit);
  //   let temp = elem.slice(0, getEndIndex);
  //   temp = parseInt(temp);
  //   currentPxValue = temp;
  // } else{
  //   console.error(elem+'has not px');
  //   console.log(elem);
  // }
  
  // return currentPxValue = elem;
  // console.log(currentPxValue);
  // // return currentPxValue;
}

export default stringNum;
// console.log(stringNum('10px'));