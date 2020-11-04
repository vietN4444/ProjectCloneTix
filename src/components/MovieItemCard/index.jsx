import React from "react";
import { Box, CardActionArea, CardMedia } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  SET_MODAL_STATUS,
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

  const setTrailer = (e) => {
    e.stopPropagation();
    dispatch({
      type: SET_TRAILER,
      payload: trailer,
    });
    dispatch({
      type: SET_MODAL_STATUS,
    });
  };

  return (
    <CardActionArea
      className={classes.movieItemContent}
      onClick={() => history.push("/detail/" + maPhim)}
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
