import axios from "axios";
import { atom, selector } from "recoil";

export interface notificationsState {
  network: number;
  jobs: number;
  messaging: number;
  notifications: number;
}

// export const notificationsAtom = atom<notificationsState>({
//   key: "notificationsAtom",
//   default: {
//     network: 0,
//     jobs: 0,
//     messaging: 0,
//     notifications: 0,
//   },
// });

export const notificationsAtom = atom<notificationsState>({
  key: "notificationsAtom",
  default: selector({
    key: "notificationsAtom/default",
    get: async () => {
      // const response = await axios.get("http://localhost:8080/linkedin", {
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });
      const response = await axios.get(
        "https://dummy-server-for-react-js-lazy-loading.onrender.com/linkedin",
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
