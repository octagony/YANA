import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/App";
import EditNote from "./pages/EditNote.jsx";
import Header from "./components/Header";
import Page404 from "./pages/Page404";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element=<App /> />
        <Route path="/edit-note/:id" element=<EditNote /> />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
