function logMessage(value: string) {
    console.log(value);
}

logMessage('hello');
// logMessage(100); 오류 발생
// value : any시 가능

function logMessage2(value: string | number) {
    console.log(value);
}

logMessage2('hello');
logMessage2(100);
// => 유니온 타입(Union Type)
// 하나 이상의 타입을 사용


// 유니온 타입의 장점

let minkyu: string | number | boolean;

// 타입 가드 : 특정 타입으로 타입의 범위를 좁혀나가는(필터링하는) 과정
function logMessage3(value: string | number) {
    
    if (typeof value === 'number') {
        // 추천 메서드 제공
        value.toLocaleString();
    }
    if (typeof value === 'string') {
        // 추천 메서드 제공
        value.toString();
    }
}


// 유니온 타입의 특징
interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

// Developer 또는 Person이어야 한다.
function askSomeone(someone: Developer | Person) {
    // 헷갈릴 수 있는 부분..
    // 유니온 타입은 모든 '영역'에 접근한 것이 아닌가?
    // => X : 공통된 속성에만 접근 가능
    console.log(someone.name);
    
    // 모든 속성에 접근하고 싶다면?
    // * 타입 가드 *
}


// & (인터섹션) 타입
let minkyu1: string | number | boolean;
let minkyu2: string & number & boolean;

// Developer 이자 Person이어야 한다.
function askSomeone2(someone: Developer & Person) {
    
    // 모든 속성에 접근 가능하다.
    console.log(someone.name);
    console.log(someone.age);
    console.log(someone.skill);
}


// 유니온(|) 타입, 인터섹션(&) 타입의 차이점
askSomeone({name: 'developer', skill: '웹 개발'});
askSomeone({name: 'minkyu', age: 27});

askSomeone2({name: 'developer_person', skill: '앱 개발', age: 29});
askSomeone2({name: 'minkyu2', skill: '프론트엔드', age: 28});

// 결론
// | : 둘 중 하나의 interface 규격만 맞추면 된다.
// & : 둘 다 만족하는 형태의 자료가 들어와야 한다.

