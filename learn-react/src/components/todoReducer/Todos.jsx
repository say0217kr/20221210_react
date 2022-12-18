import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";
import { TodoProvider } from "../../context/todos";
// useReducer로 투두리스트 상태관리해보기

function Todos() {
    return (
        <TodoProvider>
            <div>
                <h1 className="title">할일 목록</h1>
                <TodoCreate />
                <TodoList />
            </div>
        </TodoProvider>
    );
}

export default Todos;
