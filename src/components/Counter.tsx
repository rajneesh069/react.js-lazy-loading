import CounterButtons from "./CounterButtons";
import ShowCount from "./ShowCount";

export default function Counter() {
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
      <ShowCount />
      <CounterButtons />
    </div>
  );
}
