import { Box, Container, Grid, TextField, Typography } from "@material-ui/core";
import React, { useCallback, useEffect, useState } from "react";
import MovieItem from "../MovieItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Style from "./style";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import {
  getMovieByName,
  getMovieListByPage,
  getPages,
} from "../../redux/actions/movieActions";

const MovieList = (props) => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.movie.pages);
  const movieList = useSelector((state) => state.movie.movieList);

  const [tab, setTab] = useState(0);

  useEffect(() => {
    if (!page) {
      dispatch(getPages(1));
    }
    for (let i = 1; i <= page; i++) {
      setTimeout(() => {
        dispatch(getMovieListByPage(i));
      }, i * 100);
    }
  }, [dispatch, page]);

  const renderMovieList = useCallback(() => {
    return movieList.map((ele, index) => {
      return (
        <div key={index}>
          <Grid container spacing={2}>
            {movieList[index].items.map((movie, index2) => {
              return (
                <Grid key={index2} item md={3}>
                  <MovieItem data={movie} />
                </Grid>
              );
            })}
          </Grid>
        </div>
      );
    });
  }, [movieList]);

  const handleSetTab = useCallback(
    (num) => {
      setTab(num);
    },
    [setTab]
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
