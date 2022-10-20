// 함수의 파라미터에 타입을 정의하는 방식
function sum3(a: number, b: number): number {
    return a + b;
}

let result:number = sum3(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
function sum4(): number {
    return 10;
}

// 오류 발생
// JS의 유연함을 방지
// sum3(10, 20, 30, 40);

// 함수의 선택적(옵셔널) 파라미터 : ?
function log(a: string, b?: string, c?:string) {
    return a + b;
}

/* 파라미터를 정해주고 싶을때 */
/* 각 함수를 정의해주는 것 x */
/* a: string 필요.
// b: 인자가 존재하지 않아도 됨.
// c: 인자가 존재하지 않아도 됨.
// log('hello world');
// log('hello ts', new Person())*/