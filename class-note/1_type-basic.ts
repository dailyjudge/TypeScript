// JS 문자열 선언
// var str = 'hello';

// TS 문자열 선언
let str: string = 'hello';

// TS 숫자
let num: number = 10;

// TS 배열
let arr: Array<number> = [1,2,3];
let heroes: Array<String> = ['Captain', 'Thor', 'Hulk', /* 10 */];
let itmes: number[] = [1,2,3];

// TS 튜플
// 배열의 인덱스 각각의 타입이 정해짐
let address: [string, number] = ['gangnam', 1];

// TS 객체
let obj: object = {};
let person: object = {
    name: 'dailyjudge',
    age: 27,
};

let person2: {name: string, age: number} = {
    name: 'dailyjudge',
    age: 27,
}

// TS 진위값
let show: boolean = true;