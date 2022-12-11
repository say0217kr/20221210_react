/* import React, { useState, useEffect } from "react"; */
/* import Hello from "./components/Hello"; */
/* import Counter from "./components/Counter"; */
/* import Todoinput from "./components/Todoinput"; */
import Todo from "./components/Todo";
import "./App.css";

function App() {
    /* Hello.jsx 용 */
    /* const name = "seok";
    const style = {
        color: "red",
        backgroundColor: "black",
    }; */
    // return (
    <>
        {/* Hello.jsx 용 */}
        {/* <Hello text="Seok" active={false} />
            <Hello color="red" active /> */}
        {/* 조건부 렌더링 */}
        {/* {true && <Hello />}
            <p style={style} className="content">
                안녕하세요 {name}
            </p> */}

        {/* Counter.jsx 용 */}
        {/* <Counter /> */}

        {/* Todoinput.jsx 용 */}
        {/* <Todoinput /> */}
    </>;
    // );

    /*  */
    /* const [count, setCount] = useState(0);
    const [input, setInput] = useState("");
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        // 렌더링이 일어날 때마다 실행되는 코드
        console.log("렌더링");
    });
    useEffect(() => {
        // []안의 값에 변화가 있을 때에만 실행된다.
        console.log("count : ", count);
    }, [count]);
    useEffect(() => {
        console.log("input : ", input);
    }, [input]);

    const handleCount = () => {
        setCount(count + 1);
    };
    const handleInput = (e) => {
        setInput(e.target.value);
    };
    const handleToogle = () => {
        setToggle(!toggle);
    };
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={handleCount}>+1</button>
            <div>
                <input type="text" onChange={handleInput} value={input} />
                <p>{input}</p>
            </div>
            <button onClick={handleToogle}>Toggle Hello Component</button>
            {toggle && <Hello />}

            <Todoinput />
        </div>
    ); */

    return <Todo />;
}

export default App;
