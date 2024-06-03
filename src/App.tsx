import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Landing from "./components/Landing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Dashboard />} path="/dashboard" />
          <Route element={<Landing />} path="/" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
