const drawerWidth = 240;
const widthLogoHeader = 50;

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
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export default Style;
