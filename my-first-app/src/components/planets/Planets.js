import React, { Fragment, useState, useEffect } from "react";
import Planet from "./planet/Planet";
import NewPlanet from "../../components/planet/forms/NewPlanet";

async function getPlanets() {
  let response = await fetch("http://localhost:3000/api/planets.json");
  let data = await response.json();
  return data;
}

const Planets = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    getPlanets().then((data) => {
      setPlanets(data["planets"])
    });
  }, [])

  
  const removeLast = () => {
    let new_planets = [...planets];
    new_planets.pop();
    setPlanets(new_planets);
  };

  const duplicateLast = () => {
    let last_planet = planets[planets.length - 1];
    setPlanets([...planets, last_planet]);
  };

  const addPlanet = (new_planets) => {
    setPlanets([...planets, new_planets])
  }

  return (
    <Fragment>
      <h3>Planet list</h3>
      <button onClick={removeLast}>Remove Last</button>
      <button onClick={duplicateLast}>ADD + 1</button>
      <hr />
      <NewPlanet addPlanet={addPlanet}/>
      <hr />

      {planets.map((planet, index) => (
        <Planet
          id={planet.id}
          name={planet.name}
          desc={planet.desc}
          link={planet.link}
          desc_link_name={planet.desc_link_name}
          img_url={planet.img_url}
          alt={planet.alt}
          key={index}
        />
      ))}
    </Fragment>
  );
};

export default Planets;
