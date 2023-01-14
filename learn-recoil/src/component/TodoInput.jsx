import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todosState } from "../state/todos";

function TodoInput() {
    const setTodos = useSetRecoilState(todosState);
    const [input, setInput] = useState("");

    const handleCreate = () => {
        setTodos((todos) => [...todos, { id: 4, text: input, done: false }]);
    };
    return (
        <div>
            <input type="text" onChange={(e) => setInput(e.target.value)} />
            <button onClick={handleCreate}>등록</button>
        </div>
    );
}

export default TodoInput;
