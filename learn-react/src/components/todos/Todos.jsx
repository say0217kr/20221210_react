import { useState } from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import { useCallback } from "react";
import { createContext } from "react";

const initialState = [
    { id: 1, text: "usestate 배우기", done: true },
    { id: 2, text: "todo 리스트 만들기", done: false },
];

export const RemoveContext = createContext(null);

function Todos() {
    // 상태 관리
    const [todos, setTodos] = useState(initialState);
    const nextId = useState(3);
    // useCallback을 통해 재생성 방지. => 함수형 업데이트를 사용하면 디펜던시를 없앨 수 있다.
    const onCreate = useCallback((text) => {
        setTodos((todos) => [
            ...todos,
            { id: nextId.current, text, done: false },
        ]);
        nextId.current++;
    }, []);
    const onRemove = useCallback((id) => {
        setTodos((todos) => todos.filter((todo) => todo.id !== id));
    }, []);
    const onToggle = useCallback((id) => {
        setTodos((todos) =>
            todos.map((todo) =>
                todo.id === id ? { ...todo, done: !todo.done } : todo
            )
        );
    }, []);
    return (
        <RemoveContext.Provider value={onRemove}>
            <div>
                <TodoInput onCreate={onCreate} />
                <TodoList todos={todos} onToggle={onToggle} />
            </div>
        </RemoveContext.Provider>
    );
}

export default Todos;
