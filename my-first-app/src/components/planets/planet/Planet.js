import React, { useState, useEffect } from "react";
import GrayImg from "../../shared/gray_img/Gray_img";

const Planet = (props) => {

  return (
    <div>
      <h4>{props.name}</h4>
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

