// function sum(a, b) {
//   return a + b;
// }

// // console.log(sum(10, "20"));
// var result = sum(10, 20);
// //자동 완성 x 직접 타이핑
// result.toLocaleString();

//자바 스크립트를 타입스크립트처럼 사용하는 방법

// @ts-check

/**
 *
 * @param {number} a 첫번째 숫자
 * @param {number} b 두번째 숫자
 */
function sum(a, b) {
  return a + b;
}

sum(10, "20"); //ts와 달리 오류 명시x
