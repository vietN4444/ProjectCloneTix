import { Box, Container, Fade, Grid, Typography } from "@material-ui/core";
import React, { useCallback, useEffect, useState } from "react";
import MovieItem from "../MovieItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Style from "./style";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { getMovieListByPage, getPages } from "../../redux/actions/movieActions";
import { CLEAR_MOVIE_LIST } from "../../redux/actions/actionContants";

const MovieList = (props) => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.movie.pages);
  const movieList = useSelector((state) => state.movie.movieList);
  const movieIncoming = useSelector((state) => state.movie.movieListIncoming);

  const [tab, setTab] = useState(0);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (!page) {
      dispatch(getPages(1));
      dispatch(getMovieListByPage(3, 1));
      dispatch(getMovieListByPage(4, 1));
    }
    for (let i = 1; i <= page; i++) {
      dispatch(getMovieListByPage(i));
    }
    setChecked(true);
  }, [page, dispatch]);

  useEffect(() => {
    return () => {
      dispatch({
        type: CLEAR_MOVIE_LIST,
      });
    };
  }, [dispatch]);

  const renderMovieList = useCallback(() => {
    if (!tab) {
      return movieList.map((ele, index) => {
        return (
          <Fade
            key={index}
            in={checked}
            timeout={{
              enter: 0.4,
              exit: 0.4,
            }}
          >
            <Box>
              <Grid container spacing={2}>
                {movieList[index].items.map((movie, index2) => {
                  return (
                    <Grid key={index2} item md={3}>
                      <MovieItem data={movie} />
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Fade>
        );
      });
    } else {
      return movieIncoming.map((ele, index) => {
        return (
          <Fade
            key={index}
            in={checked}
            timeout={{
              enter: 0.2,
              exit: 0.2,
            }}
          >
            <Box>
              <Grid container spacing={2}>
                {movieIncoming[index].items.map((movie, index2) => {
                  return (
                    <Grid key={index2} item md={3}>
                      <MovieItem data={movie} />
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Fade>
        );
      });
    }
  }, [movieList, tab, movieIncoming, checked]);

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

  const classes = Style(props);

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

        <Box className={classes.slider}>
          <Slider {...settingsTwo}>{renderMovieList()}</Slider>
        </Box>
      </Container>
    </>
  );
};

export default MovieList;
