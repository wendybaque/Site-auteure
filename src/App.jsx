import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Accueil from "./pages/Accueil";


function App() {
  return (
    <div className="App">
            <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<Accueil />} />
            {/* <Route path="*" element={<Page404 />} /> */}
          </Routes>
        </Router>
      <Footer />
    </div>
  );
}

export default App;

