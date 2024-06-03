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
        padding: 3,
      }}
    >
      <p>This is the Appbar.</p>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Dashboard
      </button>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Landing
      </button>
    </div>
  );
}
