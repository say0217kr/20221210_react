import { useSetRecoilState } from "recoil";
import { todosState } from "../state/todos";

function TodoItem({ todo }) {
    const { id, text, done } = todo;
    const setTodos = useSetRecoilState(todosState);

    const handleDelete = () => {
        setTodos((todos) => todos.filter((todo) => todo.id !== id));
    };

    const handleToggle = () => {
        setTodos((todos) =>
            todos.map((todo) => (todo.id === id ? [...todo, !todo.done] : todo))
        );
    };
    return (
        <li
            style={{ textDecoration: done && "line-through" }}
            onClick={handleToggle}
        >
            {text}
            <button onClick={handleDelete}>삭제</button>
        </li>
    );
}

export default TodoItem;
