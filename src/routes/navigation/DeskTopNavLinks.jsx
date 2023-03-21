import React from "react";
import "./navigation.styles.scss";
import NavLinks from "./NavLinks";


const DeskTopNavLinks = (props) => {
  return (
    <div className="left-navbar-container desktop links">
      <NavLinks />
    </div>
  );
};

export default DeskTopNavLinks;
