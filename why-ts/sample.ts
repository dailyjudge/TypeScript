function add(a: number, b: number): number{
    return a + b;
}

// add(10, '20'); 오류 발생
// add(10, 20) => 30 , parameter, return 모두 number


var result2 = add(10, 20);
// result.toLocaleString();
// 인텔린센스 (코드 자동 완성)
// 자동 완성으로 오타를 줄이자.
result2.toLocaleString();