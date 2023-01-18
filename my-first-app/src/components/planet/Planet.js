import React, { useState, useEffect } from "react";
import GrayImg from "../shared/gray_img/Gray_img";
import NewSatellites from "../../components/planet/forms/NewSatellites";

import { useParams } from 'react-router-dom'

async function getPlanet(id) {
  let response = await fetch(`http://localhost:3000/api/${id}.json`);

  let data = await response.json();
  return data;
}

const Planet = () => {
  const [satellites, setSatelites] = useState([]);
  const [planet , setPlanet] = useState({});
  let { id } = useParams();

  useEffect(() => {
    getPlanet(id).then((data) => {
      setSatelites(data["satellites"]);
      setPlanet(data["data"]);
    });
  }, []);

  const addSatellite = (new_satellite) => {
    setSatelites([...satellites, new_satellite])
  }

  return (
    <div>
      <h4>{planet.name}</h4>
      <p>{planet.description}</p>
      <a href={planet.link} target="_blank" rel="noreferrer">
        {planet.link}
      </a>
      <br />
      <GrayImg img_url={planet.img_url} />
      <h4>Satélites</h4>
      <ul>
        {satellites.map((satellite, index) => (
          <li key={index}>{satellite.name}</li>
        ))}
      </ul>
      <hr />
      <NewSatellites addSatellite={addSatellite}/>
    </div>
  );
};

export default Planet;

