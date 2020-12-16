import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import React, { memo, useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import EventIcon from "@material-ui/icons/Event";
import AvaCGV from "../../assets/imgs/avacgv.jpg";

import Style from "./style";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";

const arrAvatarCinema = {
  BHDStar:
    "https://s3img.vcdn.vn/123phim/2018/09/bhd-star-vincom-thao-dien-15379553942188.jpg",
  LotteCinima:
    "https://s3img.vcdn.vn/123phim/2018/10/lotte-cinema-nam-sai-gon-15383867312967.jpg",
  CineStar:
    "https://s3img.vcdn.vn/123phim/2018/10/cinestar-hai-ba-trung-15383833704033.jpg",
  MegaGS:
    "https://s3img.vcdn.vn/123phim/2018/09/mega-gs-cao-thang-15380164745357.jpg",
  Galaxy:
    "https://s3img.vcdn.vn/123phim/2018/09/ddc-dong-da-15379624326697.jpg",
  CGV: AvaCGV,
};

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {children}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

// Schedules Item
const TabsSchdulesItem = ({ param, user, id, dataMovie, ...props }) => {
  const classes = Style(props);
  const history = useHistory();
  let currentID = id;

  const alertSignIn = useCallback(() => {
    return Swal.fire({
      icon: "error",
      confirmButtonText: "Đăng nhập",
      cancelButtonText: "Để sau",
      title: "Opps...",
      text: "Bạn chưa đăng nhập để thực hiện tác vụ này",
      confirmButtonColor: "#fb4226",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        history.replace("/signin");
      }
    });
  }, []);

  const renderTabsBtnItem = useCallback(() => {
    return dataMovie.lichChieuPhim?.map((btn, index) => {
      const newStr = btn.ngayChieuGioChieu.replace("T", " - ");
      return (
        <Grid key={index} item md={4} sm={4}>
          <Link
            target={user.userName === "" ? "_self" : "_blank"}
            to={
              user.userName === ""
                ? "/detail/" + param
                : "/checkout/" + btn.maLichChieu
            }
            className={classes.txtTabsItemBtn}
            onClick={user.userName === "" ? alertSignIn : null}
          >
            <EventIcon />
            <Typography component="span">{newStr.slice(0, 18)}</Typography>
          </Link>
        </Grid>
      );
    });
  }, [dataMovie, user, param]);

  return (
    <>
      <Accordion defaultExpanded className={classes.tabsItem}>
        <AccordionSummary
          className={classes.tabsItemMain}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Avatar
            className={classes.avatarCinema}
            variant="rounded"
            src={arrAvatarCinema[currentID]}
          />
          <Box className={classes.tabsItemMainTxt}>
            <Box className={classes.nameMovie}>
              <Typography component="span">{dataMovie.tenCumRap}</Typography>
            </Box>
            <Typography component="span">
              113 phút - TIX 8.5 - IMDb 0
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails className={classes.tabsItemSub}>
          <Box className={classes.tabsItemSubTxt}>
            <Typography component="p">2D Digital</Typography>
            <Box className={classes.tabsItemBtn}>
              <Grid container spacing={2}>
                {renderTabsBtnItem()}
              </Grid>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

const SchedulesPagesDetail = ({ id, user, dataCinemaList, ...props }) => {
  const classes = Style(props);
  const [value, setValue] = useState(0);
  const [empty, setEmpty] = useState(false);
  const [avatarTitle, setAvatarTitle] = useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const changeRes = () => {
    if (window.innerWidth <= 800) {
      setAvatarTitle(false);
    } else {
      setAvatarTitle(true);
    }
  };

  window.addEventListener("resize", changeRes);

  useEffect(() => {
    changeRes();
  }, []);

  useEffect(() => {
    if (dataCinemaList?.heThongRapChieu.length === 0) {
      setEmpty(false);
    } else {
      setEmpty(true);
    }
  }, [dataCinemaList]);

  const renderTabAvatar = useCallback(() => {
    return dataCinemaList?.heThongRapChieu.map((cinema, index) => {
      let str = cinema.tenHeThongRap;
      if (cinema.tenHeThongRap === "cgv") {
        str = str.toUpperCase();
      }
      return (
        <Tab
          key={index}
          className={classes.tabBox}
          icon={
            <Avatar
              className={classes.avatarCinema}
              variant="rounded"
              src={cinema.logo}
            />
          }
          label={
            avatarTitle ? <Typography variant="h6">{str}</Typography> : null
          }
          {...a11yProps(index)}
        />
      );
    });
  }, [dataCinemaList, avatarTitle]);

  const renderTabPanel = useCallback(() => {
    return dataCinemaList?.heThongRapChieu.map((cinema, index) => {
      return (
        <TabPanel
          key={index}
          value={value}
          index={index}
          className={classes.tabPanel}
        >
          {cinema.cumRapChieu.map((data, index2) => {
            return (
              <TabsSchdulesItem
                user={user}
                key={index2}
                dataMovie={data}
                id={cinema.maHeThongRap}
                param={id}
              />
            );
          })}
        </TabPanel>
      );
    });
  }, [dataCinemaList, value, user]);

  return (
    <>
      {empty ? (
        <Box className={classes.schedulesCinemas}>
          <Tabs
            orientation="vertical"
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={`${classes.tabs} tabsAvatar`}
          >
            {renderTabAvatar()}
          </Tabs>
          {renderTabPanel()}
        </Box>
      ) : (
        <Typography className={classes.txtEmpty}>
          Phim chưa có lịch chiếu
        </Typography>
      )}
    </>
  );
};

export default memo(SchedulesPagesDetail);
