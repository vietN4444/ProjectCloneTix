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
  Typography,
} from "@material-ui/core";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieByName } from "../../redux/actions/movieActions";

import ImageErrors from "../../assets/imgs/errors.jpg";

import Style from "./style";
import { useHistory } from "react-router-dom";

const SearchMovie = (props) => {
  const dispatch = useDispatch();
  const containerRef = useRef();
  const history = useHistory();

  const movieListSearch = useSelector((state) => state.movie.movieSearch);

  const [movieSearch, setMovieSearch] = useState("");
  const [toogleListItem, setToogleListItem] = useState(true);

  const handleChange = useCallback(
    (e) => {
      const currentNameMovie = e.target.value.trim();
      setMovieSearch(currentNameMovie);
      if (currentNameMovie === "") return;
      dispatch(getMovieByName(currentNameMovie));
    },
    [dispatch]
  );

  const classes = Style(props);

  const handleSearchItem = useCallback((id) => {
    history.replace(`/detail/${id}`);
  }, []);

  useEffect(() => {
    let handler = (event) => {
      if (!containerRef.current.contains(event.target)) {
        setToogleListItem(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const renderMovieItem = useCallback(() => {
    if (!toogleListItem) return null;
    if (!movieSearch) return null;
    if (movieListSearch.length === 0) {
      return (
        <Box boxShadow={1} className={classes.boxSearchMovieItem}>
          <List className={classes.ulErrorList}>
            <ListItem className={classes.imgErrors}>
              <img src={ImageErrors} alt="errors" />
              <Typography component="h4" variant="h3">
                Không tìm thấy phim
              </Typography>
            </ListItem>
          </List>
        </Box>
      );
    }
    return (
      <Box boxShadow={1} className={classes.boxSearchMovieItem}>
        <List className={classes.ulList}>
          {movieListSearch.map((movie, index) => {
            const txtSecondary = `119 phút - ${movie.danhGia} IMDb - 2D/Digital`;
            if (!index) {
              return (
                <Box key={index}>
                  <ListItem
                    button
                    className={classes.listItem}
                    onClick={() => handleSearchItem(movie.maPhim)}
                  >
                    <ListItemAvatar>
                      <Avatar variant="rounded" className={classes.avatar}>
                        <img src={movie.hinhAnh} alt="moviePic" />
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
                <ListItem
                  button
                  className={classes.listItem}
                  onClick={() => handleSearchItem(movie.maPhim)}
                >
                  <ListItemAvatar>
                    <Avatar variant="rounded" className={classes.avatar}>
                      <img src={movie.hinhAnh} alt="moviePic" />
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
    <Container disableGutters maxWidth="md" className={classes.searchContainer}>
      <Box my={1} mb={4} className={classes.boxSearchMovie} ref={containerRef}>
        <Typography className={classes.txtTitleSearch}>
          Tìm kiếm phim
        </Typography>
        <form>
          <TextField
            onChange={handleChange}
            label="Tìm kiếm phim"
            variant="outlined"
            color="secondary"
            fullWidth={true}
            className={classes.input}
            onFocus={() => setToogleListItem(true)}
          />
        </form>
        <Box>{renderMovieItem}</Box>
      </Box>
    </Container>
  );
};

export default SearchMovie;
