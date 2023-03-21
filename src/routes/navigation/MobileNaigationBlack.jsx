import React from "react";
import { useState } from "react";
import {GrMenu} from "react-icons/gr";
import {GrClose} from "react-icons/gr";
import NavLinksBlack from './NavLinksBlack' 
import "./navigation.styles.scss";
import './NavigationBarBlack.styles.scss'


const MobileNavLinks = () => {
    const [open, SetOpen] = useState (false);
    const hamburgerICon= <GrMenu className="hamburger-menu-black" 
                          size='1.5rem' onClick={() => SetOpen(!open)} />
    const closeICon= <GrClose className="hamburger-menu-black" 
                      size='1.5rem'  onClick={() => SetOpen(!open)} />
  return (
    <div className="mobile-black">
      {open && <NavLinksBlack />}
      {open ? closeICon : hamburgerICon}
    </div>
  );
};

export default MobileNavLinks;
