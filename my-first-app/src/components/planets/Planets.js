import React, { Fragment } from "react";
import Planet from "./planet/Planet";

const clickOnPlanet = (name) => {
  alert(`Ùm click no planeta ${name}`);
}

const Planets = () => {
  return (
    <Fragment>
      <h3>Planet list</h3>
      <button>Click Here</button>
      <hr />
      <Planet
        name="Mercurio"

        link="https://pt.wikipedia.org/wiki/Plut%C3%A3o"

        desc_link_name="saiba mais"

        img_url="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTFFRKg1XEC7kNu58XVZi9vPh6F9ii0FhevCdEAUKyMEtSdx4HLLLNBMacXXX0Y0gLv"
        alt="Mercurio"
        clickOnPlanet={clickOnPlanet}

        title_with_underline={true}

      />

      <Planet 
        name="Plutão"
        desc="Plutão, formalmente designado 134340 Plutão (símbolos: ⯓ e ♇) é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. Originalmente classificado como um planeta, Plutão é atualmente o maior membro conhecido do cinturão de Kuiper,[11] uma região de corpos além da órbita de Netuno. "


        img_url="https://upload.wikimedia.org/wikipedia/commons/e/ef/Pluto_in_True_Color_-_High-Res.jpg"
        clickOnPlanet={clickOnPlanet}

        gray={true}
      />
      
    </Fragment>
  );
};

export default Planets;
