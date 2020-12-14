import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCinemaByMovie } from "../../redux/actions/cinemaActions";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Style from "./style";
import { useHistory } from "react-router-dom";

const BoxBooking = (props) => {
  const dispatch = useDispatch();
  const bookingRef = useRef();
  const history = useHistory();

  const [label, setLabel] = useState({
    movie: "Phim",
    cinema: "Rạp",
    schedules: "Ngày giờ suất chiếu",
  });
  const [time, setTime] = useState([]);
  const [dropMovie, setDropMovie] = useState(false);
  const [dropCinema, setDropCinema] = useState(false);
  const [dropSchedules, setDropSchedules] = useState(false);
  const [movieBooking, setMovieBooking] = useState("");

  const movieList = useSelector((state) => state.movie.movieBoxBooking);
  const cinemaList = useSelector((state) => state.cinema.cinemaBooking);

  useEffect(() => {
    let handler = (event) => {
      if (!bookingRef.current.contains(event.target)) {
        setDropMovie(false);
        setDropCinema(false);
        setDropSchedules(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const classes = Style(props);

  const renderMovieList = useCallback(() => {
    return movieList?.map((movie, index) => {
      return (
        <li
          key={index}
          className="booking__dropdownItem"
          data-value="movie"
          data-idmovie={movie.maPhim}
          onClick={movieItemEvents}
        >
          {movie.tenPhim} - (C18)
        </li>
      );
    });
  }, [movieList]);

  const renderCinemaList = useCallback(() => {
    // console.log(cinemaList);
    return cinemaList?.map((cinema, index) => {
      return (
        <li
          key={index}
          className="booking__dropdownItem"
          data-value="cinema"
          onClick={(e) => cinemaItemEvents(e, cinema.lichChieuPhim)}
        >
          {cinema.tenCumRap}
        </li>
      );
    });
  }, [cinemaList]);

  const renderTimeSchedules = useCallback(() => {
    return time?.map((time, index) => {
      const str = time.ngayChieuGioChieu.replace("T", " - ");
      return (
        <li
          key={index}
          className="booking__dropdownItem"
          data-value="schedules"
          onClick={(e) => schedulesItemEvents(e, time.maLichChieu)}
        >
          {str}
        </li>
      );
    });
  }, [time]);

  const movieItemEvents = (e) => {
    const idMovie = e.currentTarget.getAttribute("data-idmovie");
    changeLabel(e);
    dispatch(getCinemaByMovie(idMovie));
  };

  const cinemaItemEvents = (e, data) => {
    changeLabel(e);
    setTime(data);
  };

  const schedulesItemEvents = (e, id) => {
    changeLabel(e);
    setMovieBooking(id);
  };

  const changeLabel = (e) => {
    setLabel({
      ...label,
      [e.currentTarget.getAttribute("data-value")]: e.currentTarget.innerHTML,
    });
    switch (e.currentTarget.getAttribute("data-value")) {
      case "movie": {
        setDropMovie(false);
        setDropCinema(true);
        setDropSchedules(false);
        break;
      }
      case "cinema": {
        setDropMovie(false);
        setDropCinema(false);
        setDropSchedules(true);
        break;
      }
      default: {
        setDropMovie(false);
        setDropCinema(false);
        setDropSchedules(false);
        break;
      }
    }
  };

  const dropDown = (type) => {
    switch (type) {
      case 0: {
        setDropMovie(!dropMovie);
        setDropCinema(false);
        setDropSchedules(false);
        break;
      }
      case 1: {
        setDropMovie(false);
        setDropCinema(!dropCinema);
        setDropSchedules(false);
        break;
      }
      default: {
        setDropMovie(false);
        setDropCinema(false);
        setDropSchedules(!dropSchedules);
        break;
      }
    }
  };

  const authBtn = useCallback(() => {
    if (
      label.movie !== "Phim" &&
      label.cinema !== "Rạp" &&
      label.schedules !== "Ngày giờ suất chiếu"
    ) {
      return true;
    }
    return false;
  }, [label]);

  const submitBooking = useCallback(() => {
    const win = window.open(`/checkout/${movieBooking}`, "_blank");
    win.focus();
    // history.replace(`/checkout/${movieBooking}`);
  }, [movieBooking]);

  return (
    <>
      <Box className={classes.booking}>
        <Container
          disableGutters
          maxWidth="md"
          className={classes.bookingWrapper}
        >
          <Grid container className={classes.bookingContainer} ref={bookingRef}>
            <Grid
              item
              md={4}
              sm={4}
              className={`${classes.bookingItem} ${classes.selecteMovie}`}
            >
              <Box className={classes.bookingLabel} onClick={() => dropDown(0)}>
                <Typography component="p" variant="subtitle2">
                  {label.movie}
                </Typography>
                <ExpandMoreIcon />
              </Box>
              {dropMovie ? (
                <Box className={classes.bookingDropdownList} id="selecteMovie">
                  <ul>{renderMovieList()}</ul>
                </Box>
              ) : null}
            </Grid>
            <Grid item md={3} sm={3} className={classes.bookingItem}>
              <Box className={classes.bookingLabel} onClick={() => dropDown(1)}>
                <Typography component="p" variant="subtitle2">
                  {label.cinema}
                </Typography>
                <ExpandMoreIcon />
              </Box>
              {dropCinema ? (
                <Box className={classes.bookingDropdownList}>
                  <ul>
                    {label.movie === "Phim" ? (
                      <li
                        className="booking__dropdownItem"
                        onClick={() => setDropCinema(false)}
                      >
                        Vui lòng chọn phim
                      </li>
                    ) : (
                      renderCinemaList()
                    )}
                  </ul>
                </Box>
              ) : null}
            </Grid>
            <Grid item md={3} sm={3} className={classes.bookingItem}>
              <Box className={classes.bookingLabel} onClick={() => dropDown(2)}>
                <Typography component="p" variant="subtitle2">
                  {label.schedules}
                </Typography>
                <ExpandMoreIcon />
              </Box>
              {dropSchedules ? (
                <Box className={classes.bookingDropdownList}>
                  <ul>
                    {label.cinema === "Rạp" ? (
                      <li className="booking__dropdownItem">
                        Vui lòng chọn phim và rạp
                      </li>
                    ) : (
                      renderTimeSchedules()
                    )}
                  </ul>
                </Box>
              ) : null}
            </Grid>
            <Grid
              item
              md={2}
              sm={2}
              className={`${classes.bookingItem} ${classes.bookingButton}`}
            >
              <Button
                disabled={!authBtn()}
                className={authBtn() ? classes.btnSubmit : null}
                fullWidth={true}
                onClick={submitBooking}
              >
                Mua Vé Ngay
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default BoxBooking;
