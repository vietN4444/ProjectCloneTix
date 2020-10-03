import React, { useState } from "react";
import Style from "./style";
import CloseIcon from "../../assets/imgs/close.png";
import { Box, Button, Fade } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { SET_MODAL_STATUS } from "../../redux/actions/actionContants";

const ModalVideoPopup = (props) => {
  const dispatch = useDispatch();
  const classes = Style(props);
  const trailer = useSelector((state) => state.movie.trailer);

  const handleModal = () => {
    dispatch({
      type: SET_MODAL_STATUS,
    });
  };

  return (
    <>
      <Box className={classes.modalVideo}>
        <Box className={classes.modalVideoOverplay} onClick={handleModal}></Box>
        <Box className={classes.modalVideoContainer}>
          <Box className={classes.modalVideoWrapper}>
            <Box className={classes.modalIframe}>
              <iframe
                width={560}
                height={315}
                src={trailer + "?autoplay=1"}
                frameBorder={0}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Box>
            <Button onClick={handleModal}>
              <img src={CloseIcon} />
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ModalVideoPopup;
