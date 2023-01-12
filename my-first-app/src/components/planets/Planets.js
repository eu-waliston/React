import React, { Fragment, useState } from "react";
import Planet from "./planet/Planet";

async function getPlanets() {
  let response = await fetch("http://localhost:3000/api/planets.json");

  let data = await response.json();
  console.log(":)");
  return data;
}

/*
componentDidMount() {
  getPlanets().then((data) => {
    setState((state) => ({
      planets: data["planets"],
    }));
  });
}
*/

const Planets = () => {
  const [planets, setPlanets] = useState([
    {
      id: "mars",
      name: "Mars",
      desc: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. In English, Mars carries a name of the Roman god of war and is often referred to as the 'Red Planet'.",
      img_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/220px-OSIRIS_Mars_true_color.jpg",
      link: "saiba +",
      desc_link_name: "https://en.wikipedia.org/wiki/Mars",
    },
  ]);

  const removeLast = () => {
    let new_planets = [...planets];
    new_planets.pop();
    setPlanets(new_planets);
  };

  const duplicateLast = () => {
    let last_planet = planets[planets.length - 1];
    setPlanets([...planets, last_planet]);
  };

  return (
    <Fragment>
      <h3>Planet list</h3>
      <button onClick={removeLast}>Remove Last</button>
      <button onClick={duplicateLast}>ADD + 1</button>
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
