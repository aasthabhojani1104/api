import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/layout";
import Card from "./pages/Card";
import Home from "./pages/Home";
import FacultyDetail from "./pages/FacultyDetail";
import InsertDetail from "./pages/InsertDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/Card" element={<Card />} />
        <Route path="/Card/:id" element={<FacultyDetail />} />
        <Route path="/Card/InsertDetail" element={<InsertDetail />} />
        <Route path="/Card/InsertDetail/:id" element={<InsertDetail />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
