import React, { Fragment } from "react";
import Planet from "./planet/Planet";

async function getPlanets() {
  let response = await fetch("http://localhost:3000/api/planets.json");

  let data = await response.json();
  return data;
}

class Planets extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      planets: [],
    };
  }

  componentDidMount() {
    getPlanets().then((data) => {
      this.setState((state) => ({
        planets: data["planets"],
      }));
    });
  }

  removeLast = () => {
    let new_planets = [...this.state.planets];
    new_planets.pop();
    this.setState((state) => ({
      planets: new_planets,
    }));
  };

  duplicateLast = () => {
    let last_planet = this.state.planets[this.state.planets.length - 1];
    this.setState((state) => ({
      planets: [...this.state.planets, last_planet],
    }));
  };

  render() {
    return (
      <Fragment>
        <h3>Planet list</h3>
        <button onClick={this.removeLast}>Remove Last</button>
        <button onClick={this.duplicateLast}>ADD + 1</button>
        <hr />

        {this.state.planets.map((planet, index) => (
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
  }
}

export default Planets;
