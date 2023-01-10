import React, { Fragment } from "react";
import GrayImg from "../../shared/gray_img/Gray_img";

async function getSatellites(id) {
  let response = await fetch(`http://localhost:3000/api/${id}.json`);

  let data = await response.json();
  return data;
}

class Planet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      satellites: [],
    };
  }

  componentDidMount() {
    getSatellites(this.props.id).then(data => {
      this.setState(state => ({
        satellites: data["satellites"]
      }))
    })
  }

  render() {
    return (
      <div>
        <h4>{this.props.name}</h4>
        <h4>Satélites</h4>
        <p>{this.props.desc}</p>
        <a href={this.props.link} target="_blank">
          {this.props.desc_link_name}
        </a>
        <br />
        <GrayImg img_url={this.props.img_url} />
        <h4>Satélites</h4>
        <ul>
          {
            this.state.satellites.map((satellite, index) =>
              <li key={index}>
                {satellite.name}
              </li>
            )
          }
        </ul>
        <hr />
      </div>
    );
  }
}

export default Planet;
