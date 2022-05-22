import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Accueil from "./pages/Accueil";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

