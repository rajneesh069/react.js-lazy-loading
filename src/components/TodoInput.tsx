import { useState } from "react";
import { searchTodoAtom, todo, todoAtom } from "../store/atoms/todoAtom";
import { useSetRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";

export default function TodoInput() {
  const [inputVal, setInputVal] = useState<todo>({
    title: "",
    description: "",
    id: null,
  });
  const findTodo = useSetRecoilState(searchTodoAtom);
  const setTodos = useSetRecoilState(todoAtom);
  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
        height: "100%",
        gap: 5,
        marginTop: 10,
        border: "2px solid black",
        padding: 5,
      }}
    >
      <div style={{ alignSelf: "flex-start" }}>
        <input
          style={{ marginRight: 2 }}
          placeholder="Search Todo By Title"
          onChange={(event) => {
            const { value } = event.target;
            findTodo(value);
          }}
        />
      </div>
      <input
        placeholder="title"
        onChange={(event) => {
          const { value } = event.target;
          setInputVal({
            ...inputVal,
            title: value,
            id: uuidv4(),
          });
        }}
        value={inputVal.title}
      />
      <input
        placeholder="description"
        onChange={(event) => {
          const { value } = event.target;
          setInputVal({
            ...inputVal,
            description: value,
          });
        }}
        value={inputVal.description}
      />
      <button
        disabled={!inputVal.id}
        onClick={() => {
          if (inputVal.id !== null) setTodos((todos) => [...todos, inputVal]);
          setInputVal({
            title: "",
            description: "",
            id: null,
          });
        }}
      >
        Save
      </button>
    </div>
  );
}
