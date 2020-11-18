import React, { useCallback, useEffect, useState } from "react";
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
  SET_COMMENTS,
  SET_MODAL_COMBO,
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
  const [vote, setVote] = useState(6);
  const [error, setErros] = useState(false);
  const [rowTextarea, setRowTextarea] = useState(2);
  const [comments, setComments] = useState({
    userName: "",
    time: "1 giây trước",
    vote: 0,
    comment: "",
    like: 0,
  });

  const userName = useSelector((state) => state.auth.userName);

  const changeRes = () => {
    if (window.innerWidth <= 500) {
      setRowTextarea(4);
    } else {
      setRowTextarea(2);
    }
  };

  window.addEventListener("resize", changeRes);

  const handleModal = () => {
    dispatch({
      type: SET_MODAL_COMMENTS,
    });
  };

  const rating = useCallback(
    (value) => {
      if (value === null) {
        setValue(0);
        setComments({ ...comments, vote: 0 });
        setVote(0);
        return;
      }
      setValue(value);
      setComments({ ...comments, vote: value });
      setVote(value * 2);
    },
    [comments]
  );

  const handleInput = useCallback(
    (e) => {
      const str = e.target.value;
      setComments({ ...comments, comment: str });
    },
    [comments]
  );

  const submitComments = useCallback(() => {
    if (comments.comment === "") {
      setErros(true);
      return;
    }
    dispatch({
      type: SET_COMMENTS,
      payload: comments,
    });
    dispatch({
      type: SET_MODAL_COMMENTS,
    });
    setErros(false);
  }, [comments]);

  useEffect(() => {
    changeRes();
    setTimeout(setChecked(!checked), 500);
  }, []);

  useEffect(() => {
    setComments({ ...comments, userName: userName });
  }, [userName]);

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
              <Typography>{vote === 10 ? vote : `${vote}.0`}</Typography>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  rating(newValue);
                }}
              />
            </Box>
            <Box className={classes.wrapperInput}>
              <TextField
                className={classes.input}
                label="Comments Here"
                multiline
                rows={rowTextarea}
                variant="outlined"
                placeholder="Nói cho mọi người biết bạn nghĩ gì về phim này..."
                color="secondary"
                onChange={handleInput}
              />
            </Box>
            {error ? (
              <Typography className={classes.txtError}>
                Hãy cho TIX biết suy nghĩ của bạn
              </Typography>
            ) : null}
            <Button
              variant="contained"
              color="secondary"
              className="btnSubmit"
              onClick={submitComments}
            >
              Đăng
            </Button>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
};

export const ModalCombo = (props) => {
  const classes = Style(props);
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);

  const handleModal = () => {
    dispatch({
      type: SET_MODAL_COMBO,
    });
  };

  useEffect(() => {
    setTimeout(setChecked(!checked), 300);
  }, []);

  return (
    <Fade in={checked}>
      <Box className={classes.modalOverplay} onClick={handleModal}></Box>
    </Fade>
  );
};
