import React, { useState, useEffect } from "react";
import GrayImg from "../../shared/gray_img/Gray_img";

import { Link } from "react-router-dom";

const Planet = (props) => {

  return (
    <div>
      <Link to={`/planet/${props.id}`} ><h4>{props.name}</h4></Link>
      
      <p>{props.desc}</p>
      <a href={props.link} target="_blank" rel="noreferrer">
        {props.desc_link_name}
      </a>
      <br />
      <GrayImg img_url={props.img_url} />
      
    </div>
  );
};

export default Planet;

