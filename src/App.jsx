import "./App.css";
import Header from "./components/Header";
import Properties from "./components/Properties";
import { Routes, Route } from "react-router";
//import { useState } from "react";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Properties />} />
      </Routes>
    </>
  );
}

export default App;
