import { atom } from "recoil";

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
