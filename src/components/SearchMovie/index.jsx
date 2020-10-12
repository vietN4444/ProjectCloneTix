import {
  Avatar,
  Box,
  Container,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
} from "@material-ui/core";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Style from "./style";
import ImageIcon from "@material-ui/icons/Image";
import { useDispatch, useSelector } from "react-redux";
import { getMovieByName } from "../../redux/actions/movieActions";

const SearchMovie = (props) => {
  const dispatch = useDispatch();
  const ref = useRef(null);

  const movieListSearch = useSelector((state) => state.movie.movieSearch);

  const [heightInput, setHeightInput] = useState(0);
  const [movieSearch, setMovieSearch] = useState("");
  const [toogleListItem, setToogleListItem] = useState(true);

  useEffect(() => {
    const heightInput = ref.current.offsetHeight;
    setHeightInput(heightInput);
  }, [setHeightInput]);

  const handleChange = useCallback(
    (e) => {
      const currentNameMovie = e.target.value.trim();
      setMovieSearch(currentNameMovie);
      if (currentNameMovie === "") return;
      dispatch(getMovieByName(currentNameMovie));
    },
    [dispatch, movieSearch]
  );

  const classes = Style(props);

  const renderMovieItem = useCallback(() => {
    if (!toogleListItem) return null;
    if (!movieSearch) return null;
    return (
      <Box boxShadow={1} className={classes.boxSearchMovieItem}>
        <List className={classes.ulList}>
          {movieListSearch.map((movie, index) => {
            const txtSecondary = `119 phút - ${movie.danhGia} IMDb - 2D/Digital`;
            if (!index) {
              return (
                <Box key={index}>
                  <ListItem button className={classes.listItem}>
                    <ListItemAvatar>
                      <Avatar variant="rounded" className={classes.avatar}>
                        <img src={movie.hinhAnh} />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={movie.tenPhim}
                      secondary={txtSecondary}
                      className={classes.movieItemTxt}
                    />
                  </ListItem>
                </Box>
              );
            }
            return (
              <Box key={index}>
                <Divider variant="middle" component="li" />
                <ListItem button className={classes.listItem}>
                  <ListItemAvatar>
                    <Avatar variant="rounded" className={classes.avatar}>
                      <img src={movie.hinhAnh} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={movie.tenPhim}
                    secondary={txtSecondary}
                    className={classes.movieItemTxt}
                  />
                </ListItem>
              </Box>
            );
          })}
        </List>
      </Box>
    );
  }, [movieListSearch, movieSearch, toogleListItem]);

  return (
    <Container disableGutters maxWidth="md">
      <Box my={1} mb={4} className={classes.boxSearchMovie}>
        <form>
          <TextField
            onChange={handleChange}
            ref={ref}
            label="Tìm kiếm phim"
            variant="outlined"
            color="secondary"
            fullWidth={true}
            className={classes.input}
            onBlur={() => setToogleListItem(false)}
            onFocus={() => setToogleListItem(true)}
          />
        </form>
        <Box>{renderMovieItem}</Box>
      </Box>
    </Container>
  );
};

export default SearchMovie;
