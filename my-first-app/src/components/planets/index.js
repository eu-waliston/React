import React, { Fragment } from "react";
import Planet from "./planet";
const Planets = () => {
  return (
    <Fragment>
      <h3>Planet list</h3>
      <hr />
      <Planet
        name="Mercurio"

        description="   Mercúrio é o menor planeta do Sistema Solar e o mais próximo do Sol. Sua órbita ao redor do Sol leva 87,97 dias terrestres, o mais curto de todos os planetas do Sol. É nomeado após o deus romano Mercurius, deus do comércio, mensageiro dos deuses e mediador entre deuses e mortais, correspondendo ao deus grego Hermes."

        img_url="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTFFRKg1XEC7kNu58XVZi9vPh6F9ii0FhevCdEAUKyMEtSdx4HLLLNBMacXXX0Y0gLv"
        alt="Mercurio"
      />

      
    </Fragment>
  );
};

export default Planets;
