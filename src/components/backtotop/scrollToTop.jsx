import { useEffect, useState } from "react";
import { BiArrowFromBottom } from "react-icons/bi";
import "./scrollToTop.scss";

const ScrollToTop = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
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
    window.addEventListener("Scroll", toggleVisibility);

    return () => {
      window.removeEventListener("Scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="wrap">
      {" "}
      {props.children}
      <div className="top-to-btm">
        {isVisible && (
          <BiArrowFromBottom
            onClick={scrollToTop}
            className="icon-position icon-style"
          />
        )}
      </div>
    </div>
  );
};

export default ScrollToTop;
