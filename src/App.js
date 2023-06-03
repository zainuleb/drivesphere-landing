import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import FormSuccessPage from "./pages/FormSuccessPage";
import FormPage from "./pages/FormPage";
import ReactGA from "react-ga";
import PrivacyPolicy from "./component/privacyPolicy/PrivacyPolicy";

function App() {
  const trackingId = "G-2DJ0PLQ6PP"; // Replace with your Google Analytics tracking ID
  ReactGA.initialize(trackingId);
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/signUp" element={<FormPage />} />
      <Route path="/success" element={<FormSuccessPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
}

export default App;
