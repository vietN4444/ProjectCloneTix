import React from "react";
import { Box, Button, Card, Grid, Typography } from "@material-ui/core";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import backgroundSlider from "../../assets/imgs/movieBackground.jpg";
import Wrapper from "../../HOCs/functionWrapper";
import MovieItemCard from "../../components/MovieItemCard";

import Image from "../../assets/imgs/test.jpg";
import Star from "../../assets/imgs/star.png";
import Style from "./style";

const DetailPages = (props) => {
  const classes = Style(props);
  return (
    <Box style={{ minHeight: 800 }} className={classes.body}>
      <Box className={classes.sliderWrapper}>
        <img src={backgroundSlider} alt="slider" />
        <Box className={classes.slider}>
          <Box className={classes.gridContainer}>
            <Grid container spacing={1}>
              <Grid className={classes.filmItem} item md={3}>
                <Card className={classes.movieItem}>
                  <MovieItemCard data={{ hinhAnh: Image, trailer: "asdasd" }} />
                </Card>
              </Grid>
              <Grid className={classes.filmItem} item md={6}>
                <Box className={classes.filmDetail}>
                  <Box className={classes.filmDetailContent}>
                    <Typography>10.07.2020</Typography>
                    <Box className={classes.filmDetailTitle}>
                      <Typography component="span">C18</Typography>
                      <Typography>Bằng Chứng Vô Hình</Typography>
                    </Box>
                    <Typography>100 phút - 0 IMDb - 2D/Digital</Typography>
                  </Box>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.filmDetailBtn}
                  >
                    Mua vé
                  </Button>
                </Box>
              </Grid>
              <Grid className={classes.filmItem} item md={3}>
                <Box className={classes.filmItemEvaluate}>
                  <Box className={classes.filmItemCircleProgress}>
                    <CircularProgressbar
                      value={80}
                      strokeWidth={6}
                      // text={<Typography>8.0</Typography>}
                      className={classes.progressCircle}
                    />
                    <Typography>8.0</Typography>
                  </Box>
                  <Box className={classes.star}>
                    <img src={Star} alt="star" />
                    <img src={Star} alt="star" />
                    <img src={Star} alt="star" />
                    <img src={Star} alt="star" />
                  </Box>
                  <Typography className={classes.txtVote}>
                    169 người đánh giá
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Wrapper(DetailPages);
