import React from "react";
import { useState } from "react";
import {GrMenu} from "react-icons/gr";
import {GrClose} from "react-icons/gr";
import NavLinks from './NavLinks' 
import "./navigation.styles.scss";


const MobileNavLinks = () => {
    const [open, SetOpen] = useState (false);
    const hamburgerICon= <GrMenu className="hamburger-menu" 
                          size='1.5rem' onClick={() => SetOpen(!open)} />
    const closeICon= <GrClose className="hamburger-menu" 
                      size='1.5rem' onClick={() => SetOpen(!open)} />
  return (
    <div className="mobile">
      {open && <NavLinks />}
      {open ? closeICon : hamburgerICon}
    </div>
  );
};

export default MobileNavLinks;
