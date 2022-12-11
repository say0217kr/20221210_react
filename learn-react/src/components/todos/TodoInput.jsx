import React from "react";
import { useRef } from "react";
import { useState } from "react";

function TodoInput({ onCreate }) {
    // todo 생성 => 입력값 관리
    const [input, setInput] = useState("");

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    const inputRef = useRef();

    const handleSubmit = () => {
        onCreate(input);
        setInput("");
        inputRef.current.focus();
    };
    return (
        <div>
            <input
                type="text"
                onChange={handleInput}
                value={input}
                ref={inputRef}
            />
            <button onClick={handleSubmit}>등록</button>
        </div>
    );
}

export default React.memo(TodoInput);
