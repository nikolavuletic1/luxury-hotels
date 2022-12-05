import { React } from "react";
import "../homepage/videoTour.styles.scss";

import "video.js/dist/video-js.css";
import VideoJS from "./videoJsPlayer.component";
import VideoTourVideo from "../../assets/VideoTour.mp4";
// import VideoTourVideo from "../../assets/videoSample.webm";

export default function VideoTour() {
  const videoJsOptions = {
    preload: true,
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: VideoTourVideo,
        // src: '/path/to/video.mp4',
        type: "video/mp4",
      },
    ],
  };
  return (
    <div className="video-tour-container">
      <div className="video-tour-text">
        <h6>TAKE A TOUR</h6>
        <div className="section-video-tour-title">
          Discover Our
          <br />
          Undergroud
        </div>
        <div className="section-video-tour-title-wide">
          Discover Our Undergroud
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex.
        </p>
        <button className="header-button">BOOK NOW</button>
      </div>

      <div className="video-tour-video">
        <VideoJS options={videoJsOptions} />
      </div>
    </div>
  );
}
