import React, { Fragment } from "react";
import GrayImg from "../../shared/gray_img/Gray_img";

const Planet = (props) => {
  const names = ["A", "B", "C", "D"];

  let title;
  if (props.title_with_underline) {
    title = (
      <h4>
        <u>{props.name}</u>
      </h4>
    );
  } else {
    title = <h4>{props.name}</h4>;
  }

  return (
    <div onClick={() => props.clickOnPlanet(props.name)}>
      {title}
      <p>{props.desc}</p>
      <a href={props.link} target="_blank">
        {props.desc_link_name}
      </a>
      <br />
      <GrayImg img_url={props.img_url} gray={props.gray} />

      <h4>Satélites:</h4>
      {names.map((n) => <li>Satélite{n}</li>)}
      <hr />
    </div>
  );
};

export default Planet;
