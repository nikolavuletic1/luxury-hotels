import React, { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/thumbs";
import "swiper/scss/navigation";
import "swiper/scss/free-mode";
import "swiper/css/effect-fade";

import NavigationBarBlack from "../navigation/NavigationBarBlack";
import HotelsxCard from './hotelsxCard';
import Footer from "../../components/footer/footer.component";
import HotelRoomPic from '../../assets/hotel-room.jpg'

import '../hotels/hotels.scss'
import '../destinations/destinations.scss'

import Hotelx1 from '../../assets/hotelx1.jpg'
import Hotelx2 from '../../assets/hotelx2.jpg'
import Hotelx3 from '../../assets/hotelx3.jpg'



export default function HotelsX() {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (


    <>
      <div className="hotels-main-wrapper">
        <div className="destination-header">
          {" "}
          <NavigationBarBlack />
        </div>

        <div className="hotels-panorama">
          <img className="" src={HotelRoomPic} alt="panorama" />
          <div className="destinations-title">
            {" "}
            <h1>Hotel Name</h1>
          </div>
        </div>

        <div className='hotelsX-container'>

          <div className="hotelsX-item-1">
            <div className="hotels-title">Need To Know</div>
            <div className='line-hotelx' />

          </div>
          <div className="hotelsX-item-2">
            <h4>Rooms</h4>
            <p>25 residences across four different settings: beach, hilltop, sauna or lagoon.</p>
          </div>
          <div className="hotelsX-item-3">
            <h4>Check Out</h4>
            <p>12 noon; check-in is 2pm.</p>
          </div>
          <div className="hotelsX-item-4">
            <h4>Prices</h4>
            <p>Double rooms from 7.020$, including tax at 9 per cent. Please note that hotels
              charges an additional govemment tax 5% per room per night prior to arrival.</p>
          </div>
          <div className="hotelsX-item-5">
            <h4>More Details</h4>
            <p>Rates include all of your dinning and drinks (yes, even the champagne)
              a daily fruit plate and 60-minute massage in the Como Shambhala spa for over 18s.</p>
          </div>
          <div className="hotelsX-item-6">
            <h4>Also</h4>
            <p>Fiji is a year-around tropical destination: temperatures span particulry
              pleasent range of 25-30 degrees. That said, the island is at its hottest in January;
              and cooling easterly winds dance across the island in July and August.</p>
          </div>
          <div className="hotelsX-item-7">
            <Swiper
              style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
              }}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2 hotelxSwiper"
            >
              <SwiperSlide className="custom-slide-hotelx">
                <img src={Hotelx1} alt="hotel-room1" />
              </SwiperSlide>
              <SwiperSlide className="custom-slide-hotelx">
                <img src={Hotelx2} alt="hotel-room2" />
              </SwiperSlide>
              <SwiperSlide className="custom-slide-hotelx">
                <img src={Hotelx3} alt="hotel-bathroom" />
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={3}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              <SwiperSlide className="custom-slide-hotelx-thumb">
                <img src={Hotelx1} alt="hotel-room1" />
              </SwiperSlide>
              <SwiperSlide className="custom-slide-hotelx-thumb">
                <img src={Hotelx2} alt="hotel-room2" />
              </SwiperSlide>
              <SwiperSlide className="custom-slide-hotelx-thumb">
                <img src={Hotelx3} alt="hotel-bathroom" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="hotelsX-item-8">
            <button className="hotelX-button pusle">CHECK THE OFFERS</button>
          </div>


          <div className="hotelsX-item-9">
            <div className="hotels-title">At The Hotel</div>
            <p>Three restaurants, two bars, spa with treatment rooms, farm, golf course, catamarans yachts,
              tenis courts, gym, babysitting service, kids club and chapel. You'll also be able to use the Como lounge
              at Nadi airport between the flights. In rooms: WiFi, TV, bluetooth sound system, private pool, daybads
              and sun loungers, Nespresso coffee, golf buggies and a mini bar that's replenished daily with wine,
              local beer, and soft drinks. Each residence has a private tau - Fijian for 'friend' - so you'll
              want for nothing. </p>
          </div>
          <div className="hotelsX-item-10">
            <div className="hotels-title">Our Favourite Rooms</div>
            <p>Each residence is a self-contained world - one made of Fijian wood, thatch and palm. The distinct
              setting - beach, hilltop, jungle or lagoon - are reflected in the interiors of villas, but there are
              common threads: private pool, sundeck, outdoor bath and elegant lounge. If we have to pick, we'd go for
              a plantation residence - there's little more luxe then your own palm-dotted beach.</p>
          </div>
          <div className="hotelsX-item-11">
            <div className="hotels-title">Poolside</div>
            <p>If you bore from your bure's ocean-facing plunger, then make for luxury lagoon-style swimming pool
              (it's so large that there are swim-up-able bijou island and palm trees inside it) leading to glass-edged
              above-ground lap pool.</p>
          </div>
          <div className="hotelsX-item-12">
            <div className="hotels-title">Spa</div>
            <p>Three restaurants, two bars, spa with treatment rooms, farm, golf course, catamarans yachts,
              tenis courts, gym, babysitting service, kids club and chapel. You'll also be able to use the Como lounge
              at Nadi airport between the flights. In rooms: WiFi, TV, bluetooth sound system, private pool, daybads
              and sun loungers, Nespresso coffee, golf buggies and a mini bar that's replenished daily with wine,
              local beer, and soft drinks. Each residence has a private tau - Fijian for 'friend' - so you'll
              want for nothing. Each residence is a self-contained world - one made of Fijian wood, thatch and palm. The distinct
              setting - beach, hilltop, jungle or lagoon - are reflected in the interiors of villas.</p>
          </div>
          <div className="hotelsX-item-13">
            <div className="hotels-title">Related Rooms</div>
            <div className='line-hotelx-2' />
            <HotelsxCard />
          </div>

        </div>

        <Footer />
      </div>

    </>
  )
}

