import "./App.css";
import TodoBody from "./component/TodoBody";
import TodoHeader from "./component/TodoHeader";
import TodoInput from "./component/TodoInput";

function App() {
    return (
        <div>
            <TodoHeader />
            <TodoInput />
            <TodoBody />
        </div>
    );
}

export default App;
