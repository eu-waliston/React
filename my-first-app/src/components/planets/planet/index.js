import React, {Fragment} from "react";
import './index.css'

const Planet = () => {
  return (
    <div>
        <h4>Mercurio</h4>
        <p>
        Mercúrio é o menor planeta do Sistema Solar e o mais próximo do Sol. Sua órbita ao redor do Sol leva 87,97 dias terrestres, o mais curto de todos os planetas do Sol. É nomeado após o deus romano Mercurius, deus do comércio, mensageiro dos deuses e mediador entre deuses e mortais, correspondendo ao deus grego Hermes.
        </p>
        <img className="mercurio" src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTFFRKg1XEC7kNu58XVZi9vPh6F9ii0FhevCdEAUKyMEtSdx4HLLLNBMacXXX0Y0gLv" alt="Mercurio"/>
    </div>
  );
};

export default Planet;
