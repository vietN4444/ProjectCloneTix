import { Box, Container } from "@material-ui/core";
import BreakImg from "../../assets/imgs/back-news.png";
import React from "react";
import Style from "./style";

const Break = (props) => {
  const classes = Style(props);
  return (
    <Box className={classes.break}>
      <Container disableGutters maxWidth="md">
        <img src={BreakImg} alt="break" />
      </Container>
    </Box>
  );
};

export default Break;
