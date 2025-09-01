import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Fetch from "./Components/Fetch"; // 👈 your component

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Fetch />} />
    </Routes>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
