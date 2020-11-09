import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { memo, useCallback } from "react";
import { Link } from "react-router-dom";

import EventIcon from "@material-ui/icons/Event";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import AvaCGV from "../../assets/imgs/avacgv.jpg";
import Style from "./style";
import { elementType } from "prop-types";

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
const TabSubSchedules = ({ id, data, ...props }) => {
  const classes = Style(props);
  // console.log(data);
  let currentID = id;

  const renderTabsBtnItem = useCallback(() => {
    return data.lichChieuPhim?.map((btn, index) => {
      const newStr = btn.ngayChieuGioChieu.replace("T", " - ");
      return (
        <Grid key={index} item md={4} className={classes.tabsBtnItemGrid}>
          <Link to="" className={classes.txtTabsItemBtn}>
            <EventIcon />
            <Typography component="span">{newStr.slice(0, 18)}</Typography>
          </Link>
        </Grid>
      );
    });
  }, [data]);

  return (
    <Accordion
      defaultExpanded
      className={`${classes.tabsItem} tabsItemSubWrapper`}
    >
      <AccordionSummary
        className={`${classes.tabsItemMain} tabsItemSub`}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Avatar
          className={`${classes.avatarCinema} tabsItemSubAva`}
          variant="rounded"
          src={arrAvatarCinema[currentID]}
        />
        <Box className={`${classes.tabsItemMainTxt} tabsItemSubTxt`}>
          <Box className={classes.nameMovie}>
            <Typography component="span">{data?.tenCumRap}</Typography>
          </Box>
          <Typography component="span">113 phút - TIX 8.5 - IMDb 0</Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails className={`${classes.tabsItemSub} tabsItemSubTabSub`}>
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
  );
};

const MobileSchedulesDetailMovie = ({ dataCinemaList, ...props }) => {
  // console.log(dataCinemaList);

  const classes = Style(props);

  const renderTabMain = useCallback(() => {
    return dataCinemaList?.heThongRapChieu.map((cinema, index) => {
      let str = cinema.tenHeThongRap;
      let id = cinema.maHeThongRap;
      if (cinema.tenHeThongRap === "cgv") {
        str = str.toUpperCase();
      }
      return (
        <Accordion key={index} className={classes.tabsItem}>
          <AccordionSummary
            className={classes.tabsItemMain}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Avatar
              className={classes.avatarCinema}
              variant="rounded"
              src={cinema.logo}
            />
            <Box className={classes.tabsItemMainTxt}>
              <Box className={classes.nameMovie}>
                <Typography component="span">{str}</Typography>
              </Box>
            </Box>
          </AccordionSummary>
          <AccordionDetails className={classes.tabsItemSub}>
            {cinema.cumRapChieu.map((ele, index) => {
              return <TabSubSchedules key={index} data={ele} id={id} />;
            })}
          </AccordionDetails>
        </Accordion>
      );
    });
  }, [dataCinemaList]);

  return <Box className={classes.schedulesCinemas}>{renderTabMain()}</Box>;
};

export default memo(MobileSchedulesDetailMovie);
