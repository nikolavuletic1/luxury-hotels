import React from "react";
import { useState, useEffect, useRef } from "react";
import Footer from "../../components/footer/footer.component";
import NavigationBarBlack from "../navigation/NavigationBarBlack";
import Spinner from '../../components/spiner/spiner'
import {GrFormPrevious, GrFormNext} from "react-icons/gr";

import "./destinations.scss";
import Panorama1 from "./pexels-pixabay-356830.jpg";
import { FaList } from "react-icons/fa";
import { FiGrid } from "react-icons/fi";
import { GrWifi } from "react-icons/gr";
import { GiBathtub } from "react-icons/gi";
import { FaUtensils } from "react-icons/fa";


// *********SWIPER IMPORTS***************
// import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// import { Navigation, EffectFade } from "swiper";
import { Navigation, Pagination } from "swiper";
// import { SwiperEvents } from "swiper/types/swiper-events";

import { GrStar } from "react-icons/gr";

import GetHotelsData from "../../api";

import DestinationSelectDropdown from "./selectDestinations";

// const options = [
//   { key: 1, value: "Test 1" },
//   { key: 2, value: "Test 2" },
//   { key: 3, value: "Test 3" },
//   { key: 4, value: "Test 4" },
// ];

// const hotels = [
//   { key: 1, name: "Hotel 1" },
//   { key: 2, name: "Hotel 2" },
//   { key: 3, name: "Hotel 3" },
//   { key: 4, name: "Hotel 4" },
//   // { key: 5, name: "Hotel 1" },
//   // { key: 6, name: "Hotel 2" },
//   // { key: 7, name: "Hotel 3" },
//   // { key: 8, name: "Hotel 4" },
// ];

const Destinations = (props) => {


  const [activeBtn, setActiveBtn] = useState(false);

  const [changeClassForGrid, setChangeClassForGrid] = useState(false);
  const [changeGridBtn, setChangeGridBtn] = useState(false);

  const [places, setPlaces] = useState([]);
  const [cords, setCords] = useState({
    latitude: "40.712776",
    longitude: "-74.005974",
  });

  function changeBtnToActive() {
    setActiveBtn((activeBtn) => !activeBtn);
  }

  function changeClassToGrid() {
    setChangeClassForGrid((changeClassForGrid) => !changeClassForGrid);
  }

  function changeGridBtnStyle() {
    setChangeGridBtn((changeGridBtn) => !changeGridBtn);
  }

  let toggleActiveBtn = activeBtn ? " btn-active" : " ";

  let toggleClassToGrid = changeClassForGrid ? " grid" : " ";
  let toggleGridBtn = changeGridBtn ? " btn-active2" : " ";

  const [loadingData, setLoadingData] = useState (false);

  useEffect(() => {
    // console.log(cords.latitude)
    setTimeout( setLoadingData,2500, true)
    // setLoadingData (true);
    GetHotelsData(cords.latitude, cords.longitude).then((data) => {
      // if  (data.place === 0) {

      setPlaces(data.filter((place) => place.name && place.num_reviews > 0));
      // console.log(data.name)
    // }
    });

  }, [cords]);


  const [swiper, setSwiper] = useState();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    if (swiper) {
      console.log("Swiper instance:", swiper);
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  return (

    <div className="destinations-main-wrapper">
      <div className="destination-header">
        {" "}
        <NavigationBarBlack />
      </div>
      <div className="panorama">
        <img className="" src={Panorama1} alt="panorama" />
        <div className="destinations-title">
          {" "}
          <h1>Destination</h1>
        </div>
      </div>
      <div className="destinations-content-wrapper">
        <div className="list-grid-buttons-container">
          <FaList
            onClick={() => {
              changeBtnToActive();
              changeClassToGrid();
              changeGridBtnStyle();
            }}
            type="button"
            className={`${toggleGridBtn} list-grid-icons list-grid-button`}
          />
          <FiGrid
            onClick={() => {
              changeBtnToActive();
              changeClassToGrid();
              changeGridBtnStyle();
            }}
            type="button"
            className={`${toggleActiveBtn}  list-grid-icons list-grid-button2`}
          />
        </div>
        <div className="destinations-content-container">
          <div className="destinations-content-title">Destination</div>
          <div className="destinations-text">
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

        <div className="sort-dropdown-button">
   
          <DestinationSelectDropdown onClick={(e) => setCords(e)} />
        </div>
     
        {/* <div className={`destinations-devide-container${toggleBacgroundColor}`}> */}
        {/*  */}

        <div className="destination-container">
        {!loadingData && <Spinner />}
        {/* {loadingData? <Spinner /> :} */}
          {places?.map((place, i) => (
            <div key={i} className={`item${toggleClassToGrid}`}>
              {/* <div className="item"> */}
              <div className="destinations-devide-left-container">
              
              <div className="swiper-button1 prev1" ref={prevRef}>
          <GrFormPrevious size="1.6em" color="white"/>
        </div>
        <div className="swiper-button1 next1" ref={nextRef}>
          <GrFormNext size="1.6em"  background= '#ff0000' />
        </div>

                <Swiper
                  onSwiper={setSwiper}
                  modules={[Navigation, Pagination]}
                  navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current
                  }}
                  pagination={{
                    type: "fraction",
                  }}
                  effect
                  speed={800}
                  slidesPerView={1}
                  loop
                  className="destinations-swiper mySwiper3 external-buttons"
                  onInit={(swiper) => {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }}
                >
     
                  <SwiperSlide>
                    <img
                      className="destinations-swiper-img"
                      src={
                        place.photo? place.photo.images.large.url : "https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      }
                      alt="destinations"
                    />
     
                  </SwiperSlide>
                  {/* <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="destinations"
          />
        </SwiperSlide> */}
                  <div className="destinations-swiper-gradient">
                    <div className="destinations-swiper-gradient-rating">
                      <p>TipAdvisor rating</p>
                      <GrStar className="star-rating-style" />
                      <GrStar className="star-rating-style" />
                      <GrStar className="star-rating-style" />
                      <GrStar className="star-rating-style gray" />
                      <GrStar className="star-rating-style gray" />
                    </div>
                  </div>
                </Swiper>
      
              </div>
              <div className="destinations-devide-right-container">
                <div className="destinations-devide-right-container-titles">
                  <div className="destinations-devidete-title">
                    {place.name}
                  </div>
                  {/* {console.log(places.name)} */}
                  {/* <div className="destinations-devidete-title">{places.name}</div> */}
                </div>
                <div className="destinations-devide-right-container-symbols">
                  <GrWifi className="hotels-icons-style " />
                  <GiBathtub className="hotels-icons-style " />
                  <FaUtensils className="hotels-icons-style" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat
                </p>
                <button className="destination-button-reverse">BOOK NOW</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Destinations;
