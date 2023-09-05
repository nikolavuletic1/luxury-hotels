import { React, useState, useEffect, useRef } from "react";
import NavigationBarBlack from "../navigation/NavigationBarBlack";
import HotelsNavigation from '../navigation/HotelsNavigation';
import Footer from "../../components/footer/footer.component";
import Panorama2 from '../../assets/ny-panorama.jpg'
import '../hotels/hotels.scss'

import '../destinations/destinations.scss'

import "@tomtom-international/web-sdk-maps/dist/maps.css";
import * as tt from "@tomtom-international/web-sdk-maps";
import { Outlet } from "react-router";


const Hotels = () => {

  const mapElement = useRef();
  const [mapLongitude, setMapLongitude] = useState(-118.243683);
  const [mapLatitude, setMapLatitude] = useState(34.052235);
  const [mapZoom, setMapZoom] = useState(10);
  const [map, setMap] = useState({});

  const updateMap = () => {
    map.setCenter([parseFloat(mapLongitude), parseFloat(mapLatitude)]);
    map.setZoom(mapZoom);
  };

  useEffect(() => {
    let map = tt.map({
      key: process.env.REACT_APP_TOMTOM_MAP_KEY,
      container: mapElement.current,
      center: [mapLongitude, mapLatitude],
      zoom: mapZoom
    });
    setMap(map);
    return () => map.remove();
  }, [mapLatitude, mapLongitude, mapZoom]);

  return (
    <>
      {/* <div className="hotels-main-wrapper"> */}
      <div className="destination-header">
        {" "}
        <NavigationBarBlack />
      </div>

      <div className="panorama">
        <img className="" src={Panorama2} alt="panorama" />
        <div className="destinations-title">
          {" "}
          <h1>Hotels</h1>
        </div>
      </div>
      {/* <div className='hotels-content-container'> */}
      <HotelsNavigation />
      <Outlet />

      <div className="hotels-content-item-1">
        <div className="hotels-content-title">At The Hotel</div>
        <div className="hotels-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip eiusmod tempor incididunt ut laboredo eiusmod
            tempor incididuntminim veniam, quis nostrud exercitation ullamco
            quis nostrud exercitation laboris ut dolor sit amet.
          </p>
        </div>
      </div>
      <div className="hotels-content-item-2">
        <div className="hotels-content-title">Our Favourite Rooms</div>
        <div className="hotels-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip eiusmod tempor incididunt ut laboredo eiusmod
            tempor incididuntminim veniam, quis nostrud exercitation ullamco
            quis nostrud exercitation laboris ut dolor sit amet.
          </p>
        </div>
      </div>
      <div className='hotels-content-item-3'>
        <img className="hotels-picture" src={Panorama2} alt="panorama" />
      </div>
      <div className="hotels-content-item-4">
        <div className="hotels-content-title">Other Title Here</div>
        <div className="hotels-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip eiusmod tempor incididunt ut laboredo eiusmod
            tempor incididuntminim veniam, quis nostrud exercitation ullamco
            quis nostrud exercitation laboris ut dolor sit amet.
          </p>
        </div>
      </div>
      <div className="hotels-content-item-5">
        <div className="hotels-content-title">Other Title Here</div>
        <div className="hotels-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip eiusmod tempor incididunt ut laboredo eiusmod
            tempor incididuntminim veniam, quis nostrud exercitation ullamco
            quis nostrud exercitation laboris ut dolor sit amet. <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip eiusmod tempor incididunt ut laboredo eiusmod
            tempor incididuntminim veniam, quis nostrud exercitation ullamco
            quis nostrud exercitation laboris ut dolor sit amet.
          </p>
        </div>
      </div>
      <div className='hotels-content-item-6'>
        {/* <div className="mapContainer"> */}
        {/* <h4>Map Controls</h4> */}
        <div ref={mapElement} className="mapDiv" />
        {/* </div> */}
      </div>

      {/* </div> */}

      {/* <Outlet /> */}
      <Footer />

      {/* </div> */}
    </>
  )
}

export default Hotels