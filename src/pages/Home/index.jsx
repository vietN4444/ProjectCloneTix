import { Box, IconButton } from "@material-ui/core";
import Wrapper from "../../HOCs/functionWrapper";
import React, { useEffect, useState } from "react";
import SliderComponent from "../../components/Slider";
import BoxBooking from "../../components/BoxBooking";
import MovieList from "../../components/MovieList";
import ModalVideoPopup from "../../components/TrailerPopup";
import { useDispatch, useSelector } from "react-redux";
import AppIntro from "../../components/AppIntro";
import SearchMovie from "../../components/SearchMovie";
import Break from "../../components/Break";
import SchedulesCinemas from "../../components/SchedulesCinemas";
import News from "../../components/News";
import ArrowToTop from "../../assets/imgs/arrowToTop.png";
import Style from "./style";

const Home = (props) => {
  const classes = Style(props);
  const dispatch = useDispatch();
  const status = useSelector((state) => state.status.modal);
  const [componentSlider, setComponentSlider] = useState(true);
  const [btnToTop, setBtnToTop] = useState(false);
  const [boxBooking, setBoxBooking] = useState(true);
  const [movieListMobile, setMovieListMobile] = useState(false);
  const [schedules, setSchedules] = useState(true);

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
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box>
      <Box style={{ minHeight: 1200 }}>
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
