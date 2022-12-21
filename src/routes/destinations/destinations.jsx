import React from "react";
import Footer from "../../components/footer/footer.component";
import NavigationBar1 from "../navigation/NavigationBar";
import "./destinations.scss";
import Panorama1 from "./pexels-pixabay-356830.jpg";
import { FaList } from "react-icons/fa";



import {FiGrid} from "react-icons/fi";

const Destinations = () => {
  return (
    <>
      <div className="destination-header">
        {" "}
        <NavigationBar1 />
      </div>
      <div className="panorama">
      <img className="" src={Panorama1} alt="panorama" />
      <div className="destinations-title"> <h1>Destination</h1></div>
      </div>
      <div className="list-grid-buttons-container">
        <button className="list-grid-button"> <FaList /> </button>
        <button className="list-grid-button"><FiGrid /></button>
      </div>
      <Footer />
    </>
  );
};

export default Destinations;
