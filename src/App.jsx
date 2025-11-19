import "./App.css";
import Header from "./components/Header";
import Properties from "./components/Properties";
import SingleProperty from "./components/SingleProperty";
import { Routes, Route } from "react-router";
//import { useState } from "react";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Properties />} />
        <Route path="/property/:prop_id" element={<SingleProperty />} />
      </Routes>
    </>
  );
}

export default App;
