import { atom, atomFamily, selectorFamily } from "recoil";
import axios from "axios";

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
//separate atom is needed because in case of an array of todos if one element changes
//the whole atom will refresh triggering the re-render of every todo while
//in case of atomFamily only that piece will re-render as they have separate atoms!
// export const todosAtoms = atomFamily({
//   key: "todosAtoms",
//   default: (id) => {
//     return TODOS.find((todo) => todo.id === id);
//   },
// });

export const todosAtoms = atomFamily({
  key: "todosAtoms",
  default: selectorFamily({
    key: "todoAtoms/default",
    get: (id) => async () => {
      const response = await axios.get(
        `http://localhost:8080/todo?id=${String(id)}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    },
  }),
});
