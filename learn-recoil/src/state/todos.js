import { atom, selector } from "recoil";

export const todosState = atom({
    key: "todos",
    default: [
        { id: 1, text: "TodoList 만들기", done: true },
        { id: 2, text: "Recoil 배우기", done: true },
    ],
});

export const unDoneCountState = selector({
    key: "unDoneCountState",
    get: ({ get }) => {
        const todos = get(todosState);
        return todos.filter((todo) => !todo.done).length;
    },
});

export const doneCountState = selector({
    key: "doneCountState",
    get: ({ get }) => get(todosState).length,
    },
});

export const filterState = atom({
    key: "filterState",
    default: "done",
});

export const filterTodosState = selector({
    key: "filterTodosState",
    get: ({ get }) => {
        const filter = get(filterState);
        const todos = get(todosState);

        switch (filter) {
            case "done":
                return todos.filter((todo) => todo.done);
            case "unDone":
                return todos.filter((todo) => !todo.done);

            default:
                break;
        }
    },
});
