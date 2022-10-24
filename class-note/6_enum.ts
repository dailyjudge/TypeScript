enum Shoes {
    Nike,
    Adidas,
    NewBalance,
}

let myShoes1 = Shoes.Nike;
// 0 (별도의 값 지정이 없다면 숫자형 이넘)ㅌ
console.log(myShoes1) 

let myShoes2 = Shoes.Adidas;
// 1 (숫자형 이넘이라면 숫자가 1씩 올라감)
console.log(myShoes2);

let myShoes3 = Shoes.NewBalance;
// 2
console.log(myShoes3);

enum Shoes2 {
    Nike = '나이키',
    Adidas = '아디다스',
}

let myShoes2_1 = Shoes2.Nike;
// 나이키
console.log(myShoes2_1);
let myShoes2_2 = Shoes2.Adidas;
// 아디다스
console.log(myShoes2_2);

// 이넘 활용 사례
enum Answer {
    Yes= 'Y',
    No= 'N',
}
function askQuestion(answer: string) {
    if (answer === "yes") {
        console.log("정답입니다");
    } if (answer === "no") {
        console.log("오답입니다");
    }
}

// 이런 경우면 어떻게 처리할까?
// askQuestion('yes');
// askQuestion('예스');
// askQuestion('Yes');

function askQuestion2(answer: Answer) {
    if (answer === Answer.Yes) {
        console.log("정답입니다");
    } if (answer === Answer.No) {
        console.log("오답입니다");
    }
}

askQuestion2(Answer.Yes);
