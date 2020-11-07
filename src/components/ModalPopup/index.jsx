import React, { useEffect, useState } from "react";
import Style from "./style";

import CloseImage from "../../assets/imgs/close.png";
import CloseIcon from "@material-ui/icons/Close";

import {
  Box,
  Button,
  Fade,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_MODAL_TRAILER,
  SET_MODAL_COMMENTS,
} from "../../redux/actions/actionContants";
import { Rating } from "@material-ui/lab";

export const ModalVideoPopup = (props) => {
  const dispatch = useDispatch();
  const classes = Style(props);

  const trailer = useSelector((state) => state.movie.trailer);

  const handleModal = () => {
    dispatch({
      type: SET_MODAL_TRAILER,
    });
  };

  return (
    <>
      <Box className={classes.modalVideo}>
        <Box className={classes.modalOverplay} onClick={handleModal}></Box>
        <Box className={classes.modalVideoContainer}>
          <Box className={classes.modalVideoWrapper}>
            <Box className={classes.modalIframe}>
              <iframe
                title="youtube"
                width={560}
                height={315}
                src={trailer + "?autoplay=1"}
                frameBorder={0}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Box>
            <Button onClick={handleModal}>
              <img src={CloseImage} alt="icon" />
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export const ModalComments = (props) => {
  const dispatch = useDispatch();
  const classes = Style(props);

  const [value, setValue] = useState(3);
  const [checked, setChecked] = useState(false);

  const handleModal = () => {
    dispatch({
      type: SET_MODAL_COMMENTS,
    });
  };

  useEffect(() => {
    setTimeout(setChecked(!checked), 500);
  }, []);

  return (
    <Fade in={checked}>
      <Box className={classes.modal}>
        <Box className={classes.modalOverplay} onClick={handleModal}></Box>
        <Box className={classes.modalCommentsContainer}>
          <Box className={classes.modalComments}>
            <IconButton onClick={handleModal}>
              <CloseIcon />
            </IconButton>
            <Box
              component="fieldset"
              mb={3}
              borderColor="transparent"
              className={classes.voteComments}
            >
              <Typography>6.0</Typography>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Box>
            <Box className={classes.wrapperInput}>
              <TextField
                className={classes.input}
                label="Comments Here"
                multiline
                rows={2}
                variant="outlined"
                placeholder="Nói cho mọi người biết bạn nghĩ gì về phim này..."
                color="secondary"
              />
            </Box>
            <Button variant="contained" color="secondary" className="btnSubmit">
              Đăng
            </Button>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
};
