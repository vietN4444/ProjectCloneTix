import React from "react";
import {
  AppBar,
  Divider,
  Container,
  Typography,
  Toolbar,
  Box,
  List,
} from "@material-ui/core";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "../../assets/imgs/web-logo.png";

import Style from "./style";
import MenuListDashboard from "../../components/MenuDashboard";
import { useSelector } from "react-redux";
import MovieManagement from "../../components/MovieManagement";

const Dashboard = (props) => {
  const classes = Style(props);
  const titleDashboard = useSelector((state) => state.dashboard.title);

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <img src={HomeIcon} alt="icon" />
          </IconButton>
          <Typography
            align="center"
            component="h1"
            variant="h4"
            className={classes.title}
          >
            {titleDashboard}
          </Typography>
          <IconButton color="inherit">
            <ExitToAppIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box className={classes.drawerPaper}>
        <div className={classes.appBarSpacer}></div>
        <Divider />
        <List>
          <MenuListDashboard />
        </List>
      </Box>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <MovieManagement />
        </Container>
      </main>
    </div>
  );
};

export default Dashboard;
