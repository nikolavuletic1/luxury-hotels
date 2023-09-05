import React from "react";
import {Link } from "react-router-dom";

import "../footer/footer.styles.scss";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import {  FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn} from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer-main-wrapper">
    <div className="footer-container-wrapper">
      <div className="footer-first-container">
        <div className="footer-first-container-logo ">
          <img
            src="https://i.postimg.cc/VLZHQ80Z/luxlogo.png"
            className="footer-logo-container"
            alt="logo"
          />
          <h2 className="first-container-logo-title">Logo</h2>
        </div>
        <div className="footer-first-container-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Fermentum leo vel orci porta non pulvinar neque. Nec tincidunt
            praesent semper feugiat nibh. Eu volutpat odio facilisis mauris sit
          </p>
        </div>
        <div className="footer-first-container-social-icons">
          <Link className="btn" to="/shop">
            <FaFacebookF />
          </Link>
          <Link className="btn" to="/shop">
            <FaTwitter />
          </Link>
          <Link className="btn" to="/shop">
            <FaYoutube />
          </Link>
          <Link className="btn" to="/shop">
            <FaInstagram />
          </Link>
          <Link className="btn" to="/shop">
            <FaLinkedinIn />
          </Link>

        </div>
        </div>
      
        <div className="footer-second-container"> 
        <div className="footer-second-container-title"><h2>Services</h2></div>
        <div className="footer-second-container-first-links-container"> 
        <ul >
       <Link className="" to="/restaurant-bar">
    <li className="plus">Restaurant & Bar</li>
  </Link>
  <Link className="" to="/coctail-party-houses">
<li className="plus">Coctail Party Houses</li>
</Link>
<Link className="" to="/marriage-partyl">
<li className="plus">Marriage Party</li>
</Link>
<Link className="" to="/tour-consultancy">
<li className="plus">Tour Consultancy</li>
</Link>
<Link className="" to="/restaurant">
<li className="plus">Restaurant</li>
</Link>
 </ul>
 </div>

 <div className="footer-second-container-second-links-container">
 <ul> 
<Link className="" to="/swimming-pool">
<li className="plus">Swimming Pool</li>
</Link>
<Link className="" to="/conference-room">
<li className="plus">Conference Room</li>
</Link>
<Link className="" to="/gaming-zone">
<li className="plus">Gaming Zone</li>
</Link>
<Link className="" to="/party-planning">
<li className="plus">Party Planning</li>
</Link>
</ul>
 </div>
 </div>

<div className="footer-third-container">
 <div className="footer-third-container-title"><h2>Contact Us</h2></div>
<div className="footer-third-container-links-container">
{/* <div className="ul1"> */}
 <ul>

<Link className="links-text" to="/coctail-party-houses">
<div className="first-links-text">
<li className="phonecall">Phone Number<br/>+381 123 456 </li>
</div>
</Link>


 <Link className="links-text" to="/coctail-party-houses">
 <div className="second-links-text">
<li className="mail">Email Adress<br/>info@webmail.com</li>
</div>
</Link>

<Link className="links-text" to="/marriage-partyl">
<div className="third-links-text">
<li className="location">Email Adress<br/>info@webmail.com </li>
</div>
</Link>


</ul>

</div>

</div>
   
  
    </div>
    <div className="footer-black-overlay">
    <h3 className="copyright"> &copy; 2023 All rights reserved</h3>
    <h3 className="terms"> Terms of use | Privacy Environmental Policy</h3>
    </div>
    </div>

  );
};

export default Footer;