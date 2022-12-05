import React from "react";
import { Link } from "react-router-dom";

import './navigation.styles.scss'


const NavLinks = () => {

  return (
    <div className="links">


      <Link className="nav-link" to="/shop">
        Home
      </Link>
      <Link className="nav-link" to="/shop">
        Destination
      </Link>
      <Link className="nav-link" to="/shop">
        Hotels
      </Link>
      <Link className="nav-link" to="/shop">
        Flights
      </Link>
      <Link className="nav-link" to="/shop">
        Rent a...
      </Link>
      <Link className="nav-link" to="/shop">
        Hot Deals
      </Link>
    </div>
  );
};

export default NavLinks;


