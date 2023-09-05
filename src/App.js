import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Destinations from "./routes/destinations/destinations";
import HowToGetThere from './routes/hotels/HowToGetThere';
import WhatToSee from './routes/hotels/WhatToSee';
import WhereToEat from './routes/hotels/WhereToEat';

import "./App.css";
import Hotels from "./routes/hotels/hotels";
import HotelsContent from "./routes/hotels/hotelsContent";
import HotelX from "./routes/hotels/hotelX";

// import { Suspense } from "react";


const App = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} >

          <Route index element={<HotelsContent />} />
          <Route path="howtogetthere" element={<HowToGetThere />} />
          <Route path="whattosee" element={<WhatToSee />} />
          <Route path="wheretoeat" element={<WhereToEat />} />

        </Route>
        <Route path="/flights" element={<HotelX />} />
        <Route path="/rent" element={<Home />} />
        <Route path="/hotdeals" element={<Destinations />} />
      </Routes>

    </>

  );
};

export default App;
