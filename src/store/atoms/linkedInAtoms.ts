import { atom } from "recoil";

export interface notificationsState {
  network: number;
  jobs: number;
  messaging: number;
  notifications: number;
}

export const notificationsAtom = atom<notificationsState>({
  key: "notificationsAtom",
  default: {
    network: 0,
    jobs: 0,
    messaging: 0,
    notifications: 0,
  },
});
