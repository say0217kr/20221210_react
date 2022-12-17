import React from "react";
import { useContext } from "react";
import { RemoveContext } from "./Todos";

function TodoList({ todos, onToggle }) {
    // todo 리스트 출력(삭제, 토글)
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
            ))}
        </ul>
    );
}

function TodoItem({ todo, onToggle }) {
    const onRemove = useContext(RemoveContext);

    const { id, text, done } = todo;
    const handleRemove = () => {
        if (window.confirm("정말 삭제하시겠습니까?")) onRemove(id);
    };
    const handleToggle = () => {
        onToggle(id);
    };
    return (
        <li>
            <span
                style={{ textDecoration: done && "line-through" }}
                onClick={handleToggle}
            >
                {text}
            </span>
            <button onClick={handleRemove}>삭제</button>
        </li>
    );
}

export default React.memo(TodoList);
