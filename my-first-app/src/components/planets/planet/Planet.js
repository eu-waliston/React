import React, { useState, useEffect } from "react";
import GrayImg from "../../shared/gray_img/Gray_img";

async function getSatellites(id) {
  let response = await fetch(`http://localhost:3000/api/${id}.json`);

  let data = await response.json();
  return data;
}

const Planet = (props) => {
  const [satellites, setSatelites] = useState([]);

  useEffect(() => {
    getSatellites(props.id).then((data) => {
      setSatelites(data["satellites"]);
    });
  }, [props.id]);

  return (
    <div>
      <h4>{props.name}</h4>
      <h4>Satélites</h4>
      <p>{props.desc}</p>
      <a href={props.link} target="_blank" rel="noreferrer">
        {props.desc_link_name}
      </a>
      <br />
      <GrayImg img_url={props.img_url} />
      <h4>Satélites</h4>
      <ul>
        {satellites.map((satellite, index) => (
          <li key={index}>{satellite.name}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
};

export default Planet;

