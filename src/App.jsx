import React from "react";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./components/footer";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/contact" index element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
