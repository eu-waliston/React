import React, { Fragment } from "react";
import GrayImg from "../../shared/gray_img";

const Planet = (props) => {
  let title;
  if(props.title_with_underline) {
    title = <h4><u>{props.name}</u></h4>  
  } else {
    title =  <h4>{props.name}</h4>
  }

  return (
    <div onClick={() => props.clickOnPlanet(props.name)}>
      {title}
      <p>{props.desc}</p>
      <a href={props.link} target="_blank">{props.desc_link_name}</a>
      <br />
      <GrayImg img_url={props.img_url} gray={props.gray}/>
    </div>
  );
};

export default Planet;
