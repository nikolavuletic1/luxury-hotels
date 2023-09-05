import React from "react";
import { Link } from "react-router-dom";

import './navigation.styles.scss'


const NavLinks = () => {

  return (
    <div className="links-black">


      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/destinations">
        Destination
      </Link>
      <Link className="nav-link" to="/hotels">
        Hotels
      </Link>
      <Link className="nav-link" to="/flights">
        Flights
      </Link>
      <Link className="nav-link" to="/rent">
        Rent a...
      </Link>
      <Link className="nav-link" to="/hotdeals">
        Hot Deals
      </Link>
    </div>
  );
};

export default NavLinks;


