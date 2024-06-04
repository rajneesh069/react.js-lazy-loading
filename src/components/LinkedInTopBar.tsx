import { useRecoilValue } from "recoil";
import { notificationsAtom } from "../store/atoms/linkedInAtoms";
import { totalNotificationCountSelector } from "../store/selectors/linkedInSelectors";

export default function LinkedInTopBar() {
  const notificationsCount = useRecoilValue(notificationsAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationCountSelector);

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
