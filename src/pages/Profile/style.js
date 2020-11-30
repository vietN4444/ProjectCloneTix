const drawerWidth = 240;
const drawerWidthIpad = 200;
const widthLogoHeader = 50;
const widthBtnOpenMenu = 40;

const { makeStyles } = require("@material-ui/core");

const Style = makeStyles((theme) => ({
  root: {
    display: "flex",
    position: "relative",
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
    "&.tabTwo": {
      height: `calc(100% - 56px)`,
      overflowY: "scroll",
      "@media (min-width: 0px) and (orientation: landscape)": {
        height: `calc(100% - 48px)`,
      },
      "@media (min-width: 600px)": {
        height: `calc(100% - 64px)`,
      },
    },
  },
  headTitle: {
    "&.headTitleBox": {
      padding: "8px 16px",
      "& > span": {
        margin: "4px 0",
        display: "block",
      },
    },
    "& > span": {
      ...theme.typography.h4,
    },
  },
  boxContainer: {
    padding: "8px 0",
  },
  boxContent: {
    padding: "20px 16px",
    display: "flex",
  },
  tableContainer: {
    boxShadow:
      "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
    "&::-webkit-scrollbar": {
      width: 8,
      height: 9,
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "transparent",
      transition: "all 0.5s",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "transparent",
      transition: "all 0.5s",
      borderRadius: 200,
    },
    "&:hover": {
      "&::-webkit-scrollbar-track": {
        backgroundColor: "#f2f2f2",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: theme.palette.grey[400],
      },
      "&::-webkit-scrollbar-thumb:hover": {
        backgroundColor: theme.palette.grey[500],
      },
    },
  },
  tableBody: {
    "& >tr": {
      "&>td": {
        ...theme.typography.subtitle1,
      },
    },
  },
  tableHead: {
    "& th": {
      ...theme.typography.subtitle2,
      background: theme.palette.secondary.light,
      color: theme.palette.text.white,
    },
  },
  tableRow: {
    "& > td:nth-child(3)": {
      textAlign: "center",
    },
    "& > td:nth-child(4)": {
      textAlign: "center",
    },
    "& > td:nth-child(5)": {
      textAlign: "center",
    },
    "& .tableSeat": {
      width: 100,
      "& > div": {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        margin: -2,
        "& > div": {
          width: "50%",
          padding: 2,
          "& > div": {
            borderRadius: 4,
            color: theme.palette.text.white,
            background: theme.palette.secondary.light,
          },
        },
      },
    },
  },
  btnOpenMenu: {
    position: "absolute",
    top: "18%",
    right: 0,
    transform: "translateX(100%)",
    width: widthBtnOpenMenu,
    height: widthBtnOpenMenu,
    color: theme.palette.secondary.light,
    "& > svg": {
      width: "100%",
      height: "100%",
      transform: "rotate(90deg)",
    },
  },

  "@media (max-width:1100px)": {
    container: {
      padding: "20px 15px",
    },
  },
  "@media (max-width: 900px)": {
    container: {
      width: 700,
    },
  },
  "@media (max-width: 600px)": {
    container: {
      width: 600,
      "&.containerTicket": {
        width: 800,
      },
    },
    drawerPaper: {
      width: drawerWidthIpad,
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
  "@media (max-width: 400px)": {
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
