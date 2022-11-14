import React from "react";
import About from "../../Components/Body/About";
import Social from "../../Components/Body/Social";
import { Routes, Route } from "react-router-dom";
import PageHome from "../Home/PageHome";
import PageAbout from "../About/PageAbout";

const MainBody = (props) => {
  const setIndex = (event) => {
    props.onClickCategory(event);
  };
  return (
    <>
      <section>
        <img
          src={require("../../assets/black-bg.jpg")}
          alt=""
          className="main-img"
          style={{ height: 1000, width: 1500 }}
        />
        <img
          src={require("../../assets/zags.png")}
          alt=""
          className="main-img1"
        />
        <img
          src={require("../../assets/zigs.png")}
          alt=""
          className="main-img2"
        />

        <section className="main-body">
          <Social></Social>

          <Routes>
            <Route path="/about" element={<PageAbout />} />
          </Routes>
        </section>

        <About> </About>
      </section>
      <img
        src={require("../../assets/wire.png")}
        alt=""
        className="main-image"
        style={{ height: 250, width: 1500 }}
      />
    </>
  );
};

export default MainBody;
