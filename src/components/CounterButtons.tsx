import { useContext } from "react";
import { CountContext } from "./CounterContext";

export default function CounterButtons() {
  const {setCount} = useContext(CountContext);
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
