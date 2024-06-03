import { useNavigate } from "react-router-dom";

export default function Appbar() {
  const navigate = useNavigate();
  return (
    <div style={{ background: "black", color: "white" }}>
      This is the Appbar.
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
