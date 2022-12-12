import React from "react";
import NavigationBar from "../navigation/navigation.component";
import Car2 from "../../carousels/car2";
import Car9 from "../../carousels/car9";
import VideoTour from "../../components/homepage/videoTour.component";
import HotDealsCar from "../../carousels/hotDealsCar";
import Footer from "../../components/footer/footer.component";
import ScrollToTop from "../../components/backtotop/scrollToTop";
import './home.scss'
// import "../home/home.scss"

const Home = () => {
  return (
       <ScrollToTop >
      <NavigationBar />
      <Car2 />
      <Car9 />
      <VideoTour />
      <HotDealsCar />
      <Footer />
      </ScrollToTop>
  );
};

export default Home;
