import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  Typography,
} from "@material-ui/core";
import Mobile from "../../assets/imgs/mobile.png";
import React from "react";
import Slider from "react-slick";
import Style from "./style";

const AppIntro = (props) => {
  const classes = Style(props);
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
  };
  return (
    <>
      <Box>
        <Box>
          <Box className={classes.appIntroContainer}>
            <Container maxWidth="md" disableGutters>
              <Grid container>
                <Grid item md={6} className={classes.appIntroDetail}>
                  <Typography component="h1" variant="h3">
                    Ứng dụng tiện lợi dành cho <br /> người yêu điện ảnh
                  </Typography>
                  <Typography component="p" className="txtMiddle" variant="h6">
                    Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm
                    rạp và đổi quà hấp dẫn.
                  </Typography>
                  <Button variant="contained" color="secondary" href="#">
                    App miễn phí - Tải về ngay
                  </Button>
                  <Typography
                    component="p"
                    className="txtBottom"
                    variant="subtitle2"
                  >
                    TIX có hai phiên bản <Link href="#">iOS</Link> &amp;{" "}
                    <Link href="#">Android</Link>
                  </Typography>
                </Grid>
                <Grid item md={6} className={classes.appIntroMobileScreen}>
                  <img src={Mobile} />
                  <Box className={classes.appIntroSlider}>
                    <Slider {...settings}>
                      <div className={classes.appIntroSliderItem}>
                        <img src="./imgs/slideApp1.jpg" />
                      </div>
                      <div className={classes.appIntroSliderItem}>
                        <img src="./imgs/slideApp2.jpg" />
                      </div>
                      <div className={classes.appIntroSliderItem}>
                        <img src="./imgs/slideApp3.jpg" />
                      </div>
                      <div className={classes.appIntroSliderItem}>
                        <img src="./imgs/slideApp4.jpg" />
                      </div>
                      <div className={classes.appIntroSliderItem}>
                        <img src="./imgs/slideApp5.jpg" />
                      </div>
                      <div className={classes.appIntroSliderItem}>
                        <img src="./imgs/slideApp6.jpg" />
                      </div>
                      <div className={classes.appIntroSliderItem}>
                        <img src="./imgs/slideApp7.jpg" />
                      </div>
                      <div className={classes.appIntroSliderItem}>
                        <img src="./imgs/slideApp8.jpg" />
                      </div>
                    </Slider>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Box>
      </Box>
      {/* <section className="appIntro">
        <div className="appIntro__wrapper">
          <div className="appIntro__container">
            <div className="appIntro__content">
              <div className="row">
                <div className="appIntro__content__detail col-6">
                  <h1>
                    Ứng dụng tiện lợi dành cho <br /> người yêu điện ảnh
                  </h1>
                  <p className="txtMiddle">
                    Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm
                    rạp và đổi quà hấp dẫn.
                  </p>
                  <a href="#">App miễn phí - Tải về ngay</a>
                  <p className="txtBottom">
                    TIX có hai phiên bản <a href="#">iOS</a> &amp;{" "}
                    <a href="#">Android</a>
                  </p>
                </div>
                <div className="appIntro__content__mobileScreen col-6">
                  <img src="../imgs/mobile.png" />
                  <div className="appIntro__mobileScreen">
                    <div className="appIntro__mobileScreen__slider">
                      <div className="appIntro__mobileScreen__slider-item">
                        <img src="../imgs/slideApp1.jpg" />
                      </div>
                      <div className="appIntro__mobileScreen__slider-item">
                        <img src="../imgs/slideApp2.jpg" />
                      </div>
                      <div className="appIntro__mobileScreen__slider-item">
                        <img src="../imgs/slideApp3.jpg" />
                      </div>
                      <div className="appIntro__mobileScreen__slider-item">
                        <img src="../imgs/slideApp4.jpg" />
                      </div>
                      <div className="appIntro__mobileScreen__slider-item">
                        <img src="../imgs/slideApp5.jpg" />
                      </div>
                      <div className="appIntro__mobileScreen__slider-item">
                        <img src="../imgs/slideApp6.jpg" />
                      </div>
                      <div className="appIntro__mobileScreen__slider-item">
                        <img src="../imgs/slideApp7.jpg" />
                      </div>
                      <div className="appIntro__mobileScreen__slider-item">
                        <img src="../imgs/slideApp8.jpg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default AppIntro;
