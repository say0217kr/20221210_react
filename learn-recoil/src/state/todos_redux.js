import {
    createAction,
    createReducer,
    createSelector,
    createSlice,
} from "@reduxjs/toolkit";

// action의 타입 정의
export const CREATE_TODO = "todos/create";
export const TOGGLE_TODO = "todos/toggle";
export const REMOVE_TODO = "todos/remove";

// action을 리턴하는 함수 정의
export const createTodo = (id, text) => {
    return {
        type: CREATE_TODO,
        id: id,
        text: text,
    };
};
export const toggleTodo = (id) => {
    return { type: TOGGLE_TODO, id: id };
};
export const removeTodo = (id) => ({ type: REMOVE_TODO, id: id });

// selector => 상태값들 중 특정 값을 고르거나 연산해서 리턴
export const getDoneCount = (state) => state.todos.length;
export const getUnDoneCount = (state) =>
    state.todos.filter((todo) => !todo.done).length;

// @reduxjs/toolkit 제공하는 createSelector를 사용하면 같은 값이 들어왔을 때 연산하지 않는다 => 성능 향상에 도움이 된다.
export const getUndoneCount2 = createSelector(
    (state) => state.todos,
    (todos) => todos.filter((todo) => !todo.done).length
);
export const getPercentage = createSelector(
    (state) => state.todos.length,
    getUnDoneCount,
    (totalCount, unDoneCount) => Math.floor((unDoneCount / totalCount) * 100)
);

export const initialState = [
    { id: 1, text: "TodoList 만들기", done: true },
    { id: 2, text: "Recoil 배우기", done: false },
];

export function todosReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_TODO:
            return state.concat({
                id: action.id,
                text: action.text,
                done: false,
            });

        case TOGGLE_TODO:
            return state.map((todo) =>
                todo.id === action.id ? { ...todo, done: !todo.done } : todo
            );

        case REMOVE_TODO:
            return state.filter((todo) => todo.id !== action.id);

        default:
            return state;
    }
}

// 액션 생성
export const createTodoAction = createAction("todos/createTodo");
export const toggleTodoAction = createAction("todos/toggleTodo");
export const removeTodoAction = createAction("todos/removeTodo");

// 리듀서 생성
export const todosReducer02 = createReducer(initialState, (builder) =>
    builder
        .addCase(createTodoAction, (state, action) => {
            // 기존 상태값이 직접 변경되면 return X => mutable
            const { id, input } = action.payload;
            state.unshift({ id, text: input, done: false });
        })
        .addCase(toggleTodoAction, (state, action) => {
            return state.map((todo) =>
                todo.id === action.payload
                    ? { ...todo, done: !todo.done }
                    : todo
            );
        })
        .addCase(removeTodoAction, (state, action) => {
            // 기존 상태값이 유지되면 return 값이 최신 상태값이 된다. => imutable(불변)
            return state.filter((todo) => todo.id !== action.payload);
        })
);

//
const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        crtTd(state, action) {
            const { id, input } = action.payload;
            state.unshift({ id, text: input, done: false });
        },
        togTd(state, action) {
            return state.map((todo) =>
                todo.id === action.payload
                    ? { ...todo, done: !todo.done }
                    : todo
            );
        },
        remTd(state, action) {
            return state.filter((todo) => todo.id !== action.payload);
        },
    },
});

export const { crtTd, togTd, remTd } = todosSlice.actions;
export default todosSlice.reducer;
