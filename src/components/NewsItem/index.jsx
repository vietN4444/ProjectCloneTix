import { Box, Typography, Link } from "@material-ui/core";
import React from "react";
import Style from "./style";

const NewItem = ({ data, ...props }) => {
  const classes = Style(props);
  return (
    <Box className={classes.newsItem}>
      <Box className={classes.newsImg}>
        <Link href={data.link} target="_blank">
          <img src={data.img} alt="dataImg" />
        </Link>
      </Box>
      <Link href={data.link} target="_blank">
        <Typography>{data.name}</Typography>
      </Link>
      <Typography component="p">{data.description}</Typography>
      {data.imgLogo ? (
        <img
          className={
            data.imgLogo?.search("ghienreview") === -1
              ? classes.imgLogo
              : classes.imgLogoReview
          }
          src={data.imgLogo}
          alt="dataImg"
        />
      ) : null}
    </Box>
  );
};

export default NewItem;
