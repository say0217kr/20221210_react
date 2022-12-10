/* 
    import(가져오기)와 export(내보내기)
        1) 확장자 .mjs여야 한다.
        2) export되는 값들은 사용하고자 하는 mjs 파일에서 import {export값} from "경로" 형태로 사용한다. => as 키워드를 통해서 식별자를 바꿀 수 있다.
        3) export deFault은 하나만 가능하다. import 식별자 from "경로" => 식별자를 자유롭게 짓는 장점이 있다.
        4) 모듈은 별개의 유효범위를 가지게 되기 때문에 캡슐화를 할 수 있다.
        
*/
export const PI = 3.141592;

export function getSum(a, b) {
    return a + b;
}

let obj = {
    PI,
    getSum,
};

export default obj;
