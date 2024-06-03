import { selector } from "recoil";
import { countAtom } from "../atoms/countAtom";

export const countSelector = selector({
  key: "countSelector",
  get: ({ get }) => {
    const state = get(countAtom);
    return state;
  },
});

export const evenSelector = selector({
  key: "evenSelector",
  get: ({ get }) => {
    const state = get(countAtom);
    return state % 2;
  },
});
