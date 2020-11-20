import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Container,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import React, { memo, useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import EventIcon from "@material-ui/icons/Event";

import Style from "./style";
import { getCinemaSchedules } from "../../redux/actions/cinemaActions";

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

// First Column
const TabsCinema = ({ dataCinemaList, ...props }) => {
  const dispatch = useDispatch();
  const dataLocationCinema = useSelector(
    (state) => state.cinema.cinemaSchedules
  );

  const [value, setValue] = useState(0);

  useEffect(() => {
    dataCinemaList.forEach((e, i) => {
      dispatch(getCinemaSchedules(e.maHeThongRap));
    });
  }, [dataCinemaList, dispatch]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderTabAvatar = useCallback(() => {
    return dataCinemaList.map((cinema, index) => {
      return (
        <Tab
          key={index}
          className={`${classes.tabBox} tabBoxAvatar`}
          icon={
            <Avatar
              className={classes.avatarCinema}
              variant="rounded"
              src={cinema.logo}
            />
          }
          {...a11yProps(index)}
        />
      );
    });
  }, [dataCinemaList]);

  const renderTabPanel = useCallback(() => {
    return dataCinemaList.map((cinema, index) => {
      return dataLocationCinema?.map((location, index2) => {
        if (cinema.maHeThongRap === location[0].maHeThongRap) {
          return (
            <TabPanel
              key={index}
              value={value}
              index={index}
              className={classes.tabPanel}
            >
              <TabsSchedulesCinema data={location[0]} />
            </TabPanel>
          );
        }
        return null;
      });
    });
  }, [dataCinemaList, dataLocationCinema, value]);

  const classes = Style(props);

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

// Two Column
const TabsSchedulesCinema = ({ data, ...props }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderNameCinema = useCallback((name, className) => {
    const index = name.search("-");
    return (
      <>
        <Typography component="span" className={className}>
          {name.slice(0, index)}
        </Typography>
        {name.slice(index)}
      </>
    );
  }, []);

  const renderTab = useCallback(() => {
    return data.lstCumRap?.map((cinema, index) => {
      return (
        <Tab
          key={index}
          className={`${classes.tabBox} tabBoxSchedules`}
          icon={
            <Avatar
              className={classes.avatarSchedulesCinema}
              variant="rounded"
              src={data.logo}
            />
          }
          label={
            <Box className={classes.schedulesTxt}>
              <Typography className={classes.txtTitle} component="p">
                {renderNameCinema(cinema.tenCumRap, data.maHeThongRap)}
              </Typography>
              <Typography className={classes.txtLocation} component="p">
                {cinema.diaChi}
              </Typography>
              <Link to="" className={classes.txtLink}>
                [chi tiết]
              </Link>
            </Box>
          }
          {...a11yProps(index)}
        />
      );
    });
  }, [data]);

  const renderTabpanel = useCallback(() => {
    return data.lstCumRap?.map((cinema, index) => {
      return (
        <TabPanel
          key={index}
          value={value}
          index={index}
          className={classes.tabsMovie}
        >
          <Box className={classes.wrapperTabsMovie}>
            {cinema.danhSachPhim?.map((movie, index2) => {
              return <TabsSchdulesItem key={index2} dataMovie={movie} />;
            })}
          </Box>
        </TabPanel>
      );
    });
  }, [data, value]);

  const classes = Style(props);

  return (
    <Box className={classes.schedulesCinemas}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        scrollButtons="off"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={`${classes.tabs} tabSchedules`}
      >
        {renderTab()}
      </Tabs>
      {renderTabpanel()}
    </Box>
  );
};

// Three Column
const TabsSchdulesItem = ({ dataMovie, ...props }) => {
  const classes = Style(props);

  const renderTabsBtnItem = useCallback(() => {
    return dataMovie.lstLichChieuTheoPhim?.map((btn, index) => {
      if (index >= 10) return null;
      const indexStr = btn.ngayChieuGioChieu.search("T");
      return (
        <Grid key={index} item md={3}>
          <Link
            to={"/checkout/" + btn.maLichChieu}
            className={classes.txtTabsItemBtn}
          >
            <EventIcon />
            <Typography component="span">
              {btn.ngayChieuGioChieu.slice(indexStr + 1, indexStr + 6)}
            </Typography>
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
            className={classes.avatarSchedulesCinema}
            variant="rounded"
            src={dataMovie.hinhAnh}
          />
          <Box className={classes.tabsItemMainTxt}>
            <Box className={classes.nameMovie}>
              <Typography component="p">C</Typography>
              <Typography component="span">{dataMovie.tenPhim}</Typography>
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

const SchedulesCinemas = (props) => {
  const classes = Style(props);
  const cinemaList = useSelector((state) => state.cinema.cinemaList);

  return (
    <Box id="schedules">
      <Container
        maxWidth="md"
        disableGutters
        className={classes.schedulesContainer}
      >
        <TabsCinema dataCinemaList={cinemaList} />
      </Container>
    </Box>
  );
};

export default memo(SchedulesCinemas);
