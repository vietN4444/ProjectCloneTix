import {
  Box,
  Button,
  Container,
  Fade,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { memo, useCallback, useEffect, useState } from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieItem from "../MovieItem";
import Style from "./style";

import { getMovieListCount } from "../../redux/actions/movieActions";
import { CLEAR_MOVIE_LIST } from "../../redux/actions/actionContants";

const MovieList = ({ res, ...props }) => {
  const classes = Style(props);
  const dispatch = useDispatch();
  const page = useSelector((state) => state.movie.pages);
  const movieList = useSelector((state) => state.movie.movieList);
  const movieIncoming = useSelector((state) => state.movie.movieListIncoming);

  const [tab, setTab] = useState(0);
  const [checked, setChecked] = useState(false);
  const [countPageMobileMovieList, setCountMPML] = useState(1);
  const [countPageMobileMovieListIncoming, setCountMPMLI] = useState(5);
  const [toggleBtnViewMore, setToggleBtnViewMore] = useState(true);
  const [toggleBtnViewMoreTwo, setToggleBtnViewMoreTwo] = useState(true);
  const [mobileMovieList, setMobileMovieList] = useState([]);
  const [mobileMovieIncoming, setMobileMovieIncoming] = useState([]);
  const [mobilePage, setMobilePage] = useState(1);

  useEffect(() => {
    if (res === "mobile") {
      dispatch(getMovieListCount(6, countPageMobileMovieList)).then((res) => {
        setMobileMovieList(res.items);
        setMobilePage(res.totalPages);
      });
      dispatch(getMovieListCount(6, countPageMobileMovieListIncoming)).then(
        (res) => {
          setMobileMovieIncoming(res.items);
        }
      );
    }
    setChecked(true);
  }, [page, dispatch, res]);

  //CLear tránh call lại api khi chuyển trang
  useEffect(() => {
    return () => {
      dispatch({
        type: CLEAR_MOVIE_LIST,
      });
      setMobileMovieList([]);
      setMobileMovieIncoming([]);
      setMobilePage(1);
    };
  }, []);

  const handleViewMore = useCallback(() => {
    if (!tab) {
      if (countPageMobileMovieList >= mobilePage - 1)
        return setToggleBtnViewMore(false);
      let count = countPageMobileMovieList + 1;
      setCountMPML(count);
      dispatch(getMovieListCount(6, count)).then((res) => {
        const newArr = mobileMovieList.concat(res.items);
        setMobileMovieList(newArr);
      });
    } else {
      if (countPageMobileMovieListIncoming <= 1)
        return setToggleBtnViewMoreTwo(false);
      let count = countPageMobileMovieListIncoming - 1;
      setCountMPMLI(count);
      dispatch(getMovieListCount(6, count)).then((res) => {
        const newArr = mobileMovieIncoming.concat(res.items);
        setMobileMovieIncoming(newArr);
      });
    }
  }, [
    dispatch,
    tab,
    countPageMobileMovieList,
    countPageMobileMovieListIncoming,
    mobilePage,
  ]);

  const renderMovieList = useCallback(() => {
    if (!tab) {
      return movieList.map((ele, index) => {
        return (
          <Box key={index}>
            <Grid container spacing={2}>
              {movieList[index].items.map((movie, index2) => {
                return (
                  <Grid
                    key={index2}
                    item
                    md={3}
                    sm={3}
                    className={classes.gridItem}
                  >
                    <Fade
                      key={index}
                      in={checked}
                      timeout={{
                        enter: 0.4,
                        exit: 0.4,
                      }}
                    >
                      <MovieItem data={movie} />
                    </Fade>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        );
      });
    } else {
      return movieIncoming.map((ele, index) => {
        return (
          <Box key={index}>
            <Grid container spacing={2}>
              {movieIncoming[index].items.map((movie, index2) => {
                return (
                  <Grid
                    key={index2}
                    item
                    md={3}
                    sm={3}
                    className={classes.gridItem}
                  >
                    <Fade
                      key={index}
                      in={checked}
                      timeout={{
                        enter: 0.2,
                        exit: 0.2,
                      }}
                    >
                      <MovieItem data={movie} />
                    </Fade>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        );
      });
    }
  }, [movieList, tab, movieIncoming, checked]);

  const renderMovieListMobile = useCallback(() => {
    if (!tab) {
      return (
        <Box className={classes.mobileMovieList}>
          <Grid container spacing={2}>
            {mobileMovieList?.map((movie, index) => {
              return (
                <Grid
                  key={index}
                  item
                  md={6}
                  sm={6}
                  className={classes.gridItem}
                >
                  <MovieItem data={movie} />
                </Grid>
              );
            })}
          </Grid>
          {toggleBtnViewMore ? (
            <Button
              className={classes.btnViewMore}
              color="secondary"
              variant="outlined"
              onClick={handleViewMore}
            >
              Xem thêm
            </Button>
          ) : null}
        </Box>
      );
    } else {
      return (
        <Box className={classes.mobileMovieList}>
          <Grid container spacing={2}>
            {mobileMovieIncoming?.map((movie, index) => {
              return (
                <Grid
                  key={index}
                  item
                  md={6}
                  sm={6}
                  className={classes.gridItem}
                >
                  <MovieItem data={movie} />
                </Grid>
              );
            })}
          </Grid>
          {toggleBtnViewMoreTwo ? (
            <Button
              className={classes.btnViewMore}
              color="secondary"
              variant="outlined"
              onClick={handleViewMore}
            >
              Xem thêm
            </Button>
          ) : null}
        </Box>
      );
    }
  }, [
    mobileMovieIncoming,
    tab,
    mobileMovieList,
    toggleBtnViewMore,
    toggleBtnViewMoreTwo,
  ]);

  const handleSetTab = useCallback(
    (num) => {
      setTab(num);
      setChecked(false);
      setTimeout(() => {
        setChecked(true);
      }, 300);
    },
    [setTab, setChecked]
  );

  const settingsTwo = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
  };

  return (
    <>
      <Container
        disableGutters
        maxWidth="md"
        className={classes.movieListContainer}
        id="movieList"
      >
        <Box className={classes.boxTitle} mb={2}>
          <Box
            className={!tab ? classes.title : classes.subTitle}
            onClick={() => handleSetTab(0)}
          >
            <Typography variant="h4" component="h4">
              Đang công chiếu
            </Typography>
          </Box>
          <Box
            className={tab ? classes.title : classes.subTitle}
            onClick={() => handleSetTab(1)}
          >
            <Typography variant="h4" component="h4">
              Sắp chiếu
            </Typography>
          </Box>
        </Box>

        {res === "pc" ? (
          <Box className={classes.slider}>
            <Slider {...settingsTwo}>{renderMovieList()}</Slider>
          </Box>
        ) : (
          <Box>{renderMovieListMobile()}</Box>
        )}
      </Container>
    </>
  );
};

export default memo(MovieList);
