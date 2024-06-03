// import { useContext } from "react";
// import { CountContext } from "./CounterContext";

import { useRecoilValue } from "recoil";
// import { countAtom } from "../store/atoms/countAtom";
import { countSelector, evenSelector } from "../store/selectors/countSelector";

export default function ShowCount() {
  // const { count } = useContext(CountContext);
  const count = useRecoilValue(countSelector);
  // const count = useRecoilValue(countAtom);
  const isEven = useRecoilValue(evenSelector);
  return (
    <div style={{ display: "flex", gap: 4 }}>
      <p>{count}</p>
      <p>{!isEven ? "This is even" : null}</p>
    </div>
  );
}
