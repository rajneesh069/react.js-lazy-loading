import { selector } from "recoil";
import { notificationsAtom } from "../atoms/linkedInAtoms";

export const totalNotificationCountSelector = selector({
  key: "totalNotificationCountSelector",
  get: ({ get }) => {
    const { jobs, messaging, network, notifications } = get(notificationsAtom);
    return jobs + messaging + network + notifications;
  },
});
