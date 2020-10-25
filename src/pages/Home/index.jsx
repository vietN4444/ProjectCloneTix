import { Box } from "@material-ui/core";
import Wrapper from "../../HOCs/functionWrapper";
import React from "react";
import SliderComponent from "../../components/Slider";
import BoxBooking from "../../components/BoxBooking";
import MovieList from "../../components/MovieList";
import ModalVideoPopup from "../../components/TrailerPopup";
import { useSelector } from "react-redux";
import AppIntro from "../../components/AppIntro";
import SearchMovie from "../../components/SearchMovie";
import Break from "../../components/Break";
import SchedulesCinemas from "../../components/SchedulesCinemas";
import News from "../../components/News";

const Home = (props) => {
  const status = useSelector((state) => state.status.modal);

  return (
    <Box>
      <Box style={{ marginTop: 60, minHeight: 1200 }}>
        <SliderComponent />
        <BoxBooking />
        <SearchMovie />
        <MovieList />
        <Break />
        <SchedulesCinemas />
        <Break />
        <News />
        <AppIntro />
        {status ? <ModalVideoPopup /> : <></>}
      </Box>
    </Box>
  );
};

export default Wrapper(Home);
