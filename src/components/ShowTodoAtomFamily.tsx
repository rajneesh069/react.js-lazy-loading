import { useRecoilValue } from "recoil";
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
  const todo = useRecoilValue(todosAtoms(id));
  return (
    <div
      style={{
        border: "2px solid black",
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <p>{todo && todo.title}</p>
      <p> {todo && todo.description}</p>
    </div>
  );
}
