import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import FormSuccessPage from "./pages/FormSuccessPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/success" element={<FormSuccessPage />} />
    </Routes>
  );
}

export default App;
