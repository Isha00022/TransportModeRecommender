import React from "react";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Page1 />} />
      <Route path="/Page2" element={<Page2/>} />
    </Routes>
  );
};

export default App;
