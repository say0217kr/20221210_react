import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useSetRecoilState } from "recoil";
import { todosState } from "../state/todos";
import {
    createTodo,
    createTodoAction,
    CREATE_TODO,
    crtTd,
} from "../state/todos_redux";

function TodoInput() {
    const setTodos = useSetRecoilState(todosState);
    const [input, setInput] = useState("");

    const dispatch = useDispatch();

    const nextId = useRef(3);

    const handleCreate = () => {
        // setTodos((todos) => [
        //     ...todos,
        //     { id: todos.length + 1, text: input, done: false },
        // ]);

        // dispatch(createTodo(nextId.current, input));
        // dispatch(createTodoAction({ id: nextId.current, input }));
        dispatch(crtTd({ id: nextId.current, input }));
        nextId.current++;
    };
    return (
        <div>
            <input type="text" onChange={(e) => setInput(e.target.value)} />
            <button onClick={handleCreate}>등록</button>
        </div>
    );
}

export default TodoInput;
