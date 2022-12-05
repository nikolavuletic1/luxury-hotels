import { Navigation, Grid } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "swiper/scss/grid";

import {GrFormPrevious, GrFormNext} from "react-icons/gr";
import { BsGrid} from "react-icons/bs";

import '../mixins.scss'
import '../carousels/car2.scss'
import React from "react";



export default function Car2() {

  // const images = new Array(2).fill({ url: image });

  const [swiper, setSwiper] = React.useState();
  const prevRef = React.useRef(null);
  const nextRef = React.useRef(null);

  React.useEffect(() => {
    if (swiper) {
      console.log("Swiper instance:", swiper);
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);



  return (
    <div className="Car2">

   <div className="section-title">Experience<br/>New Destinations</div>
      <div className="carousel-container">
  
      <div className="swiper-button prev" ref={prevRef}>
          <GrFormPrevious size="1.6em" color="white"/>
        </div>
        <Swiper
          className="mySwiper2 external-buttons swiper-container" 
          slidesPerView={"auto"}
          navigation={{
            prevEl: prevRef?.current,
            nextEl: nextRef?.current
          }}
          
  
        modules={[Navigation ,Grid]}
          onSwiper={setSwiper}
          breakpoints={{
            280: {
            slidesPerView: 1,
            grid: {rows: 2}, 
            spaceBetween: 0,
          },
            300: {
            slidesPerView: 1,
            grid: {rows: 2}, 
            spaceBetween: 0,
          },
            400: {
            slidesPerView: 1,
            grid: {rows: 2}, 
            spaceBetween: 0,
          },
            500: {
            slidesPerView: 1,
            grid: {rows: 2}, 
            spaceBetween: 0,
          },
          600: {
            slidesPerView: 1,
            grid: {rows: 2}, 
            spaceBetween: 0,
          },
          700: {
            slidesPerView: 1,
            grid: {rows: 2}, 
            spaceBetween: 0,
          },
          800: {
            slidesPerView: 2,
            grid: {rows: 2}, 
            spaceBetween:1,
          },
          900: {
            slidesPerView: 2,
            grid: {rows: 2}, 
            spaceBetween:1,
          },

          1016: {
            slidesPerView: 3,
            grid: {rows: 2}, 
            spaceBetween:10,
          },
     
        }} 
  
      
        >
          {/* {images.map((image, index) => (
            <SwiperSlide key={index}> */}
            <SwiperSlide>
              <img
              
                alt="img"
                className="custom-slide-big"
                // src={image.url}
                 src={'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                 
              />
              <div className="slide-text-container bu"><h2>Thailand </h2>  <p> <BsGrid size="1.2em"  color="white"/> 10 room(s)</p> </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
           
                alt="img"
                className="custom-slide-small"
                // src={image.url}
                 src={'https://images.pexels.com/photos/5382077/pexels-photo-5382077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
              />
              <div className="slide-text-container down"><h2>Aruba </h2>  <p> <BsGrid size="1.2em"  color="white"/> 10 room(s)</p> </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                
                alt="img"
                className="custom-slide-small-upper"
                // src={image.url}
                 src={'https://images.pexels.com/photos/3680131/pexels-photo-3680131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
              />
              <div className="slide-text-container su"><h2>New Yourk</h2>  <p> <BsGrid size="1.2em" color="white"/> 10 room(s)</p> </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                
                alt="img"
                className="custom-slide-big-lower"
                // src={image.url}
                 src={'https://images.pexels.com/photos/597049/paris-france-eiffel-tower-597049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
              />
              <div className="slide-text-container down "><h2>Paris</h2>  <p> <BsGrid size="1.2em"  color="white"/> 10 room(s)</p> </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
              
                alt="img"
                className="custom-slide-big"
                // src={image.url}
                 src={'https://images.pexels.com/photos/3155667/pexels-photo-3155667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
              />
              <div className="slide-text-container bu"><h2>Maldives</h2>  <p> <BsGrid size="1.2em"  color="white"/> 10 room(s)</p> </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
              
                alt="img"
                className="custom-slide-small"
                // src={image.url}
                 src={'https://images.pexels.com/photos/290597/pexels-photo-290597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
              />
              <div className="slide-text-container down"><h2>Singapore</h2>  <p> <BsGrid size="1.2em"  color="white"/> 10 room(s)</p> </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
               
                alt="img"
                className="custom-slide-small-upper"
                // src={image.url}
                 src={'https://images.pexels.com/photos/319892/pexels-photo-319892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
              />
              <div className="slide-text-container su"><h2>Bali </h2>  <p> <BsGrid size="1.2em" color="white"/> 10 room(s)</p> </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
             
                alt="img"
                className="custom-slide-big-lower"
                // src={image.url}
                 src={'https://images.pexels.com/photos/804952/pexels-photo-804952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"'}
              />
              <div className="slide-text-container down"><h2>Italy</h2>  <p> <BsGrid size="1.2em" color="white"/> 10 room(s)</p> </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                
                alt="img"
                className="custom-slide-big"
                // src={image.url}
                 src={'https://images.pexels.com/photos/819764/pexels-photo-819764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
              />
              <div className="slide-text-container bu"><h2>Barselona</h2>  <p> <BsGrid size="1.2em" color="white"/> 10 room(s)</p> </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
               
                alt="img"
                className="custom-slide-small"
                // src={image.url}
                 src={'https://images.pexels.com/photos/2372739/pexels-photo-2372739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
              />
              <div className="slide-text-container down"><h2>Tokyo</h2>  <p> <BsGrid size="1.2em"  color="white"/> 10 room(s)</p> </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
               
                alt="img"
                className="custom-slide-small-upper"
                // src={image.url}
                 src={'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
              />
              <div className="slide-text-container su"><h2>Bali</h2>  <p> <BsGrid size="1.2em"  color="white"/> 10 room(s)</p> </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
               
                alt="img"
                className="custom-slide-big-lower"
                // src={image.url}
                 src={'https://images.pexels.com/photos/7566890/pexels-photo-7566890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
              />
              <div className="slide-text-container down"><h2>Egypt</h2>  <p> <BsGrid size="1.2em"  color="white"/> 10 room(s)</p> </div>
            </SwiperSlide>
            
        </Swiper>
        <div className="swiper-button next" ref={nextRef}>
          <GrFormNext size="1.6em"  background= '#ff0000' />
        </div>
      </div>
    </div>
  );
}
