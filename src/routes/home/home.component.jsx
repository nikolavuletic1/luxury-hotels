import React from "react";
import NavigationBar from "../navigation/navigation.component";
import Car2 from "../../carousels/car2";
import Car9 from "../../carousels/car9";
import VideoTour from "../../components/homepage/videoTour.component";
import HotDealsCar from "../../carousels/hotDealsCar";
import Footer from "../../components/footer/footer.component";

const Home = () => {
  return (
    <>
      <NavigationBar />
      <Car2 />
      <Car9 />
      <VideoTour />
      <HotDealsCar />
      <Footer />
    </>
  );
};

export default Home;
