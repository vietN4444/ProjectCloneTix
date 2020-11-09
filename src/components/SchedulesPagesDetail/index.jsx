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

import Style from "./style";
import { Link } from "react-router-dom";

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
const TabsSchdulesItem = ({ logo, dataMovie, ...props }) => {
  const classes = Style(props);

  const renderTabsBtnItem = useCallback(() => {
    return dataMovie.lichChieuPhim?.map((btn, index) => {
      // if (index >= 10) return null;
      const newStr = btn.ngayChieuGioChieu.replace("T", " - ");
      return (
        <Grid key={index} item md={4} sm={4}>
          <Link to="" className={classes.txtTabsItemBtn}>
            <EventIcon />
            <Typography component="span">{newStr.slice(0, 18)}</Typography>
          </Link>
        </Grid>
      );
    });
  }, [dataMovie]);

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
            src={logo}
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

const SchedulesPagesDetail = ({ dataCinemaList, ...props }) => {
  const classes = Style(props);
  const [value, setValue] = useState(0);
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
                key={index2}
                dataMovie={data}
                logo={cinema.logo}
              />
            );
          })}
        </TabPanel>
      );
    });
  }, [dataCinemaList, value]);

  return (
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
  );
};

export default memo(SchedulesPagesDetail);
