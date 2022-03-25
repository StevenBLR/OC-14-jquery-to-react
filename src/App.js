import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEmployee from "./pages/CreateEmployee";
import Employees from "./pages/Employees";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateEmployee />}></Route>
          <Route path="/employees" element={<Employees />}></Route>
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;
