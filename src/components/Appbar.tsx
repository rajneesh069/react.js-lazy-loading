import { useNavigate } from "react-router-dom";

export default function Appbar() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        background: "black",
        color: "white",
        display: "flex",
        gap: 5,
        justifyContent: "center",
        padding: 1,
      }}
    >
      <p>This is the Appbar.</p>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Landing
      </button>

      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Dashboard
      </button>

      <button
        onClick={() => {
          navigate("/counter");
        }}
      >
        Counter
      </button>

      <button
        onClick={() => {
          navigate("/todo");
        }}
      >
        To Do
      </button>

      <button
        onClick={() => {
          navigate("/linkedin");
        }}
      >
        LinkedIn
      </button>
    </div>
  );
}
