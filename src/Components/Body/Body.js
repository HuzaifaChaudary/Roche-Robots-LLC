import React from "react";
import About from "../../Components/Body/About";
import Social from "../../Components/Body/Social";
import { Routes, Route } from "react-router-dom";
import PageAbout from "../About/PageAbout";

const Body = (props) => {
  return (
    <section>
      <img src={require("../../assets/new.jpg")} alt="" className="main-img" />
      <section className="main-body">
        <Social></Social>
        <Routes>
          <Route path="/about" element={<PageAbout />} />
        </Routes>
      </section>
      <About></About>
    </section>
  );
};

export default Body;
