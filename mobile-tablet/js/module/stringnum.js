// ?변경된 문자열을 새로 반환해주는 문자열 메서드 .replace()
// ?regex부분에 사용한 정규식: /[^0-9]/g === 0-9의 정수가 아닌 것을 제외하고 전체에서 검사해서 반환
// ?현재 값을 음수가 아닌 양수로 구해준 부분

 // *문자열에서 숫자만 들어간 문자열을 다시 정수로 되돌려주도록 하는 함수 
const stringNum = (elem) => {
  let regex = /[^0-9]/g;
  return elem = parseInt(elem.replace(regex, ''));
}

export default stringNum;