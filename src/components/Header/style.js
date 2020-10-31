import { makeStyles } from "@material-ui/core";

const heightHeader = 60;
const widthAvatar = 34;
const widthLogoHeader = 50;

const Style = makeStyles((theme) => ({
  topHeader: {
    height: 60,
  },
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
    zIndex: 7,
    background: theme.palette.primary.light,
    "&:hover": {
      background: theme.palette.primary.main,
    },
  },
  headerContent: {
    position: "relative",
    height: heightHeader,
  },
  headerLogo: {
    "&> a": {
      textDecoration: "none",
      "&> img ": {
        width: widthLogoHeader,
      },
    },
  },
  headerNav: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    "& >ul": {
      listStyle: "none",
      display: "flex",
      margin: 0,
      padding: 0,
      "& >li": {
        margin: `0 ${theme.spacing(1.2)}px`,
        "& >a": {
          transition: "all 0.2s",
          color: theme.palette.text.primary,
          cursor: "pointer",
          "&:hover": {
            color: theme.palette.text.secondary,
          },
        },
      },
    },
  },
  headerTxt: {
    padding: ` 0 ${theme.spacing(1)}px`,
    "& >span": {
      color: theme.palette.grey[500],
    },
  },
  headerUserLogin: {
    "& > a": {
      display: "flex",
      alignItems: "center",
      position: "relative",
      textDecoration: "none",
      "&::after": {
        content: '""',
        width: 1,
        height: "100%",
        position: "absolute",
        top: 0,
        right: 0,
        background: theme.palette.grey[300],
      },
      "& img": {
        width: 30,
        borderRadius: "50%",
        marginRight: theme.spacing(0.8),
      },
    },
  },
  headerUserLocation: {
    userSelect: "none",
    "&>a": {
      paddingRight: 0,
      display: "flex",
      alignItems: "center",
      "& img": {
        opacity: 0.5,
        marginRight: 4,
      },
    },
  },
  btnUserMenu: {
    display: "flex",
    alignItems: "center",
    padding: ` 5px ${theme.spacing(1)}px`,
    borderRadius: 200,
    "& img": {
      width: widthAvatar,
      borderRadius: "100%",
      marginRight: 6,
    },
    "& p": {
      color: theme.palette.grey[500],
      textTransform: "none",
    },
  },
  userMenu: {
    position: "relative",
  },
  menuContent: {
    position: "absolute",
    background: theme.palette.primary.main,
    boxShadow: "0px 7px 20px 3px rgba(0,0,0,0.75);",
    outline: "none",
    borderRadius: 6,
    left: "50%",
    transform: "translateX(-50%)",
  },
  menuItem: {
    justifyContent: "center",
    minHeight: 36,
    "&:hover": {
      background: theme.palette.secondary.main,
      color: theme.palette.text.white,
    },
    "& > svg": {
      marginLeft: 4,
    },
  },
  txtMenuItem: {
    ...theme.typography.body1,
    color: theme.palette.text.primary,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
  btnMenu: {
    marginLeft: "auto",
    "& >button": {
      minWidth: "inherit",
      padding: 8,
      "& svg": {
        width: 30,
        height: 30,
      },
    },
  },
  drawerContainer: {
    width: "70%",
    "@media (max-width: 380px)": {
      width: "100%",
    },
  },
  mobileMenuHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 16px",
    marginBottom: 10,
    "& >button": {
      marginLeft: "auto",
      minWidth: "inherit",
      padding: 8,
    },
  },
  nameUser: {
    width: "fit-content",
    display: "flex",
    alignItems: "center",
    "& img": {
      width: 50,
      height: 50,
      marginRight: 8,
      borderRadius: "50%",
    },
  },
  navItem: {
    padding: "12px 20px",
  },
  txtNavItem: {
    "& > span": {
      ...theme.typography.subtitle1,
      fontSize: 18,
    },
  },
  userCollapseInfo: {
    padding: "0 20px",
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    "& a": {
      textDecoration: "none",
    },
  },
  collapseTxt: {
    "& > span": {
      ...theme.typography.subtitle1,
      color: theme.palette.text.dark,
    },
  },

  "@media (max-width: 900px)": {
    headerNav: {
      margin: "0 auto",
      position: "initial",
      top: "initial",
      left: "initial",
      transform: "translate(0, 0)",
    },
  },
}));

export default Style;
