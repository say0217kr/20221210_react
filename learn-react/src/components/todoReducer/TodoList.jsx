import TodoItem from "./TodoItem";
import { useTodoState } from "../../context/todos";

function TodoList() {
    const todos = useTodoState();

    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
}

export default TodoList;
