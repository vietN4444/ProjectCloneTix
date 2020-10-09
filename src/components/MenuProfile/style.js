const { makeStyles } = require("@material-ui/core");

const Style = makeStyles((theme) => ({
  listItem: {
    paddingTop: 10,
    paddingBottom: 10,
    transition: "all 0.3s",
    "&:hover": {
      background: "rgba(0, 0, 0, 0.08)",
    },
    "& .MuiListItemIcon-root": {
      transition: "all 0.3s",
      minWidth: 40,
    },
    "& .MuiListItemText-root": {
      transition: "all 0.3s",
      "& > span": {
        fontSize: theme.typography.subtitle1.fontSize,
      },
    },
  },
  listItemSelected: {
    background: `${theme.palette.secondary.light}!important`,
    "& .MuiListItemIcon-root": {
      color: theme.palette.text.white,
    },
    "& .MuiListItemText-root": {
      color: theme.palette.text.white,
    },
  },
  menuTitle: {
    marginBottom: 10,
    paddingLeft: 10,
    display: "flex",
    alignItems: "center",
    "& > h1": {
      marginLeft: 12,
      fontSize: 20,
    },
    "& > svg": {
      fontSize: 30,
    },
  },
  menuTitleAdmin: {
    marginTop: 10,
  },
  menuList: {
    outline: "none",
  },
  iconMenuItem: {
    "& >svg": {
      fontSize: 20,
    },
  },
  boxAvatar: {
    padding: 15,
    paddingTop: 0,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    "&  > p": {
      marginTop: 5,
      marginBottom: 4,
      fontWeight: 600,
    },
  },
  avatarLarge: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  subMenuItem: {
    height: 250,
    maxHeight: 250,
    overflow: "auto",
    outline: "none",
    padding: 0,
    "& > li": {
      paddingTop: 10,
      paddingBottom: 10,
      "& .MuiListItemIcon-root": {
        minWidth: 30,
      },
    },
  },
}));

export default Style;
