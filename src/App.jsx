import { useState, useRef } from "react";
import Home from "./Components/home";
import Datos from "./Components/Datos";
import Glosario from "./Components/Glosario";
import Practics from "./Components/Practics";
import Codearse from './Components/practica2'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <nav className="navbar">
          <div className="navbar-logo">
            <h1>Glossary</h1>
          </div>
          <ul className="navbar-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Glosario">info</Link>
            </li>
            <li>
              <Link to="/practice2">Prueba Practica</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/Glosario" element={<Glosario />} />
          <Route path="/practice" element={<Practics />} />
          <Route path="/Datos" element={<Datos />} />
          <Route path="/practice2" element={<Codearse />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
