import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../assets/images/realcode-logo-for-carousel.png";
import { Box } from "@mui/material";

export default function RealSlider() {
  const settings = {
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    rtl: true,
    slidesToScroll: 8,
    slidesToShow: 8,
    speed: 30500,
    autoplaySpeed: 100,
    cssEase: "linear",
  };
  return (
    <Box sx={{ width: "100%" }}>
      <div className="slider-container">
        <Slider {...settings}>
          {[...Array(15).keys()].map((_, index) => (
            <div key={index} style={{ margin: "0 18px" }}>
              <img width="200px" height="60px" src={img} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </Box>
  );
}
