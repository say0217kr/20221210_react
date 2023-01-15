import { useSelector } from "react-redux";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { filterState, filterTodosState } from "../state/todos";
import TodoItem from "./TodoItem";

function TodoBody() {
    // const todos = useRecoilValue(filterTodosState);
    // const setFilterState = useSetRecoilState(filterState);

    const todos = useSelector((state) => state.todos);
    return (
        <div>
            {/* <label htmlFor="done">
                <input
                    type="radio"
                    name="done"
                    id="done"
                    value="done"
                    onChange={(e) => setFilterState(e.target.value)}
                >
                    done
                </input>
            </label>
            <label htmlFor="unDone">
                <input
                    type="radio"
                    name="done"
                    id="unDone"
                    value="unDone"
                    onChange={(e) => setFilterState(e.target.value)}
                >
                    unDone
                </input>
            </label> */}
            <ul>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
        </div>
    );
}

export default TodoBody;
