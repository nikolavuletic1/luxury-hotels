import "../../mixins.scss";
import "./navigation.styles.scss";

import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

import DeskTopNavLinks from "./DeskTopNavLinks";
import MobileNavLinks from "./MobileNaigation";

const NavBar = () => {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="left-navbar-container">
            <DeskTopNavLinks />
            <MobileNavLinks />
          </div>

          <div className="logo-container">
            <img src="https://i.postimg.cc/VLZHQ80Z/luxlogo.png" alt="logo" />
            <span>since 1994</span>
          </div>

          <div className="right-navbar-container">
            <div className="phone-number-container">
              <FaPhoneSquareAlt size="1.5em" color="white" />
              <Link className="nav-link" to="/shop">
                Phone Number
                <br />
                +381 63 123 456
              </Link>
            </div>

            <div className="mail-container">
              <FaEnvelope size="1.5em" color="white" />
              <Link className="nav-link" to="/shop">
                Email
                <br />
                infoweb@webmail.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
