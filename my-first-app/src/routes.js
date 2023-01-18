import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PlanetsScrren from "./screens/planets";
import PlanetScreen from './screens/planet';
import NotFound from "./screens/NotFound";

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<PlanetsScrren />} />
            <Route exact path="/planet/:id" element={<PlanetScreen />} />
            <Route path="*" element={ <NotFound />}/>
        </Routes>
    </BrowserRouter>
)

export default Rotas;