import React from "react";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" index element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
