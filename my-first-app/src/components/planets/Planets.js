import React, { Fragment } from "react";
import Planet from "./planet/Planet";

const clickOnPlanet = (name) => {
  alert(`Ùm click no planeta ${name}`);
};

class Planets extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      planets: [
        {
          name: "Mercurio",
          desc: "Mercurio, formalmente designado 134340 Plutão (símbolos: ⯓ e ♇) é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. Originalmente classificado como um planeta, Plutão é atualmente o maior membro conhecido do cinturão de Kuiper,[11] uma região de corpos além da órbita de Netuno. ",
          link: "https://pt.wikipedia.org/wiki/Plut%C3%A3o",
          desc_link_name: "saiba mais",
          img_url:
            "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTFFRKg1XEC7kNu58XVZi9vPh6F9ii0FhevCdEAUKyMEtSdx4HLLLNBMacXXX0Y0gLv",
          alt: "Mercurio",
        },
        {
          name: "Plutão",
          desc: "Plutão, formalmente designado 134340 Plutão (símbolos: ⯓ e ♇) é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. Originalmente classificado como um planeta, Plutão é atualmente o maior membro conhecido do cinturão de Kuiper,[11] uma região de corpos além da órbita de Netuno. ",
          link: "https://pt.wikipedia.org/wiki/Plut%C3%A3o",
          desc_link_name: "saiba mais",
          img_url:
            "https://upload.wikimedia.org/wikipedia/commons/e/ef/Pluto_in_True_Color_-_High-Res.jpg",
          alt: "Mercurio",
        },
      ],
    };
  }

  render() {
    return (
      <Fragment>
        <h3>Planet list</h3>
        <button>Click Here</button>
        <hr />

        {this.state.planets.map((planet) => 
        
          <Planet
            name={planet.name}
            desc={planet.desc}
            link={planet.link}
            desc_link_name={planet.desc_link_name}
            img_url={planet.img_url}
            alt={planet.alt}
          />
        )}

      </Fragment>
    );
  }
}

export default Planets;
