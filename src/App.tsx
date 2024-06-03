import { BrowserRouter, Route,Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
const Dashboard = lazy(() => import("./components/Dashboard"));
const Landing = lazy(() => import("./components/Landing"));
import Appbar from "./components/Appbar";
import Loading from "./components/Loading";
import Counter from "./components/Counter";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route
            element={
              <Suspense fallback={<Loading />}>
                <Dashboard />
              </Suspense>
            }
            path="/dashboard"
          />
          <Route
            element={
              <Suspense fallback={<Loading />}>
                <Landing />
              </Suspense>
            }
            path="/"
          />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
