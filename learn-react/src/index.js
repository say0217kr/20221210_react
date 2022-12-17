import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
/* import Todos from "./components/todos/Todos"; */
import Main from "./components/mainPage/Main";
import Inputs from "./components/Inputs";
import Todos from "./components/todoReducer/Todos";
import Styled from "./components/Styled";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    /* React.StrictMode는 개발모드에만 영향, 웹 개발자모드의 콘솔에서 2번 나오는 원인. */
    /* <React.StrictMode>
        <App />
    </React.StrictMode> */

    /* <App /> */
    <Todos />
    /* <Main /> */
    /* <Inputs /> */
    /* <Styled /> */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
