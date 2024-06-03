import { useContext } from "react";
import { CountContext } from "./CounterContext";

export default function ShowCount() {
  const { count } = useContext(CountContext);
  return <div>{count}</div>;
}
