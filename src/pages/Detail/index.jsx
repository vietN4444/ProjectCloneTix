import React, { useCallback, useEffect, useState } from "react";
import { Box, Button, Card, Grid, Typography } from "@material-ui/core";
import { CircularProgressbar } from "react-circular-progressbar";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "react-circular-progressbar/dist/styles.css";

import backgroundSlider from "../../assets/imgs/movieBackground.jpg";
import Image from "../../assets/imgs/test.jpg";
import Star from "../../assets/imgs/star.png";

import MovieItemCard from "../../components/MovieItemCard";
import Wrapper from "../../HOCs/functionWrapper";
import { getDetailMovie } from "../../redux/actions/movieActions";
import Style from "./style";
import ModalVideoPopup from "../../components/TrailerPopup";

const DetailPages = (props) => {
  const classes = Style(props);
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();

  const status = useSelector((state) => state.status.modal);

  const [detailMovie, setDetailMovie] = useState(null);

  useEffect(() => {
    dispatch(getDetailMovie(id)).then((res) => {
      setDetailMovie(res);
    });
  }, []);

  const renderTime = useCallback(() => {
    const index = detailMovie?.ngayKhoiChieu.search("T");
    const string = detailMovie?.ngayKhoiChieu.slice(0, index);
    return string;
  }, [detailMovie]);

  return (
    <Box style={{ minHeight: 800 }} className={classes.body}>
      <Box className={classes.sliderWrapper}>
        <img src={backgroundSlider} alt="slider" />
        <Box className={classes.slider}>
          <Box className={classes.gridContainer}>
            <Grid container spacing={1}>
              <Grid className={classes.filmItem} item md={3}>
                <Card className={classes.movieItem}>
                  <MovieItemCard
                    data={{
                      hinhAnh: detailMovie?.hinhAnh,
                      trailer: detailMovie?.trailer,
                    }}
                  />
                </Card>
              </Grid>
              <Grid className={classes.filmItem} item md={6}>
                <Box className={classes.filmDetail}>
                  <Box className={classes.filmDetailContent}>
                    <Typography>{renderTime()}</Typography>
                    <Box className={classes.filmDetailTitle}>
                      <Typography component="span">C18</Typography>
                      <Typography>{detailMovie?.tenPhim}</Typography>
                    </Box>
                    <Typography>
                      100 phút - {detailMovie?.danhGia} IMDb - 2D/Digital
                    </Typography>
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
      {status ? <ModalVideoPopup /> : <></>}
    </Box>
  );
};

export default Wrapper(DetailPages);
