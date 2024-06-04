import { atom, atomFamily } from "recoil";
import { TODOS } from "../../components/Todos";

export interface todo {
  id: string | null;
  title: string;
  description: string;
}

export const todoAtom = atom<todo[]>({
  key: "todoAtom",
  default: [],
});

export const searchTodoAtom = atom<todo["title"]>({
  key: "searchTodoAtom",
  default: "",
});

//atom family
export const todosAtoms = atomFamily({
  key: "todosAtoms",
  default: (id) => {
    return TODOS.find((todo) => todo.id === id);
  },
});
