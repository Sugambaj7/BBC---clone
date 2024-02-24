import React from "react";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./page/Home";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
