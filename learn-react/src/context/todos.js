import { createContext, useContext, useReducer } from "react";

const initState = [
    { id: 1, text: "React 배우기", done: true },
    { id: 2, text: "React TodoList 만들기", done: false },
    { id: 3, text: "React TodoList 꾸미기", done: false },
];

function reducer(state, action) {
    switch (action.type) {
        case "CREATE_TODO":
            return [
                ...state,
                { id: action.id, text: action.text, done: false },
            ];
        case "REMOVE_TODO":
            return state.filter((todo) => todo.id !== action.id);
        case "TOGGLE_TODO":
            return state.map((todo) =>
                todo.id === action.id ? { ...todo, done: !todo.done } : todo
            );
        default:
            return state;
    }
}

export const StateTodos = createContext(null);
export const StateDispatch = createContext(null);

export function TodoProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initState);
    return (
        <StateTodos.Provider value={state}>
            <StateDispatch.Provider value={dispatch}>
                {children}
            </StateDispatch.Provider>
        </StateTodos.Provider>
    );
}

export function useTodoState() {
    const context = useContext(StateTodos);
    if (!context) throw new Error("TodoProvider 없음");
    return context;
}

export function useTodoDispatch() {
    const context = useContext(StateDispatch);
    if (!context) throw new Error("DispatchProvider 없음");
    return context;
}
