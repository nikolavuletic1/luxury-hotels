import React, { useState } from "react";
import { Controller, FreeMode, Pagination, EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import layer5 from "../assets/Layer5.png";

// Import Swiper styles
import "swiper/css";
import "../carousels/car9.scss";

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "swiper/scss/free-mode";
import "swiper/css/effect-fade";

export default function Car9() {
  // store swiper instances
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  const [thirdSwiper, setThirdSwiper] = useState(null);
  const [forthSwiper, setForthSwiper] = useState(null);

  return (
    <div className="wrapper-car9">
      <div className="firstSwiper-container">
        <div className="swiper-wrapper">
          <Swiper
            modules={[Controller, FreeMode, Pagination, Autoplay]}
            onSwiper={setFirstSwiper}
            controller={{ control: secondSwiper }}
            slidesPerView={2}
            spaceBetween={30}
            loopedSlides={5}
            loop={true}
            pagination={{
              el: ".my-custom-pagination-div",
              clickable: true,
            }}
            speed={500}
            breakpoints={{
              280: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              300: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              400: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              500: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              600: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              700: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              800: {
                slidesPerView: 1,
                spaceBetween: 1,
              },
              901: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1016: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
      
            className="firstSwiper"    >
            <SwiperSlide className="custom-slide-new">
              <img
                src="https://i.postimg.cc/Fsf0JKNs/apartman1.png"
                alt="apartman1"
              />
            </SwiperSlide>
            <SwiperSlide className="custom-slide-new">
              <img
                src="https://i.postimg.cc/zBByZdfX/apartman2.png"
                alt="apartman2"
              />
            </SwiperSlide>
            <SwiperSlide className="custom-slide-new">
              <img
                src="https://i.postimg.cc/qvxcp5p8/apartman3.png"
                alt="apartman3"
              />
            </SwiperSlide>
            <SwiperSlide className="custom-slide-new">
              <img
                src="https://i.pinimg.com/originals/a8/53/28/a85328fb6291717655363543beef809d.png"
                alt="apartman4"
              />
            </SwiperSlide>
            <SwiperSlide className="custom-slide-new">
              <img
                src="https://images.pexels.com/photos/2287523/pexels-photo-2287523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="apartman5"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="secondSwiper-container">
        <div className="house">
          <img src={layer5} alt="house" />
        </div>
        <div className="my-custom-pagination-div" />
        <Swiper
          modules={[Controller, FreeMode, Pagination, EffectFade, Autoplay]}
          onSwiper={setSecondSwiper}
          controller={{ control: firstSwiper }}
          pagination={{
            type: "fraction",
            curentClass: "swiper-pagination-current",
          }}
          loopedSlides={5}
          effect={"fade"}
          fadeEffect={{
            crossFade: true,
          }}
          speed={800}
          loop={true}
          autoplay={true}
          className="secondSwiper"
        >
          <SwiperSlide key="0">
            <div className="slide-text" key="0">
              <h1>President Room</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide key="1">
            <div className="slide-text" key="1">
              <h1>Bathroom</h1>
              <p>
                Arcu odio ut sem nulla pharetra diam sit amet. Ultrices in
                iaculis nunc sed augue lacus viverra vitae congue. Sapien nec
                sagittis aliquam malesuada bibendum arcu vitae elementum. Odio
                pellentesque diam volutpat commodo sed egestas egestas
                fringilla.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide key="2">
            <div className="slide-text" key="2">
              <h1>Seating Area</h1>
              <p>
                Leo vel fringilla est ullamcorper eget nulla. Orci dapibus
                ultrices in iaculis nunc sed augue lacus. Vel orci porta non
                pulvinar neque laoreet suspendisse. Ut porttitor leo a diam
                sollicitudin. Ac tincidunt vitae semper quis lectus.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide key="3">
            <div className="slide-text" key="3">
              <h1>Dining Area</h1>
              <p>
                Orci a scelerisque purus semper. Arcu cursus vitae congue mauris
                rhoncus aenean. Egestas fringilla phasellus faucibus scelerisque
                eleifend donec pretium. Habitasse platea dictumst quisque
                sagittis purus. Turpis egestas sed tempus urna et pharetra.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide key="4">
            <div className="slide-text" key="4">
              <h1>Bedroom</h1>
              <p>
                Id interdum velit laoreet id donec ultrices tincidunt.
                Pellentesque dignissim enim sit amet venenatis urna. Donec enim
                diam vulputate ut pharetra sit. Id semper risus in hendrerit
                gravida. Blandit turpis cursus in hac habitasse.{" "}
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="thirdSwiper-container">
        <div className="swiper-wrapper">
          <Swiper
            modules={[Controller, FreeMode, Pagination, Autoplay]}
            onSwiper={setThirdSwiper}
            controller={{ control: forthSwiper }}
            slidesPerView={2}
            spaceBetween={30}
            loopedSlides={5}
            loop={true}
            pagination={{
              el: ".my-custom-pagination-div1",
              clickable: true,
            }}
            speed={500}
            breakpoints={{
              280: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              300: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              400: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              500: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              600: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              700: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              800: {
                slidesPerView: 1,
                spaceBetween: 1,
              },
              901: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1016: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            className=""
          >
            <SwiperSlide className="custom-slide-new">
              <img
                src="https://i.postimg.cc/Fsf0JKNs/apartman1.png"
                alt="apartman1"
              />
            </SwiperSlide>
            <SwiperSlide className="custom-slide-new">
              <img
                src="https://i.postimg.cc/zBByZdfX/apartman2.png"
                alt="apartman2"
              />
            </SwiperSlide>
            <SwiperSlide className="custom-slide-new">
              <img
                src="https://i.postimg.cc/qvxcp5p8/apartman3.png"
                alt="apartman3"
              />
            </SwiperSlide>
            <SwiperSlide className="custom-slide-new">
              <img
                src="https://i.pinimg.com/originals/a8/53/28/a85328fb6291717655363543beef809d.png"
                alt="apartman4"
              />
            </SwiperSlide>
            <SwiperSlide className="custom-slide-new">
              <img
                src="https://images.pexels.com/photos/2287523/pexels-photo-2287523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="apartman5"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="forthSwiper-container">
        <div className="house">
          <img src={layer5} alt="house" />
        </div>
        <div className="my-custom-pagination-div1" />
        <Swiper
          modules={[Controller, FreeMode, Pagination, EffectFade, Autoplay]}
          onSwiper={setForthSwiper}
          controller={{ control: thirdSwiper }}
          pagination={{
            type: "fraction",
            curentClass: "swiper-pagination-current",
          }}
          loopedSlides={5}
          effect={"fade"}
          fadeEffect={{
            crossFade: true,
          }}
          speed={800}
          loop={true}
          autoplay={true}
          // className="secondSwiper"
        >
          <SwiperSlide>
            <div className="slide-text">
              <h1>Bedroom</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-text">
              <h1>President Room</h1>
              <p>
                Id interdum velit laoreet id donec ultrices tincidunt.
                Pellentesque dignissim enim sit amet venenatis urna. Donec enim
                diam vulputate ut pharetra sit. Id semper risus in hendrerit
                gravida. Blandit turpis cursus in hac habitasse.{" "}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-text">
              <h1>Bathroom</h1>
              <p>
                Leo vel fringilla est ullamcorper eget nulla. Orci dapibus
                ultrices in iaculis nunc sed augue lacus. Vel orci porta non
                pulvinar neque laoreet suspendisse. Ut porttitor leo a diam
                sollicitudin. Ac tincidunt vitae semper quis lectus.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className="slide-text">
              <h1>Seating Area</h1>
              <p>
                Orci a scelerisque purus semper. Arcu cursus vitae congue mauris
                rhoncus aenean. Egestas fringilla phasellus faucibus scelerisque
                eleifend donec pretium. Habitasse platea dictumst quisque
                sagittis purus. Turpis egestas sed tempus urna et pharetra.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-text" >
              <h1>Dining Area</h1>
              <p>
                Arcu odio ut sem nulla pharetra diam sit amet. Ultrices in
                iaculis nunc sed augue lacus viverra vitae congue. Sapien nec
                sagittis aliquam malesuada bibendum arcu vitae elementum. Odio
                pellentesque diam volutpat commodo sed egestas egestas
                fringilla.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
