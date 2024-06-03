import { useRecoilState, useRecoilValue } from "recoil";
import { toDo, todos } from "../store/selectors/todoSelectors";
import { todo, todoAtom } from "../store/atoms/todoAtom";

export default function ShowToDo() {
  const allToDos: todo[] = useRecoilValue(todos);
  const searchedTodos: todo[] = useRecoilValue(toDo);
  return (
    <div style={{ border: "3px solid red", padding: 5 }}>
      {searchedTodos.length !== 0
        ? searchedTodos.map((todo) => (
            <TodoCard key={todo.id} id={todo.id} todo={todo} />
          ))
        : allToDos.map((todo) => (
            <TodoCard key={todo.id} todo={todo} id={todo.id} />
          ))}
    </div>
  );
}

function TodoCard({ id, todo }: { id: string | null; todo: todo }) {
  const [todos, setTodos] = useRecoilState(todoAtom);
  return (
    <div
      style={{
        display: "flex",
        marginBottom: 4,
        flexDirection: "column",
        border: "2px solid lightblue",
        gap: 2,
      }}
    >
      <p>id : {id}</p>
      <p>title : {todo.title}</p> <p> description : {todo.description}</p>
      <button
        onClick={() => {
          setTodos(todos.filter((todo) => todo.id !== id));
        }}
      >
        Delete ToDo
      </button>
    </div>
  );
}
