import React from "react";
import "./index.css";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PremierLeague from "./pages/PremierLeague";
import LaLiga from "./pages/LaLiga";
import Bundesliga from "./pages/Bundesliga";
import SerieA from "./pages/SerieA";
import Ligue1 from "./pages/Ligue1";
import Championship from "./pages/Championship";
 
const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/premier-league" element={<PremierLeague />} />
        <Route path="/la-liga" element={<LaLiga />} />
        <Route path="/bundesliga" element={<Bundesliga />} />
        <Route path="/serie-a" element={<SerieA />} />
        <Route path="/ligue-1" element={<Ligue1 />} />
        <Route path="/championship" element={<Championship />} />
        
      </Routes>
    </Layout>
  );
};

export default App;
