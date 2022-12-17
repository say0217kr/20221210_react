import { useReducer } from "react";
import { useInputs } from "../hooks/useInputs";

// 리듀서 함수 : 액션의 값에 따라 상태를 관리하는 함수
/* function reducer(state, action) {
    switch (action.type) {
        case "CHANGE_INPUT":
            return { ...state, [action.name]: action.value };
        default:
            return state;
    }
} */

function Inputs() {
    // useReducer(리듀서 함수, 초기값) : [상태값, 디스패치 함수] 반환.
    // 디스패치 함수 : 액션을 발생시키는 함수
    const [state, dispatch] = useInputs({
        email: "",
        name: "",
    });
    const { name, email } = state;
    console.log(state);

    const handleInputs = (e) => {
        console.log(e.target);
        const { name, value } = e.target;
        dispatch({ type: "CHANGE_INPUT", name, value });
    };
    return (
        <div>
            <p>
                입력값 : {name} ({email})
            </p>
            <input type="text" onChange={handleInputs} name="name" />
            <input type="text" onChange={handleInputs} name="email" />
        </div>
    );
}

export default Inputs;
