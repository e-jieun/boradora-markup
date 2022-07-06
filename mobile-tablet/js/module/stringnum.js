// ?변경된 문자열을 새로 반환해주는 문자열 메서드 .replace()
// ?regex부분에 사용한 정규식: /[^0-9]/g === 0-9의 NOT(^)정수인 것을 제외하고 전체에서 검사(g)해서 반환
// ?현재 값에서 px을 제외하고 숫자값만 받아와서 연산이 가능하도록 해준

 // *문자열에서 숫자만 들어간 문자열을 다시 정수로 되돌려주도록 하는 함수 
const stringNum = (elem) => {
  // let regex = /[^0-9]/g; //정규식 없이도 문자열 메서드로 문자열을 뒤의 px단위 두 자리만 자르고 리턴받으면 되는 부분이었다
  // return elem = parseInt(elem.replace(regex, ''));
  return elem = parseInt(elem.substring(0, elem.length-2)); //px만 자르고 잘 리턴된다
}

export default stringNum;