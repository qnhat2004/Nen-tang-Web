import React from "react";
import Home from "./components/Home";
import Form from "./components/Form";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/form.html" element={<Form />} />
        <Route path="*" element={<p>Path not resolved</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
