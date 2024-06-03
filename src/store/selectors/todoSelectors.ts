import { selector } from "recoil";
import { searchTodoAtom, todo, todoAtom } from "../atoms/todoAtom";

export const todos = selector<todo[]>({
  key: "todos",
  get: ({ get }) => {
    const state = get(todoAtom);
    return state;
  },
});

export const toDo = selector<todo[]>({
  key: "toDo",
  get: ({ get }) => {
    const todos = get(todoAtom);
    const requiredTodoTitle = get(searchTodoAtom);
    return todos.filter(
      (todo) => requiredTodoTitle && todo.title.includes(requiredTodoTitle)
    );
  },
});
