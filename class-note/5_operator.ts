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
