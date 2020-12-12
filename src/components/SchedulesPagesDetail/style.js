const widthTabsAvatar = "30%";
const widthHeightAvatar = 50;
const heightSchedulesComponent = 705;

const { makeStyles } = require("@material-ui/core");

const Style = makeStyles((theme) => ({
  schedulesCinemas: {
    display: "flex",
    border: `1px solid ${theme.palette.grey[300]}`,
    minHeight: heightSchedulesComponent,
    borderRadius: 4,
    background: theme.palette.primary.main,
    "& .MuiTabs-scrollable": {
      overflowX: "hidden",
      "&::-webkit-scrollbar": {
        display: "block",
        width: 3,
        borderRadius: 200,
      },
      "&::-webkit-scrollbar-track": {
        background: "#f1f1f1",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "#ccc",
        borderRadius: 200,
      },
    },
  },
  tabBox: {
    minWidth: "100%",
    padding: 20,
    flexBasis: "auto",
    opacity: 0.5,
    transition: "all 0.3s",
    textTransform: "none",
    "&:hover": {
      opacity: 1,
    },
    "&::after": {
      content: `""`,
      position: "absolute",
      bottom: 0,
      left: "50%",
      width: `calc(100% - 40px)`,
      transform: "translateX(-50%)",
      borderBottom: `1px solid ${theme.palette.background.whiteRgba}`,
    },
    "& span.MuiTab-wrapper": {
      flexDirection: "row",
      justifyContent: "flex-start",
    },
  },
  avatarCinema: {
    marginBottom: "0!important",
    width: widthHeightAvatar,
    height: widthHeightAvatar,
    marginRight: 14,
  },
  tabPanel: {
    flex: 1,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.grey[300]}`,
    "&.tabsAvatar": {
      width: widthTabsAvatar,
    },
    "& .MuiTabs-indicator": {
      display: "none",
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
  tabsItem: {
    boxShadow: "none",
    "&:after": {
      content: `""`,
      position: "absolute",
      bottom: 0,
      left: "50%",
      width: `calc(100% - 40px)`,
      transform: "translateX(-50%)",
      borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
  },
  tabsItemMain: {
    padding: "2px 20px",
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
    paddingTop: 0,
  },
  tabsItemSubTxt: {
    width: "100%",
    "& > p": {
      ...theme.typography.h6,
      color: theme.palette.text.primary,
    },
  },
  tabsItemBtn: {
    marginTop: theme.spacing(0.4),
    "& > div": {
      marginTop: 0,
    },
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
}));

export default Style;
