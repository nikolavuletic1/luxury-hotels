import { React, useState, useRef, useEffect } from 'react'
import '../hotels/hotels.scss'

import '../destinations/destinations.scss'
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import * as tt from "@tomtom-international/web-sdk-maps";



const HowToGetThere = () => {

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

      <div className="how-to-get-there-container">

        <div className="how-to-get-there-item-1">
          <div className="hotels-text">
            <div className="how-to-get-there-title">Other Title Here</div>
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

        <div className="how-to-get-there-item-2">
          <div className="hotels-text">
            <div className="how-to-get-there-title">Other Title Here</div>
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

        <div className="how-to-get-there-item-3">
          <div className="hotels-text">
            <div className="how-to-get-there-title">Other Title Here</div>
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
        <div className='how-to-get-there-item-4'>
          {/* <div className="mapContainer"> */}
          {/* <h4>Map Controls</h4> */}
          <div ref={mapElement} className="mapDiv" />
          {/* </div> */}
        </div>
      </div>









    </>
  )
}

export default HowToGetThere;