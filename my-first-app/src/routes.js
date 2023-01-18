import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PlanetsScrren from "./screens/planets";
import PlanetScreen from './screens/planet';

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<PlanetsScrren />} />
            <Route exact path="/planet" element={<PlanetScreen />} />
        </Routes>
    </BrowserRouter>
)

export default Rotas;