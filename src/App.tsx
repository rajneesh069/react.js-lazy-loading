import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
const Dashboard = lazy(() => import("./components/Dashboard"));
const Landing = lazy(() => import("./components/Landing"));
import Appbar from "./components/Appbar";
import Loading from "./components/Loading";
import Counter from "./components/Counter";
// import { CountContext } from "./components/CounterContext";
import { RecoilRoot } from "recoil";
import Todo from "./components/Todo";
import LinkedInTopBar from "./components/LinkedInTopBar";
import ShowToDoAtomFamily from "./components/ShowTodoAtomFamily";

function App() {
  // const [count, setCount] = useState<number>(0);
  return (
    <div>
      <RecoilRoot>
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
            <Route
              path="/counter"
              element={
                <div>
                  {/* <CountContext.Provider value={{ count, setCount }}> */}
                  <Counter />
                  {/* </CountContext.Provider> */}
                </div>
              }
            />
            <Route element={<Todo />} path="/todo" />
            <Route
              element={
                <Suspense fallback={<Loading />}>
                  <LinkedInTopBar />
                </Suspense>
              }
              path="/linkedin"
            />
            <Route element={<ShowToDoAtomFamily />} path="/atomFamily" />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
