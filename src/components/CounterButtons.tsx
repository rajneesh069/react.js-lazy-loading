// import { useContext } from "react";
// import { CountContext } from "./CounterContext";

import { useSetRecoilState } from "recoil";
import { countAtom } from "../store/atoms/countAtom";

export default function CounterButtons() {
  // const {setCount} = useContext(CountContext);
  const setCount = useSetRecoilState(countAtom);  
  return (
    <div style={{ display: "flex", gap: 3 }}>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}
