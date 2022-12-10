import math, { PI as PINUM, getSum } from "./lib.mjs";

//최신문법의 기준 ES6(2015)

/* 
    1. var 문제점
        1) 중복 선언이 가능하다. => 의도치 않게 값이 변경될 수 있어서 예상치 못한 오류가 발생한다.
        2) 변수 호이스팅이 발생한다. => 변수 선언 이전에 참조가 된다. 변수 초기화시 undefined가 할당된다.
        3) 블록 레벨 스코프 (유효범위)
*/
console.log(num); // 호이스팅 발생
var num = 10;
console.log(num);
var num = 30;
console.log(num);

function sum(a) {
    var num = 0;
    num = num + a;
    return num;
}

console.log(sum(10));
console.log(num);

if (true) {
    var num = 100;
    var num02 = 200; // 블랙 레벨 스코프 지원하지 않기 때문에 전역 변수 num02가 생성된다.
    console.log(num);
}

console.log(num, num02);

if (true) {
    // console.log(num03); 선언 이전에 참조 불가능 => 엄밀히 말하면 호이스팅 자체는 일어난다. => TDZ (템퍼러리 데드 존) 문제
    let num03 = 10;
    // let num03 = 10; 중복 선언 불가능.
}

// console.log(num03); 블록 레벨 스코프를 지원하기 때문에 전역 변수가 생성되지 않는다.
const TAX = 10; // Contant(상수) => 값을 무조건 초기화시켜야한다.
// TAX = 100; 상수이기 때문에 재할당 불가능
console.log("세율이 " + TAX + "% 입니다.");
// 템플릿 리터럴 : ``(백틱) 안에 ${표현식}을 통해 문자열 안에 표현식을 포함시킬 수 있다.
console.log(`세율이 ${TAX + 10 / 2}% 입니다.`);

/* 
    화살표 함수(Arrow Function)
        1) 표현이 간결하기 때문에 주로 콜백함수로 전달할 때 사용한다.
        2) 코드블록을 생략하면 return을 생략할 수 있다. => 객체도 {}를 사용하기 때문에 () 안에 사용해야 객체로 인식한다.
        3) this 바인딩이 되지 않는다.

 */
/* let divide = (a, b) => {
    return a / b;
}; */
let divide = (a, b) => a / b;
/* let getObj = (name, age) => {
    return {
        name,
        age,
    };
}; */
let getObj = (name, age) => ({
    name,
    age,
});
let user = {
    name: "seok",
    age: 30,
    // hello: function () {
    hello: () => {
        // 화살표 함수를 사용하면 this가 바인딩 되지 않는다.
        // console.log(this.name, this.age); // 확장자를 js 에서 mjs 로 변경하면 this가 바라보는 곳이 전역이 아닌 다른곳으로 변경되어 mjs 로 실행시 error
    },
};

user.hello();

setTimeout(() => {
    console.log("2초 경과");
}, 2000);

console.log(`10 / 2 = ${divide(10, 2)}`);

/* 
    비구조화 할당
        - 객체나 배열의 값을 간결하게 할당할 수 있다.
            1) 객체는 변수 선언을 {} 안에 해주면 된다. => 객체의 키값과 동일하게 작성해야 된다.
            2) 배열은 [] 안에 순서대로 변수명을 작성하면 배열에 저장 된 인덱스에 따라 값이 할당된다.
                => 객체 비구조할당에 비해 변수명을 자유롭게 지울 수 있다. 키값 또한 알 필요가 없다.
*/
// let name = user.name;
// let age = user.age;
// let { name, age, height } = user;
// console.log(name, age, height);
let { name: userName, age, height } = user;
console.log(userName, age, height);

let arr = ["seok", 30, "apple", function () {}];
let [name02, age02, fruit, func] = arr;
console.log(name02, func);

/* 
    펼침 연산자(스프레드)
        1) 배열이나 객체의 값들을 나열하는 효과가 있다. => 기존값을 복사하고 새로운 값을 추가하는데 유용하다.
        2) 복사할 경우 참조값 복사가 값 자체를 하기 때문에 불변성 지킬 수 있다.
            => 객체가 중첩되는 경우 중첩된 객체는 참조 복사가 일어난다.
*/
let copy = user;
let copy02 = { ...user, done: true, name: "hwangbo" };

let copyArr = [1, ...arr, false]; // ["seok", 30, "apple", function () {}]
copy02.age = 31; // 객체는 참조값을 복사해온다.
console.log(user === copy);
console.log(user, copy02, user === copy02);

let numArr = [1, 2, 10, 5, 7];
// let max = Math.max(1, 2, 10, 5, 7);
let max = Math.max(...numArr);
console.log("max : ", max);

console.log(copyArr);
// console.log(PI);
console.log(PINUM);
console.log(getSum(1, 2));

console.log(math.PI);

/* 
    Promise
        - Promise는 비동기처리를 도와주는 객체. => 서버에서 데이터를 받아올 때.
        - Promise 생성자의 인자로 함수를 전달한다. => 그 함수에 두개의 함수가 전달된다.
            => resolve : 성공했을 때 실행할 함수. resolve 값을 Promise.prototype.then(콜백함수)의 콜백함수의 첫번째 인자로 전달된다.
            => reject : 실패했을 때 실행할 함수. reject 값을 에러 메세지로 전달한다. => Promise.prototype.catch(콜백함수)의 콜백함수의 첫번째 인자로 에러가 전달된다.
*/
let num04 = 10;
let promise = new Promise(function (resolve, reject) {
    if (num04 < 10) {
        reject("숫자가 10보다 작습니다.");
    }
    resolve(num04);
});

promise
    .then(function (res) {
        console.log(res);
    })
    .catch(function (err) {
        console.log(err);
    });

function getData(str) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(str);
        }, 2000);
    });
}

function getId(id) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(id);
        }, 2000);
    });
}

// Promise가 중첩되면 복잡해진다.
getData("자바스크립트")
    .then(function () {
        return getId(101);
    })
    .then(function (res) {
        console.log(res);
    })
    .catch(function (err) {
        console.log(err);
    });

/* 
    async/await
        - 함수 키워드 앞에 async를 붙인다.
        - await을 앞에 붙이면 resolve 될 때까지 다음 코드를 실행하지 않는다.
            => 비동기 코드를 동기처럼 순서를 제어하기 쉽다.
        - try/catch 문을 통해 에러를 처리할 수 있다.
        - Promise.all 등을 통해 병렬적으로 처리할 수 있다.
        - async 함수는 return 값을 resolve하는 Promise를 반환한다.
*/
async function fatchData() {
    try {
        // let data = await getData("JS");
        // let id = await getId(101);
        let result = Promise.all([getData("JS"), getId(101)]);
        // console.log(data, id);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

console.log(fatchData());

// 삼항 연산자 : 조건식 ? 참일 경우 : 거짓일 경우
let result02 = num04 < 10 ? "10보다 작음" : "10보다 크거나 같음";
console.log(result02);
// 단축 평가

// &&(and) : 앞의 값이 truthy한 값이라면 뒤에 값으로 평가되고, 앞의 값이 falsy한 값이라면 false로 평가된다.
let color = num04 < 10 && "red";
console.log("color : ", color);

// ||(or) : &&와 반대.
let str = "" || "안녕하세요";
console.log(str);

// ??(nullish) : ?? 앞이 null이나 undefined이면 ?? 뒤의 값을 평가하고 그 외의 값이면 앞의 값으로 평가된다.
//  => 값을 참조해봐서 있으면 그 값을 사용하고 없으면 대신할 값을 작성하면 된다.
let value = user.height ?? "할당 안됨";
console.log(value);

// 옵셔널 체이닝(?) : 참조한 객체의 값이 null이거나 undefined인 경우 뒤에 프로퍼티를 평가하지 않는다.
console.log(undefined?.age);
console.log(user.age?.height?.str);

// 배열 고차 함수
console.log(getData);
let userList = [
    { id: 1, name: "seok", age: 30 },
    { id: 2, name: "hwangbo", age: 32 },
    { id: 3, name: "misu", age: 43 },
    { id: 4, name: "minseok", age: 29 },
];

// Array.prototype.forEach() : 배열을 순회하며 각 값을 인자로 함수를 반복 실행한다.
userList.forEach((user) => {
    console.log(user.name);
});

// Array.prototype.filter() : 배열을 순회하며 각 값을 조건식에 따라 해당하는 요소만 배열로 모아서 반환한다(필터링)
//  => 콜백함수의 return 값이 true인 요소만 모아서 반환. 원본 배열을 변경 X.
let filterArr = userList.filter((user) => {
    return user.age >= 30;
});
console.log(filterArr);
// 짝수번째 요소만 모으기
/* let filterArr02 = userList.filter((user) => {
    return user.id % 2 == 0;
}); */
/* let filterArr02 = userList.filter((user, idx) => {
    return (idx + 1) % 2 == 0;
}); */
let filterArr02 = userList.filter((user, idx) => (idx + 1) % 2 == 0);
console.log(filterArr02);

// Array.prototype.map() : 배열을 순회하며 각 요소에 변형을 줄 때 사용.
// => 매 반복마다의 return 새로운 배열로 모아서 반환한다. 기본 배열 변경 X.
let mapArr = userList.map((user) => {
    return user.age;
});
console.log(mapArr);
// age 30 이상인 user의 name 프로퍼티만 배열로 모아서 반환하기
let nameArr = userList
    .filter((user) => user.age >= 30)
    .map((user) => user.name);
let count = userList.filter((user) => user.age >= 30).length;
console.log(nameArr);
console.log(count);

// Array.prototype.reduce() : 배열을 순회하며 누산을 할 대 사용한다.
//  => 콜백함수의 첫번째 인자로 누적되고 있는 값, 두번째 인자로는 순회중인 요소의 값이 전달된다.
let ageArr = userList.map((user) => user.age);
let totalAge = ageArr.reduce((acc, curr) => acc + curr, 100);
console.log(totalAge);

// rest문법 : 매개변수에 ...을 붙이면 전달된 인자가 몇개이던 배열로 모아준다.
// => 무조건 매개변수의 마지막에 사용해야 한다.
function getTotal(a, b, c, ...numList) {
    // arguments : 옛날방식. 유사배열
    return numList.reduce((acc, curr) => acc + curr);
}
console.log(getTotal(1, 2, 3, 4, 5, 6, 7, 8, 9, 0));
