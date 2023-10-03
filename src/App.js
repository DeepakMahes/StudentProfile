import React from "react";
import Table from "./components/Table";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
function App() {
  return (
    <div className="d-flex">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/table" element={<Table></Table>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
