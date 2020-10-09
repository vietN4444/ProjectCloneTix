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
  const movieListSearched = useSelector((state) => state.movie.movieSearch);
  const [searchMovie, setSearchMovie] = useState("");

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
    if (!!searchMovie) {
      return (
        <div>
          <Grid container spacing={2}>
            {movieListSearched.map((movie, index) => {
              return (
                <Grid key={index} item md={3}>
                  <MovieItem data={movie} />
                </Grid>
              );
            })}
          </Grid>
        </div>
      );
    }
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
  }, [movieList, searchMovie, movieListSearched]);

  const handleChange = useCallback(
    (e) => {
      const value = e.target.value.trim();
      setSearchMovie(value);
      setTimeout(() => {
        dispatch(getMovieByName(value));
      }, 100);
    },
    [dispatch]
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
        <Box className={classes.title} mb={2}>
          <Typography variant="h4" component="h4">
            Đang Công Chiếu
          </Typography>
        </Box>
        <Box mb={2}>
          <form>
            <TextField
              onChange={handleChange}
              label="Tìm kiếm phim"
              variant="outlined"
              color="secondary"
              fullWidth={true}
              className={classes.input}
            />
          </form>
        </Box>
        <Box className={classes.slider}>
          <Slider {...settingsTwo}>{renderMovieList()}</Slider>
        </Box>
      </Container>
    </>
  );
};

export default MovieList;
