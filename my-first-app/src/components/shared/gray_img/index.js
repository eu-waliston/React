import Ract from "react";
import "./index.css";

const GrayImg = (props) => {
  return (
    <img
      className={props.gray ? 'mercurio' : 'color__img'}
      src={props.img_url}
    />
  );
};

export default GrayImg;
