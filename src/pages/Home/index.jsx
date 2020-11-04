import { Box, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getMovieList,
  getMovieListByPage,
  getPages,
} from "../../redux/actions/movieActions";
import Wrapper from "../../HOCs/functionWrapper";

import SliderComponent from "../../components/Slider";
import BoxBooking from "../../components/BoxBooking";
import MovieList from "../../components/MovieList";
import ModalVideoPopup from "../../components/TrailerPopup";
import AppIntro from "../../components/AppIntro";
import SearchMovie from "../../components/SearchMovie";
import Break from "../../components/Break";
import SchedulesCinemas from "../../components/SchedulesCinemas";
import News from "../../components/News";
import ArrowToTop from "../../assets/imgs/arrowToTop.png";

import Style from "./style";
import { getCinemaInformation } from "../../redux/actions/cinemaActions";
import Gif from "../../assets/imgs/Gif.gif";
import { DELETE_CINEMA_DATA } from "../../redux/actions/actionContants";

const Home = (props) => {
  const classes = Style(props);
  const dispatch = useDispatch();

  const status = useSelector((state) => state.status.modal);
  const page = useSelector((state) => state.movie.pages);

  const [componentSlider, setComponentSlider] = useState(true);
  const [btnToTop, setBtnToTop] = useState(false);
  const [boxBooking, setBoxBooking] = useState(true);
  const [movieListMobile, setMovieListMobile] = useState(false);
  const [schedules, setSchedules] = useState(true);
  const [loadingImage, setLoadingImage] = useState(true);

  const changeRes = () => {
    if (window.innerWidth <= 992) {
      setBtnToTop(true);
    } else {
      setBtnToTop(false);
    }
    if (window.innerWidth <= 736) {
      setComponentSlider(false);
      setBoxBooking(false);
      setSchedules(false);
      setMovieListMobile(true);
    } else {
      setComponentSlider(true);
      setBoxBooking(true);
      setSchedules(true);
      setMovieListMobile(false);
    }
  };

  window.addEventListener("resize", changeRes);

  useEffect(() => {
    changeRes();
    setTimeout(() => setLoadingImage(false), 1100);
  }, []);

  useEffect(() => {
    if (!page) {
      dispatch(getPages(1));
      dispatch(getMovieListByPage(3, 1));
      dispatch(getMovieListByPage(4, 1));
      return;
    }
    for (let i = 1; i <= page; i++) {
      setTimeout(dispatch(getMovieListByPage(i)), i * 200);
    }
  }, [page]);

  useEffect(() => {
    dispatch(getMovieList());
    dispatch(getCinemaInformation());
  }, [dispatch]);

  useEffect(() => {
    return () => {
      setTimeout(() => setLoadingImage(true));
      dispatch({
        type: DELETE_CINEMA_DATA,
      });
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box>
      <Box style={{ minHeight: 1200 }}>
        {loadingImage ? (
          <div className={classes.container}>
            <img src={Gif} alt="gif" />
          </div>
        ) : null}
        {componentSlider ? <SliderComponent /> : null}
        {boxBooking ? <BoxBooking /> : null}
        <SearchMovie />
        {movieListMobile ? (
          <MovieList res={"mobile"} />
        ) : (
          <MovieList res={"pc"} />
        )}
        <Break />
        {schedules ? (
          <>
            <SchedulesCinemas />
            <Break />{" "}
          </>
        ) : null}
        <News />
        <AppIntro />
        {btnToTop ? (
          <IconButton className={classes.toTop} onClick={scrollTop}>
            <img src={ArrowToTop} alt="toTop" />
          </IconButton>
        ) : null}
        {status ? <ModalVideoPopup /> : <></>}
      </Box>
    </Box>
  );
};

export default Wrapper(Home);
