import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderPromotion from "../../assets/imgs/sliderkm.jpg";
import SliderPromotion1 from "../../assets/imgs/sliderkm1.png";
import SliderPromotion2 from "../../assets/imgs/sliderkm2.jpg";
import SliderPromotion3 from "../../assets/imgs/sliderkm3.jpg";
import SliderPromotion4 from "../../assets/imgs/sliderkm4.jpg";
import { Box } from "@material-ui/core";
import Style from "./style";

const SliderComponent = (props) => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
  };

  const classes = Style(props);
  return (
    <>
      <Box className={classes.slider}>
        <div className={classes.backgroundLinear}></div>
        <Slider {...settings}>
          <div className={classes.sliderContentItem}>
            <img src={SliderPromotion} alt="slider" />
          </div>
          <div className={classes.sliderContentItem}>
            <img src={SliderPromotion1} alt="slider" />
          </div>
          <div className={classes.sliderContentItem}>
            <img src={SliderPromotion2} alt="slider" />
          </div>
          <div className={classes.sliderContentItem}>
            <img src={SliderPromotion3} alt="slider" />
          </div>
          <div className={classes.sliderContentItem}>
            <img src={SliderPromotion4} alt="slider" />
          </div>
        </Slider>
      </Box>
    </>
  );
};

export default SliderComponent;
