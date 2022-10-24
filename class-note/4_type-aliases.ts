interface Person1 {
    name: string;
    age: number;
}

// type Person2 = {
//     name: string;
//     age: number;
// }

let dailyjudge: Person1 = {
    name: '민규',
    age: 30,
}

type Mystring = string;
let str: Mystring = 'hello';

type Todo = {
    id: string;
    title: string;
    done: boolean;
}

function getTodo(todo: Todo) {

}

// 타입 별칭과 인터페이스의 차이점
// 타입 별칭 : 새로운 타입 값을 하나 생성하는 것이 아니라 정의한 타입에 대해 나중에 쉽게 참고할 수 있게 이름을 부여하는 것
// 가장 큰 차이점 : 확장 가능 여부 (인터페이스 O, 타입 별칭 X)
// 가능한 한 인터페이스를 사용
