import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  Typography,
} from "@material-ui/core";
import Mobile from "../../assets/imgs/mobile.png";
import React, { memo } from "react";
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
      <Box id="appintro">
        <Box>
          <Box className={classes.appIntroContainer}>
            <Container
              maxWidth="md"
              disableGutters
              className={classes.container}
            >
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
                  <img src={Mobile} alt="mobile" />
                  <Box className={classes.appIntroSlider}>
                    <Slider {...settings}>
                      <div className={classes.appIntroSliderItem}>
                        <img src="./imgs/slideApp1.jpg" alt="sliderApp" />
                      </div>
                      <div className={classes.appIntroSliderItem}>
                        <img src="./imgs/slideApp2.jpg" alt="sliderApp" />
                      </div>
                      <div className={classes.appIntroSliderItem}>
                        <img src="./imgs/slideApp3.jpg" alt="sliderApp" />
                      </div>
                      <div className={classes.appIntroSliderItem}>
                        <img src="./imgs/slideApp4.jpg" alt="sliderApp" />
                      </div>
                      <div className={classes.appIntroSliderItem}>
                        <img src="./imgs/slideApp5.jpg" alt="sliderApp" />
                      </div>
                      <div className={classes.appIntroSliderItem}>
                        <img src="./imgs/slideApp6.jpg" alt="sliderApp" />
                      </div>
                      <div className={classes.appIntroSliderItem}>
                        <img src="./imgs/slideApp7.jpg" alt="sliderApp" />
                      </div>
                      <div className={classes.appIntroSliderItem}>
                        <img src="./imgs/slideApp8.jpg" alt="sliderApp" />
                      </div>
                    </Slider>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default memo(AppIntro);
