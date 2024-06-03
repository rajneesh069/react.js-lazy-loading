import { atom } from "recoil";

export const notificationCountAtom = atom({
  key: "notificationCountAtom",
  default: 12,
});

export const networkCountAtom = atom({
  key: "networkCountAtom",
  default: 102,
});

export const messageCountAtom = atom({
  key: "messageCountAtom",
  default: 0,
});

export const jobCountAtom = atom({
  key: "jobCountAtom",
  default: 0,
});
