import React from 'react'
import HotelCardOne from '../../assets/hotelx-card-bathroom.jpg'
import HotelCardTwo from '../../assets/hotelsx-card-room.jpg'

import { GrWifi } from "react-icons/gr";
import { GiBathtub } from "react-icons/gi";
import { FaUtensils } from "react-icons/fa";


const hotelsxCard = () => {
  return (
    <>
      <div className='hotelsx-card-container'>

        <div className='hotelsx-card-1'><img className='hotelx-card-img' src={HotelCardOne} alt="hotel-card-room1"></img>
          <div className='hotelex-card-block'>
            <div className="hotelsx-card-symbols-container">
              <GrWifi className="hotelsx-icons-style" />
              <GiBathtub className="hotelsx-icons-style" />
              <FaUtensils className="hotelsx-icons-style" />
            </div>
            <div className='hotelsx-card-title'>Pacific Room</div>
            <p >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="hotelsx-card-button-reverse">BOOK NOW FOR 0$</button>
          </div>


        </div>
        <div className='hotelsx-card-2'><img className='hotelx-card-img' src={HotelCardTwo} alt="hotel-card-room2"></img>
          <div className='hotelex-card-block'>
            <div className="hotelsx-card-symbols-container">
              <GrWifi className="hotelsx-icons-style" />
              <GiBathtub className="hotelsx-icons-style" />
              <FaUtensils className="hotelsx-icons-style" />
            </div>
            <div className='hotelsx-card-title'>Pacific Room</div>
            <p >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="hotelsx-card-button-reverse">BOOK NOW FOR 0$</button>
          </div>


        </div>

      </div>
    </>
  )

}

export default hotelsxCard