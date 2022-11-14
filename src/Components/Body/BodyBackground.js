import React from "react";
import bodybackground from "../../assets/body-background.jpg";
import "./BodyBackground.css";

const BodyBackground = (props) => {
  return (
    <BodyBackground className="main-body">
      <img className="body-background" src={bodybackground} alt="" />
    </BodyBackground>
  );
};

export default BodyBackground;
