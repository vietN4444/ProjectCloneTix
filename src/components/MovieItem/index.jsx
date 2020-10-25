import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Typography,
} from "@material-ui/core";
import PlayVideo from "../../assets/imgs/play-video.png";
import BackgroundDefaultMovie from "../../assets/imgs/defaultFilms.png";
import {
  SET_MODAL_STATUS,
  SET_TRAILER,
} from "../../redux/actions/actionContants";
import React from "react";
import Style from "./style";
import { useDispatch } from "react-redux";

const MovieItem = ({ data, ...props }) => {
  const dispatch = useDispatch();
  const classes = Style(props);
  const { tenPhim, hinhAnh, trailer } = data;

  const setTrailer = () => {
    dispatch({
      type: SET_TRAILER,
      payload: trailer,
    });
    dispatch({
      type: SET_MODAL_STATUS,
    });
  };

  return (
    <>
      <Card className={classes.movieItem} elevation={0}>
        <CardActionArea className={classes.movieItemContent}>
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
        <CardActions className={classes.movieItemDetail}>
          <Box className={classes.movieItemDetailContainer}>
            <Box className={classes.movieItemDetailName}>
              <Typography component="p" variant="subtitle2">
                C18
              </Typography>
              <Typography component="span" variant="h6">
                {tenPhim}
              </Typography>
            </Box>
            <Box className={`${classes.movieItemButton} itemButton`}>
              <Button
                fullWidth={true}
                size="large"
                color="secondary"
                variant="contained"
              >
                MUA VÉ
              </Button>
            </Box>
          </Box>
        </CardActions>
      </Card>
    </>
  );
};

export default MovieItem;
