import "../../mixins.scss";
import "./NavigationBarBlack.styles.scss";

import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

import DeskTopNavLinks from "./DeskTopNavLinks";
import MobileNavLinksBlack from "./MobileNaigationBlack";




const NavBar = () => {
  return (
    <>
 
      <div className="wrapper">
        <div className="container-black">

        <div className="logo-container-black">
            <img src="https://i.postimg.cc/VLZHQ80Z/luxlogo.png" alt="logo" />
            <span>since 1994</span>
          </div>
          
          <div className="left-navbar-container-black dekstop" >
 
           <DeskTopNavLinks />
            <MobileNavLinksBlack   />
          </div>

         

          <div className="right-navbar-container">
            <div className="phone-number-container">
              <FaPhoneSquareAlt />
              <Link className="nav-link-black" to="/shop">
                Phone Number
                <br />
                +381 63 123 456
              </Link>
            </div>

            <div className="mail-container">
              <FaEnvelope />
              <Link className="nav-link-black" to="/shop">
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
