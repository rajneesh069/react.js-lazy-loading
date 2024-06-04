import { useRecoilValueLoadable } from "recoil";
import { todosAtoms } from "../store/atoms/todoAtom";

export default function ShowToDoAtomFamily() {
  return (
    <div
      style={{
        marginTop: 3,
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={2} /> {/*  {same atoms are created} */}
    </div>
  );
}

function Todo({ id }: { id: number }) {
  const todo = useRecoilValueLoadable(todosAtoms(id)); //this makes async more proper
  if (todo.state === "hasValue") {
    return (
      <div
        style={{
          border: "2px solid black",
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <p>{todo && todo.contents.title}</p>
        <p> {todo && todo.contents.description}</p>
      </div>
    );
  } else {
    return (
      <div
        style={{
          border: "2px solid black",
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        Loading
      </div>
    );
  }
}
