const widthHeightAva = 50;

const { makeStyles } = require("@material-ui/core");

const Style = makeStyles((theme) => ({
  schedulesCinemas: {
    display: "flex",
    flexDirection: "column",
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: 4,
    background: theme.palette.primary.main,
  },
  tabsItem: {
    boxShadow: "none",
    "&:first-child": {
      "& > .tabsItemSub": {
        "& > div": {
          margin: 0,
          marginBottom: 12,
        },
      },
    },
    "&:last-child": {
      "&::before": {
        content: `""`,
        height: 0,
      },
    },
    "&:after": {
      content: `""`,
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
    "&.tabsItemSubWrapper:after": {
      content: `""`,
      position: "absolute",
      bottom: 0,
      left: "50%",
      width: `calc(100% - 40px)`,
      transform: "translateX(-50%)",
      borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
    "&.tabsItemSubWrapper:last-child": {
      "&::after": {
        content: `""`,
        border: "none",
      },
    },
    "&.MuiAccordion-root.Mui-expanded": {
      margin: 0,
    },
  },
  tabsItemMain: {
    padding: "0px 20px",
    minHeight: 80,
    "&.tabsItemSub": {
      padding: "5px 0",
    },
  },
  tabsItemMainTxt: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    "& > span": {
      ...theme.typography.body2,
      color: theme.palette.grey[500],
    },
  },
  nameMovie: {
    display: "flex",
    alignItems: "center",
    margin: 2,
    "& > p": {
      ...theme.typography.body2,
      color: theme.palette.text.white,
      backgroundColor: theme.palette.secondary.main,
      borderRadius: 4,
      padding: "0 5px",
      marginRight: 5,
      minWidth: 25,
      textAlign: "center",
      lineHeight: 1.7,
    },
    "& > span": {
      ...theme.typography.h6,
      fontSize: 14,
      color: theme.palette.text.primary,
      lineHeight: "22px",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  },
  tabsItemSub: {
    padding: "0 20px",
    flexDirection: "column",
    "&.tabsItemSubTabSub": {
      padding: 0,
    },
  },
  tabsItemSubTxt: {
    width: "100%",
    "& > p": {
      ...theme.typography.h6,
      color: theme.palette.text.primary,
    },
    "&.tabsItemSubTxt": {
      margin: 0,
    },
  },
  tabsItemBtn: {
    marginTop: theme.spacing(0.4),
    "& > div": {
      marginTop: 0,
    },
  },
  avatarCinema: {
    width: widthHeightAva,
    height: widthHeightAva,
    "&.tabsItemSubAva": {
      width: widthHeightAva,
      height: widthHeightAva,
      borderRadius: 0,
    },
  },

  tabsBtnItemGrid: {
    maxWidth: "33.333333%",
    flexBasis: "33.333333%",
  },

  txtEmpty: {
    color: theme.palette.text.white,
    fontSize: 16,
    textAlign: "center",
  },

  "@media (max-width: 800px)": {
    tabs: {
      "&.tabsAvatar": {
        width: "fit-content",
      },
    },
    avatarCinema: {
      marginRight: 0,
    },
    tabsItemMainTxt: {
      marginLeft: 14,
    },
  },
  txtTabsItemBtn: {
    ...theme.typography.h6,
    fontSize: 14,
    color: theme.palette.text.primary,
    padding: 5,
    background: theme.palette.background.greyRgba,
    border: "1px solid #e4e4e4",
    borderRadius: 7,
    textDecoration: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& > svg": {
      marginRight: 8,
    },
    "& > span": {
      ...theme.typography.subtitle1,
      color: theme.palette.text.green,
    },
  },

  "@media (max-width: 736px)": {
    schedulesCinemas: {
      margin: "0 -20px",
      marginBottom: -60,
      paddingBottom: 60,
    },
  },
  "@media (max-width: 600px)": {
    tabsBtnItemGrid: {
      maxWidth: "50%",
      flexBasis: "50%",
    },
  },
}));

export default Style;
