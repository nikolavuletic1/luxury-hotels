import { Navigation, Grid } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "swiper/scss/grid";

import {GrFormPrevious, GrFormNext} from "react-icons/gr";
import { BsBorderAll} from "react-icons/bs";
// import "./styles.scss";
// import './car'
// import '..carousels/car'

// import '../carousels/car2.scss'
import '../carousels/hotDealsCar.scss'
import React from "react";



import Calendar from  '../assets/clock-date-calendar-icon.png'
import UserIcon from  '../assets/user.png'

// const image = "https://source.unsplash.com/featured/";

export default function HotDealsCar() {

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
    <div className="hot-deals-car">
    
    
   {/* <CalendarIcon className="iconn" /> */}
   {/* <div className="naslov-karusela">Experience<br/>New Destinations</div> */}
   <div className="hot-deals-section-title">Hot Deals</div>

      <div className="hot-deals-car-container">
      <div className="swiper-button prev-hot-deals" ref={prevRef}>
          <GrFormPrevious size="1.6em" color="white"/>
        </div>

        <Swiper
          className="mySwiper1 external-buttons swiper-container" 
          slidesPerView={"auto"}
          navigation={{
            prevEl: prevRef?.current,
            nextEl: nextRef?.current
          }}
          
        // grid={{rows: 2}}
        // spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Navigation ,Grid]}
        // updateOnWindowResize
        //   observer
        //   observeParents
        //   initialSlide={2}
          onSwiper={setSwiper}
          
        //   breakpoints={{
        //   640: {
        //     slidesPerView: 1,
        //     // grid: {rows: 1}, 
        //     spaceBetween: 10,
        //   },
        //   768: {
        //     slidesPerView: 2,
        //     // grid: {rows: 1}, 
        //     spaceBetween: 10,
        //   },
        //   1024: {
        //     slidesPerView: 2,
        //     grid: {rows: 2}, 
        //     spaceBetween:20,
        //   },
     
        // }} 
        breakpoints={{
            280: {
            slidesPerView: 1,
          
            spaceBetween: 10,
          },
            300: {
            slidesPerView: 1,
           
            spaceBetween: 10,
          },
            400: {
            slidesPerView: 1,
          
            spaceBetween:   10,
          },
            500: {
            slidesPerView: 1,
            
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 1,
          
            spaceBetween: 10,
          },
          700: {
            slidesPerView: 1,
           
            spaceBetween: 10,
          },
          800: {
            slidesPerView: 2,
         
            spaceBetween:20,
          },
          901: {
            slidesPerView: 2,
       
            spaceBetween:20,
          },

          1016: {
            slidesPerView: 2,
            grid: {rows: 2}, 
            spaceBetween:30,
          },
     
        }} 
        >
          {/* {images.map((image, index) => (
            <SwiperSlide key={index}> */}
            <SwiperSlide>
            
              <img
              
                alt="img"
                className="swiper-slide-hot-deals"
                // src={image.url}
                 src={'https://cdn.pixabay.com/photo/2021/10/06/15/05/bedroom-6686061_960_720.jpg'}
                 
              />

    <div className="hot-deals-card-container">
   
   <div className="hot-deals-calendar-icon-wrapper">
   <div className="hot-deals-calendar-icon-container">
   <img src={Calendar} className='hot-deals-calendar-icon' alt='calendar-icon' />
    <h6 className="hot-deal-icon-text">28.Dec.2021</h6>
   </div>
   <div className="hot-deals-user-icon-container">
   <img src={UserIcon} className='hot-deals-calendar-user' alt='user-icon' /> 
    <h6 className="hot-deal-icon-text">System Admin</h6>
   </div>
   </div>
   <div className="hot-deals-card-text"><h2>Each of our 8 double<br/>rooms has its own distinct. </h2>  
   <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
   et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p> </div>
   
    </div>
             

            </SwiperSlide>
            <SwiperSlide>
            
            <img
            
              alt="img"
              className="swiper-slide-hot-deals"
              // src={image.url}
               src={'https://cdn.pixabay.com/photo/2017/08/09/10/42/hotel-rooms-2614141_960_720.jpg'}
              
            />

  <div className="hot-deals-card-container">
 
 <div className="hot-deals-calendar-icon-wrapper">
 <div className="hot-deals-calendar-icon-container">
 <img src={Calendar} className='hot-deals-calendar-icon' alt='calendar-icon' />
  <h6 className="hot-deal-icon-text">28.Dec.2021</h6>
 </div>
 <div className="hot-deals-user-icon-container">
 <img src={UserIcon} className='hot-deals-calendar-user' alt='user-icon' /> 
  <h6 className="hot-deal-icon-text">System Admin</h6>
 </div>
 </div>
 <div className="hot-deals-card-text"><h2>Each of our 8 double<br/>rooms has its own distinct. </h2>  
 <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
 et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p> </div>
 
  </div>
           

          </SwiperSlide>
          <SwiperSlide>
            
            <img
            
              alt="img"
              className="swiper-slide-hot-deals"
              // src={image.url}
               src={'https://cdn.pixabay.com/photo/2018/08/17/03/49/apartment-3612030_960_720.jpg'}
               
            />

  <div className="hot-deals-card-container">
 
 <div className="hot-deals-calendar-icon-wrapper">
 <div className="hot-deals-calendar-icon-container">
 <img src={Calendar} className='hot-deals-calendar-icon' alt='calendar-icon' />
  <h6 className="hot-deal-icon-text">28.Dec.2021</h6>
 </div>
 <div className="hot-deals-user-icon-container">
 <img src={UserIcon} className='hot-deals-calendar-user' alt='user-icon' /> 
  <h6 className="hot-deal-icon-text">System Admin</h6>
 </div>
 </div>
 <div className="hot-deals-card-text"><h2>Each of our 8 double<br/>rooms has its own distinct. </h2>  
 <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
 et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p> </div>
 
  </div>
           

          </SwiperSlide>

          <SwiperSlide>
            
            <img
            
              alt="img"
              className="swiper-slide-hot-deals"
              // src={image.url}
              src={'https://cdn.pixabay.com/photo/2015/10/17/09/14/accommdation-992296_960_720.jpg'}
               
            />

  <div className="hot-deals-card-container">
 
 <div className="hot-deals-calendar-icon-wrapper">
 <div className="hot-deals-calendar-icon-container">
 <img src={Calendar} className='hot-deals-calendar-icon' alt='calendar-icon' />
  <h6 className="hot-deal-icon-text">28.Dec.2021</h6>
 </div>
 <div className="hot-deals-user-icon-container">
 <img src={UserIcon} className='hot-deals-calendar-user' alt='user-icon' /> 
  <h6 className="hot-deal-icon-text">System Admin</h6>
 </div>
 </div>
 <div className="hot-deals-card-text"><h2>Each of our 8 double<br/>rooms has its own distinct. </h2>  
 <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
 et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p> </div>
 
  </div>
           

          </SwiperSlide>
          <SwiperSlide>
            
            <img
            
              alt="img"
              className="swiper-slide-hot-deals"
              // src={image.url}
               src={'https://cdn.pixabay.com/photo/2020/12/24/19/08/hotel-room-5858067_960_720.jpg'}
               
            />

  <div className="hot-deals-card-container">
 
 <div className="hot-deals-calendar-icon-wrapper">
 <div className="hot-deals-calendar-icon-container">
 <img src={Calendar} className='hot-deals-calendar-icon' alt='calendar-icon' />
  <h6 className="hot-deal-icon-text">28.Dec.2021</h6>
 </div>
 <div className="hot-deals-user-icon-container">
 <img src={UserIcon} className='hot-deals-calendar-user' alt='user-icon' /> 
  <h6 className="hot-deal-icon-text">System Admin</h6>
 </div>
 </div>
 <div className="hot-deals-card-text"><h2>Each of our 8 double<br/>rooms has its own distinct. </h2>  
 <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
 et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p> </div>
 
  </div>
           

          </SwiperSlide>
          <SwiperSlide>
            
            <img
            
              alt="img"
              className="swiper-slide-hot-deals"
              // src={image.url}
               src={'https://cdn.pixabay.com/photo/2017/01/21/19/43/amsterdam-1998140_960_720.jpg'}
               
            />

  <div className="hot-deals-card-container">
 
 <div className="hot-deals-calendar-icon-wrapper">
 <div className="hot-deals-calendar-icon-container">
 <img src={Calendar} className='hot-deals-calendar-icon' alt='calendar-icon' />
  <h6 className="hot-deal-icon-text">28.Dec.2021</h6>
 </div>
 <div className="hot-deals-user-icon-container">
 <img src={UserIcon} className='hot-deals-calendar-user' alt='user-icon' /> 
  <h6 className="hot-deal-icon-text">System Admin</h6>
 </div>
 </div>
 <div className="hot-deals-card-text"><h2>Each of our 8 double<br/>rooms has its own distinct. </h2>  
 <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
 et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p> </div>
 
  </div>
           

          </SwiperSlide>
          <SwiperSlide>
            
            <img
            
              alt="img"
              className="swiper-slide-hot-deals"
              // src={image.url}
               src={'https://cdn.pixabay.com/photo/2021/02/07/20/08/luxury-5992539_960_720.jpg'}
               
            />

  <div className="hot-deals-card-container">
 
 <div className="hot-deals-calendar-icon-wrapper">
 <div className="hot-deals-calendar-icon-container">
 <img src={Calendar} className='hot-deals-calendar-icon' alt='calendar-icon' />
  <h6 className="hot-deal-icon-text">28.Dec.2021</h6>
 </div>
 <div className="hot-deals-user-icon-container">
 <img src={UserIcon} className='hot-deals-calendar-user' alt='user-icon' /> 
  <h6 className="hot-deal-icon-text">System Admin</h6>
 </div>
 </div>
 <div className="hot-deals-card-text"><h2>Each of our 8 double<br/>rooms has its own distinct. </h2>  
 <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
 et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p> </div>
 
  </div>
           

          </SwiperSlide>
          <SwiperSlide>
            
            <img
            
              alt="img"
              className="swiper-slide-hot-deals"
              // src={image.url}
               src={'https://cdn.pixabay.com/photo/2020/01/15/18/02/room-4768555_960_720.jpg'}
               
            />

  <div className="hot-deals-card-container">
 
 <div className="hot-deals-calendar-icon-wrapper">
 <div className="hot-deals-calendar-icon-container">
 <img src={Calendar} className='hot-deals-calendar-icon' alt='calendar-icon' />
  <h6 className="hot-deal-icon-text">28.Dec.2021</h6>
 </div>
 <div className="hot-deals-user-icon-container">
 <img src={UserIcon} className='hot-deals-calendar-user' alt='user-icon' /> 
  <h6 className="hot-deal-icon-text">System Admin</h6>
 </div>
 </div>
 <div className="hot-deals-card-text"><h2>Each of our 8 double<br/>rooms has its own distinct. </h2>  
 <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
 et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p> </div>
 
  </div>
           

          </SwiperSlide>
            {/* <SwiperSlide>
              <img
                
                alt="img"
                className="custom-slide-big"
                // src={image.url}
                 src={'https://images.pexels.com/photos/819764/pexels-photo-819764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
              />
              <div className="slide-text-container"><h2>Barselona</h2>  <p> <BsBorderAll size="1em"  color="white"/> 10 room(s)</p> </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
               
                alt="img"
                className="custom-slide-small"
                // src={image.url}
                 src={'https://images.pexels.com/photos/2372739/pexels-photo-2372739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
              />
              <div className="slide-text-container down"><h2>Tokyo</h2>  <p> <BsBorderAll size="1em"  color="white"/> 10 room(s)</p> </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
               
                alt="img"
                className="custom-slide-small-upper"
                // src={image.url}
                 src={'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
              />
              <div className="slide-text-container su"><h2>Bali</h2>  <p> <BsBorderAll size="1em"  color="white"/> 10 room(s)</p> </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
               
                alt="img"
                className="custom-slide-big-lower"
                // src={image.url}
                 src={'https://images.pexels.com/photos/7566890/pexels-photo-7566890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
              />
              <div className="slide-text-container down"><h2>Egypt</h2>  <p> <BsBorderAll size="1em"  color="white"/> 10 room(s)</p> </div>
            </SwiperSlide> */}
            
          {/* ))} */}
        </Swiper>
        <div className="swiper-button next-hot-deals" ref={nextRef}>
          <GrFormNext size="1.6em" background= '#ff0000' />
        </div>
      </div>
    </div>
  );
}
