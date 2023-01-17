import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PlanetsScrren from "./screens/planets";

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<PlanetsScrren />} />
        </Routes>
    </BrowserRouter>
)

export default Rotas;