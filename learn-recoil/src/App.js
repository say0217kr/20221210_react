import "./App.css";
import Counter from "./component/Counter";
import Main from "./component/Main";
import TodoBody from "./component/TodoBody";
import TodoHeader from "./component/TodoHeader";
import TodoInput from "./component/TodoInput";

function App() {
    return (
        <div>
            <TodoHeader />
            <TodoInput />
            <TodoBody />

            <Counter />

            <Main />
        </div>
    );
}

export default App;
