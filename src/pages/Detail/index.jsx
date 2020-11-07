import React, { useCallback, useEffect, useState } from "react";
import { Box, Button, Card, Fade, Grid, Typography } from "@material-ui/core";
import { CircularProgressbar } from "react-circular-progressbar";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "react-circular-progressbar/dist/styles.css";

import backgroundSlider from "../../assets/imgs/movieBackground.jpg";
import Star from "../../assets/imgs/star.png";
import ListStar from "../../assets/imgs/listStar.png";
import Avatar from "../../assets/imgs/avatar.png";

import MovieItemCard from "../../components/MovieItemCard";
import Wrapper from "../../HOCs/functionWrapper";
import { getDetailMovie } from "../../redux/actions/movieActions";
import Style from "./style";
import { ModalComments, ModalVideoPopup } from "../../components/ModalPopup";
import NavbarTabTitle from "../../components/NavbarTabTitle";
import SchedulesPagesDetail from "../../components/SchedulesPagesDetail";
import Comments from "../../components/Comments";
import { SET_MODAL_COMMENTS } from "../../redux/actions/actionContants";

const arrNavbar = ["Lịch chiếu", "Thông Tin", "Đánh Giá"];
const arrInfoMovie = {
  "Ngày công chiếu": "30.11.2020",
  "Đạo diễn": "Đạo diễn 1",
  "Diễn viên": "Diễn Viên 1, Diễn Viên 2, Diễn Viên 3",
  "Thể loại": "Giật Gân, Thú Vị, Hấp Dẫn",
  "Định dạng": "2D/Digital",
  "Quốc Gia SX": "Việt Nam",
};

const domainImg = "https://ui-avatars.com/api/?name=";

const DetailPages = (props) => {
  const classes = Style(props);
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();

  const statusTrailer = useSelector((state) => state.status.modalTrailer);
  const statusComments = useSelector((state) => state.status.modalComments);
  const comments = useSelector((state) => state.comments.listComments);
  const user = useSelector((state) => state.auth);

  const [imgAvatar, setImgAvatar] = useState(domainImg);
  const [tab, setTab] = useState(0);
  const [checked, setChecked] = useState(false);
  const [detailMovie, setDetailMovie] = useState(null);
  // const [comments, setComments] = useState(arrComments);

  useEffect(() => {
    dispatch(getDetailMovie(id)).then((res) => {
      setDetailMovie(res);
    });
    setChecked(true);
  }, []);

  const renderTime = useCallback(() => {
    const index = detailMovie?.ngayKhoiChieu.search("T");
    const string = detailMovie?.ngayKhoiChieu.slice(0, index);
    return string;
  }, [detailMovie]);

  const renderStats = useCallback(() => {
    return Object.keys(arrInfoMovie).map((obj, index) => {
      return (
        <li>
          <Typography>{obj}</Typography>
          <Typography>{arrInfoMovie[obj]}</Typography>
        </li>
      );
    });
  }, []);

  const handleSetTab = useCallback(
    (num) => {
      setTab(num);
      setChecked(false);
      setTimeout(() => {
        setChecked(true);
      }, 300);
    },
    [setTab, setChecked]
  );

  const renderComments = useCallback(() => {
    return comments.map((data, index) => {
      return <Comments key={index} data={data} />;
    });
  }, [comments]);

  const handleCommentsModal = () => {
    dispatch({
      type: SET_MODAL_COMMENTS,
    });
  };

  const renderTabContent = useCallback(() => {
    switch (tab) {
      // Tab lich chieu
      case 0: {
        return <SchedulesPagesDetail dataCinemaList={detailMovie} />;
      }
      // Tab thong tin
      case 1: {
        return (
          <Grid container spacing={1}>
            <Grid item md={6} className={classes.tabStatsItem}>
              <ul>{renderStats()}</ul>
            </Grid>
            <Grid item md={6} className={classes.tabStatsItem}>
              <Typography className="mainTitle">Nội dung</Typography>
              <Typography>{detailMovie?.moTa}</Typography>
            </Grid>
          </Grid>
        );
      }
      case 2: {
        return (
          <Box className={classes.tabComments}>
            <Box
              className={classes.tabCommentsHeader}
              onClick={handleCommentsModal}
            >
              <img
                src={`${imgAvatar}${user.userName}`}
                alt="avatar"
                onError={() => setImgAvatar(Avatar)}
              />
              <Typography>Bạn nghĩ gì về phim này?</Typography>
              <Box className={classes.tabCommentStars}>
                <img src={ListStar} alt="listStar" />
              </Box>
            </Box>
            <Box className={classes.tabCommentsBody}>{renderComments()}</Box>
          </Box>
        );
      }
      default: {
        return null;
      }
    }
  }, [tab, detailMovie, checked, user, imgAvatar]);

  return (
    <Box style={{ minHeight: 800 }} className={classes.body}>
      <Box className={classes.sliderWrapper}>
        <img src={backgroundSlider} alt="slider" />
        <Box className={classes.slider}>
          <Box className={classes.gridContainer}>
            <Grid container spacing={1}>
              <Grid className={classes.filmItem} item md={3}>
                <Card className={classes.movieItem}>
                  <MovieItemCard
                    data={{
                      hinhAnh: detailMovie?.hinhAnh,
                      trailer: detailMovie?.trailer,
                    }}
                  />
                </Card>
              </Grid>
              <Grid className={classes.filmItem} item md={6}>
                <Box className={classes.filmDetail}>
                  <Box className={classes.filmDetailContent}>
                    <Typography>{renderTime()}</Typography>
                    <Box className={classes.filmDetailTitle}>
                      <Typography component="span">C18</Typography>
                      <Typography>{detailMovie?.tenPhim}</Typography>
                    </Box>
                    <Typography>
                      100 phút - {detailMovie?.danhGia} IMDb - 2D/Digital
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.filmDetailBtn}
                  >
                    Mua vé
                  </Button>
                </Box>
              </Grid>
              <Grid className={classes.filmItem} item md={3}>
                <Box className={classes.filmItemEvaluate}>
                  <Box className={classes.filmItemCircleProgress}>
                    <CircularProgressbar
                      value={80}
                      strokeWidth={6}
                      className={classes.progressCircle}
                    />
                    <Typography>8.0</Typography>
                  </Box>
                  <Box className={classes.star}>
                    <img src={Star} alt="star" />
                    <img src={Star} alt="star" />
                    <img src={Star} alt="star" />
                    <img src={Star} alt="star" />
                  </Box>
                  <Typography className={classes.txtVote}>
                    169 người đánh giá
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
      <NavbarTabTitle
        handleSetTab={handleSetTab}
        tab={tab}
        navPage={"detailPage"}
        dataNav={arrNavbar}
      />
      <Box className={classes.contentTab}>
        <Box className={classes.gridContainer}>
          <Fade in={checked}>{renderTabContent()}</Fade>
        </Box>
      </Box>
      {statusTrailer ? <ModalVideoPopup /> : null}
      {statusComments ? <ModalComments /> : null}
    </Box>
  );
};

export default Wrapper(DetailPages);
