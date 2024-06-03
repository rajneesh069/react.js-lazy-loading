import { useState } from "react";
import CounterButtons from "./CounterButtons";

export default function Counter() {
  const [count, setCount] = useState<number>(0);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100%",
        alignItems: "center",
        alignContent: "center",
        flexDirection: "column",
        gap: 10,
        border: "2px solid black",
      }}
    >
      {count}
      <div>
        <CounterButtons count={count} setCount = {setCount}/>
      </div>
    </div>
  );
}
