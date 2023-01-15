import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RecoilRoot } from "recoil";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { todosReducer, todosReducer02 } from "./state/todos_redux";
import { counterReducer, counterReducer02 } from "./state/counter";

import counterReducer03 from "./state/counter";
import todosReducer03 from "./state/todos_redux";

import "./utill/lang";

// const store = createStore(counterReducer);
const store = configureStore({
    reducer: { counter: counterReducer03, todos: todosReducer03 },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    /* Recoil 및 Redux 예제 */
    <Provider store={store}>
        <RecoilRoot>
            <App />
        </RecoilRoot>
    </Provider>
);
