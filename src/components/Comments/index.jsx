import { Box, Fade, Typography } from "@material-ui/core";
import React, { memo, useCallback, useEffect, useState } from "react";

import Star from "../../assets/imgs/star.png";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import MovieTicket from "../../assets/imgs/movieTicket.png";
import Avatar from "../../assets/imgs/avatar.png";

import Style from "./style";

const domainImg = "https://ui-avatars.com/api/?name=";

const Comments = ({ data, ...props }) => {
  const classes = Style(props);

  const [imgAvatar, setImgAvatar] = useState(domainImg);
  const [like, setLike] = useState(data.like);
  const [checked, setChecked] = useState(false);
  const [fade, setFade] = useState(false);

  const renderStarVote = useCallback(() => {
    if (data.vote === 0) return;
    let newArr = Array(data.vote).fill("");
    return newArr.map((e, index) => {
      return <img key={index} src={Star} alt="star" />;
    });
  }, [data]);

  const handleLike = useCallback(() => {
    if (like === data.like) {
      setChecked(true);
      setLike(like + 1);
      return;
    }
    setChecked(false);
    setLike(like - 1);
    return;
  }, [like]);

  useEffect(() => {
    setTimeout(setFade(true), 1000);
  }, []);

  return (
    <Fade in={fade}>
      <Box className={classes.tabCommentItem}>
        <Box className={classes.tabCommentItemHeader}>
          <Box className={classes.tabCommentsItemAvatar}>
            <img
              src={`${imgAvatar}${data.userName}`}
              alt="avaComment"
              onError={() => setImgAvatar(Avatar)}
            />
          </Box>
          <Box className={classes.tabCommentItemInfo}>
            <Box>
              <Typography>{data.userName}</Typography>
              <img src={MovieTicket} alt="ticket" />
            </Box>
            <Typography component="span">{data.time}</Typography>
          </Box>
          <Box className={classes.tabCommentItemStar}>
            <Typography component="span">{data.vote}</Typography>
            <Box>{renderStarVote()}</Box>
          </Box>
        </Box>
        <Box className={classes.tabCommentItemBody}>
          <Typography>{data.comment}</Typography>
        </Box>
        <Box
          className={`${classes.tabCommentItemFooter} ${
            checked ? classes.iconChecked : null
          }`}
          onClick={handleLike}
        >
          <ThumbUpAltIcon />
          <Typography component="span">{like}</Typography>
          <Typography>Thích</Typography>
        </Box>
      </Box>
    </Fade>
  );
};

export default memo(Comments);
