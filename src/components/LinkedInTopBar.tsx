import { useRecoilState, useRecoilValue } from "recoil";
import { notificationsAtom } from "../store/atoms/linkedInAtoms";
import { totalNotificationCountSelector } from "../store/selectors/linkedInSelectors";
import { useEffect } from "react";
import axios from "axios";

export default function LinkedInTopBar() {
  const [notificationsCount, setNotificationsCount] =
    useRecoilState(notificationsAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationCountSelector);

  useEffect(() => {
    async function main() {
      const response = await axios.get("http://localhost:8080/linkedin", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setNotificationsCount(response.data);
    }
    main();
  }, [setNotificationsCount]);

  return (
    <div style={{ padding: 2, display: "flex", gap: 2 }}>
      <button>Home </button>
      <button>
        My Network (
        {notificationsCount.network >= 100 ? "99+" : notificationsCount.network}
        )
      </button>
      <button>Jobs ({notificationsCount.jobs})</button>
      <button>Messaging ({notificationsCount.messaging})</button>
      <button>Notifications ({notificationsCount.notifications})</button>
      <button onClick={() => {}}>Me ({totalNotificationCount})</button>
    </div>
  );
}
