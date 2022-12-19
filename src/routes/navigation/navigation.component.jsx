import { Fragment } from "react";
import { Link } from "react-router-dom";

import "../../mixins.scss";
import "./navigation.styles.scss";
// import HomePage1 from './HomePage1.jpg'
import HomePage2 from './pexels-pok-rie-1655166.jpg'
import HomePage3 from './pexels-pixabay-33545.jpg'
import HomePage4 from './pexels-sebastian-arie-voortman-165505.jpg'
 

import React from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";

// import required modules
import { Pagination } from "swiper";

import DeskTopNavLinks from "./DeskTopNavLinks";
import MobileNavLinks from "./MobileNaigation";


const NavigationBar = () => {
  return (
    <Fragment>
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
          <div className="header">
            <h6>THE ULTIMATE LUXURY EXPERIANCE</h6>
            <h1>
              Book Your Summer <br />
              Hollidays With Hotel
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod porta labore et dolore magna aliqua. Aliquam malesuada
              bibendum arcu vitae interdum. Egestas quis ipsum suspendisse
              ultrices gravida dictum. Malesuada proin quam.
            </p>
            <button className="header-button pusle">TAKE A TOUR</button>
          </div>
        </div>

        <>
          <div className="swiper-container">
            <Swiper
              pagination={{
                clickable: true,
              }}
              slidesPerView={1}
              modules={[Pagination]}
              className="mySwiper custommySwiper"
            >
              <SwiperSlide className="swiper-slide-navigation">
                <img
                  className="swiper-slide-image"
                  src={HomePage2}
                  alt="home"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide-navigation">
                <img
                  className="swiper-slide-image"
                  src={HomePage3}
                  alt="home"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide-navigation">
                <img
                  className="swiper-slide-image"
                  src={HomePage4}
                  alt="home"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </>

      </div>
    </Fragment>
  );
};

export default NavigationBar;
