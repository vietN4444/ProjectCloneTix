import React, { useCallback } from "react";
import { Box, CardActionArea, CardMedia } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

import {
  SET_MODAL_TRAILER,
  SET_TRAILER,
} from "../../redux/actions/actionContants";

import PlayVideo from "../../assets/imgs/play-video.png";
import BackgroundDefaultMovie from "../../assets/imgs/defaultFilms.png";
import Style from "./style";

const MovieItemCard = ({ data, ...props }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = Style(props);
  const { hinhAnh, trailer, maPhim } = data;

  const funcText = useCallback(() => {
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Phim chưa có trailer chính thức",
      confirmButtonColor: "#fb4226",
    });
  }, []);

  const setTrailer = (e) => {
    e.stopPropagation();
    if (trailer.includes("https://www.youtube.com/embed")) {
      dispatch({
        type: SET_TRAILER,
        payload: trailer,
      });
      dispatch({
        type: SET_MODAL_TRAILER,
      });
    } else {
      funcText();
    }
  };

  return (
    <CardActionArea
      className={classes.movieItemContent}
      onClick={() => history.replace("/detail/" + maPhim)}
    >
      <CardMedia
        component="img"
        image={hinhAnh}
        onError={(ev) => {
          ev.target.src = BackgroundDefaultMovie;
        }}
        title="Contemplative Reptile"
      />
      <Box className={`${classes.movieItemBgLinear} bgLinear`}></Box>
      <Box
        className={`${classes.movieItemBtnVideo} btnVideo`}
        onClick={setTrailer}
      >
        <img src={PlayVideo} alt="icon" />
      </Box>
    </CardActionArea>
  );
};

export default MovieItemCard;
