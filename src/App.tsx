import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Landing from "./components/Landing";
import Appbar from "./components/Appbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route element={<Dashboard />} path="/dashboard" />
          <Route element={<Landing />} path="/" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
