import React from "react";
import { Link } from "react-router-dom";
import data from "../Data/Data";
const SubNav = (props) => {
  console.log(props.onMouse);
  const categoryHandler = (event, key) => {
    props.oncategoryHandler(key);
  };
  return (
    <div onClick={props.Ctselect}>
      {data.map((ct, key) => {
        return (
          <Link
            to={"/products/" + ct.category}
            className="vanish"
            onClick={(event) => categoryHandler(event, key)}
            key={key}
          >
            {" "}
            {ct.category}
          </Link>
        );
      })}
    </div>
  );
};

export default SubNav;
