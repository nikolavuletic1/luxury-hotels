import { useEffect, useState } from "react";
import {FaAngleDoubleUp} from "react-icons/fa";
// import { TfiAngleDoubleUp} from "react-icons/tfi";

import "./scrollToTop.scss";

const ScrollToTop = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="top-to-btm">
      {" "}
      {props.children}
      {isVisible && (
        <FaAngleDoubleUp 
          onClick={scrollToTop}
          className="icon-position icon-style" 
        />
      )}
  
    </div>
  );
};

export default ScrollToTop;
