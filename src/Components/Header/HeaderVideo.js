import React from "react";
import playButton from "../../assets/playbtn.png";
import pauseButton from "../../assets/pausebtn.png";
import muteButton from "../../assets/mutebtn.png";
import "./HeaderVideo.css";
import HomeVideo from "../Home/HomeVideo";
import { Route, Routes } from "react-router-dom";
import AboutVideo from "./AboutVideo";
import ContactVideo from "./ContactVideo";
import ServiceVideo from "../Service/ServiceVideo";
import DemoVideo from "../Demonstration/DemoVideo";

const HeaderVideo = (props) => {
  const playHandler = () => {
    document.getElementById("headerVideo").play();
  };
  const pauseHandler = () => {
    document.getElementById("headerVideo").pause();
  };

  const muteHandler = () => {
    document.getElementById("headerVideo").muted =
      !document.getElementById("headerVideo").muted;
  };

  return (
    <div>
      <div className="container-fluid video">
        <div className="menu">
          <input type="checkbox" name="" id="menu-toggler" />
          <label htmlFor="menu-toggler">
            <i className="fa-solid fa-plus"></i>
          </label>
          <ul>
            <li id="play" onClick={playHandler}>
              <img src={playButton} alt="" />
            </li>
            <li id="pause" onClick={pauseHandler}>
              <img src={pauseButton} alt="" />
            </li>
            <li id="mute" onClick={muteHandler}>
              <img src={muteButton} alt="" />
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<HomeVideo />} />
          <Route path="/about" element={<AboutVideo />} />
          <Route path="/services" element={<ServiceVideo />} />
          <Route path="/demonstration" element={<DemoVideo />} />
          <Route path="/contact" element={<ContactVideo />} />
        </Routes>
      </div>
    </div>
  );
};

export default HeaderVideo;
