import ShowToDo from "./ShowToDo";
import TodoInput from "./TodoInput";

export default function Todo() {
  return (
    <main
      style={{
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "center",
        // alignContent: "center",
        // alignItems: "center",
        // height: "100%",
        gap: 5,
      }}
    >
      <TodoInput />
      <br />
      <ShowToDo />
    </main>
  );
}
