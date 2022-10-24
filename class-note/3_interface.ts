interface User  {
    age: number;
    name: string;
}

// 변수에 활용한 인터페이스
let dailyjudge: User = {
    age: 27,
    name: "minkyu",
}


// 함수의 인자를 정의하는 인터페이스
function getUser(user: User): void {
    console.log(user);
}

const dailyjudge2 = {
    age: 27,
    name: "minkyu2",
}
getUser(dailyjudge2);


//함수의 스펙(구조)를 정의하는 인터페이스
interface SumFunction {
    (a: number, b: number): number;
}

let sum: SumFunction; 
sum = function(a: number, b: number): number {
    return a + b;
}

// 인덱싱 방식을 정의하는 인터페이스
interface StringArray {
    [index: number]: string;
}

let arr: StringArray = ['a','b','c'];
// 오류 index로 '접근'하는 요소들은 string이기 때문
// arr[0] = 10; 


// 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp;
}

let obj: StringRegexDictionary = {
    // 정규식
    // sth: /abc/,

    //오류 : key는 string이지만 value type이 다름
    // cssFile: 'css' 


    //일반적으로 사용하는 regex
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}

// 오류 : value 타입이 맞지 않음
// obj['cssFile'] = 'a';
// 딕셔너리 패턴에 의하여 key에 자동으로 string을 할당
// => 타입 추론
Object.keys(obj).forEach((key)=> {

})

// 인터페이스 확장
interface Person {
    name: string;
    age: number;
}

// interface Developver {
//     name: string;
//     age: number;
//     language: string;
// }

// name, age, language 총 3가지의 속성을 가진다.
interface Developver extends Person{
    language: string;
}

let capt: Developver = {
    name: "minkyu",
    age: 27,
    language: 'ts',
}