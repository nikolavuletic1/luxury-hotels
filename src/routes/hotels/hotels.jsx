import { React } from "react";
import NavigationBarBlack from "../navigation/NavigationBarBlack";
import HotelsNavigation from '../navigation/HotelsNavigation';
import Footer from "../../components/footer/footer.component";
import Panorama2 from '../../assets/ny-panorama.jpg'
import '../hotels/hotels.scss'
import '../destinations/destinations.scss'


import { Outlet } from "react-router";


const Hotels = () => {


  return (
    <>
      <div className="hotels-main-wrapper">
        <div className="destination-header">
          {" "}
          <NavigationBarBlack />
        </div>

        <div className="hotels-panorama">
          <img className="" src={Panorama2} alt="panorama" />
          <div className="destinations-title">
            {" "}
            <h1>Hotels</h1>
          </div>
        </div>

        <HotelsNavigation />
        <Outlet />

        <Footer />

      </div>
    </>
  )
}

export default Hotels