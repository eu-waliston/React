import React, { Fragment } from "react";
import GrayImg from "../../shared/gray_img/Gray_img";

const Planet = (props) => {

  return (
    <div onClick={() => props.clickOnPlanet(props.name)}>
      <h4>{props.name}</h4>
      <p>{props.desc}</p>
      <a href={props.link} target="_blank">
        {props.desc_link_name}
      </a>
      <br />
      <GrayImg img_url={props.img_url}/>
    </div>
  );
};

export default Planet;
