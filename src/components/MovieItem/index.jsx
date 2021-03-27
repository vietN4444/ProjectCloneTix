import React from "react";
import { useHistory } from "react-router";
import { Box, Button, Card, CardActions, Typography } from "@material-ui/core";

import Style from "./style";
import MovieItemCard from "../MovieItemCard";

const MovieItem = ({ data, ...props }) => {
  const history = useHistory();

  const classes = Style(props);
  const { tenPhim, maPhim } = data;

  return (
    <>
      <Card className={classes.movieItem} elevation={0}>
        <MovieItemCard data={data} />
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
                onClick={() => history.replace("/detail/" + maPhim)}
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
