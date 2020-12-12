const drawerWidth = 240;
const widthLogoHeader = 50;
const widthBtnOpenMenu = 40;

const { makeStyles } = require("@material-ui/core");

const Style = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  menuButton: {
    padding: 0,
    margin: "0 20px",
    "& img": {
      width: widthLogoHeader,
    },
  },
  title: {
    flexGrow: 1,
    letterSpacing: 3,
  },
  drawerPaper: {
    background: theme.palette.primary.main,
    width: drawerWidth,
    borderRight: "1px solid rgba(0, 0, 0, 0.12)",
  },

  appBarSpacer: theme.mixins.toolbar,
  content: {
    flex: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  btnOpenMenu: {
    position: "absolute",
    top: "18%",
    right: 0,
    transform: "translateX(100%)",
    width: widthBtnOpenMenu,
    height: widthBtnOpenMenu,
    color: theme.palette.secondary.dark,
    "& > svg": {
      width: "100%",
      height: "100%",
      transform: "rotate(90deg)",
    },
  },

  "@media (max-width: 768px)": {
    drawerPaper: {
      position: "absolute",
      zIndex: 100,
      height: "100%",
      top: 0,
      left: 0,
      transform: "translateX(-100%)",
      transition: "all 0.4s",
      "&.openMenu": {
        transform: "translateX(0)",
      },
    },
  },
  "@media (max-width: 425px)": {
    container: {
      padding: "20px 10px",
    },
    toolbar: {
      padding: "0 10px",
    },
    menuButton: {
      margin: 0,
    },
    title: {
      fontSize: 16,
    },
  },
}));

export default Style;
