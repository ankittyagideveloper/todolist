import React from "react";
import ProgressiveImage from "./ProgressiveImage";
import largeImg from "./Assets/largeImg.jpg";
import tinyImg from "./Assets/tinyImg.jpg";
import "./App.css";
import Todo from "./component/Todo";
import Navbar from "./component/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Analysis from "./component/Analysis";

function App() {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Navbar />
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Todo />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/analysis" element={<Analysis />} />
      </Routes>
    </div>
  );
}

export default App;
