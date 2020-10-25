const { makeStyles } = require("@material-ui/core");

const widthTabsAvatar = 92;
const widthTabsSchedules = "33.9%";
const heightSchedulesComponent = 705;

const Style = makeStyles((theme) => ({
  tabs: {
    borderRight: `1px solid ${theme.palette.grey[300]}`,
    "&.tabsAvatar": {
      width: widthTabsAvatar,
    },
    "&.tabSchedules": {
      width: widthTabsSchedules,
      height: heightSchedulesComponent,
    },
    "& .MuiTabs-indicator": {
      display: "none",
    },
  },
  schedulesCinemas: {
    display: "flex",
    border: `1px solid ${theme.palette.grey[300]}`,
    minHeight: heightSchedulesComponent,
    borderRadius: 4,
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
    "&.tabBoxAvatar::after": {
      content: `""`,
      position: "absolute",
      bottom: 0,
      left: "50%",
      width: `${widthTabsAvatar - 40}px`,
      transform: "translateX(-50%)",
      borderBottom: `1px solid ${theme.palette.background.whiteRgba}`,
    },
    "&.tabBoxSchedules::after": {
      content: `""`,
      position: "absolute",
      bottom: 0,
      left: "50%",
      width: `calc(100% - 40px)`,
      transform: "translateX(-50%)",
      borderBottom: `1px solid ${theme.palette.background.whiteRgba}`,
    },
    "&.tabBoxSchedules .MuiTab-wrapper": {
      flexDirection: "row",
      justifyContent: "flex-start",
    },
  },
  avatarCinema: {
    width: "auto",
    height: "auto",
  },
  tabPanel: {
    flex: 1,
  },
  avatarSchedulesCinema: {
    width: 50,
    height: 50,
    display: "block",
    marginRight: theme.spacing(1),
    marginBottom: "0!important",
  },
  schedulesTxt: {
    overflowY: "hidden",
    textAlign: "left",
  },
  txtTitle: {
    ...theme.typography.subtitle2,
    color: theme.palette.text.primary,
    "& > span": {
      ...theme.typography.subtitle2,
    },
    "& .BHDStar": {
      color: theme.palette.text.bhdColor,
    },
    "& .CGV": {
      color: theme.palette.text.cgvColor,
    },
    "& .CineStar": {
      color: theme.palette.text.cnsColor,
    },
    "& .Galaxy": {
      color: theme.palette.text.galaxyColor,
    },
    "& .LotteCinima": {
      color: theme.palette.text.lotteColor,
    },
    "& .MegaGS": {
      color: theme.palette.text.megaColor,
    },
  },
  txtLocation: {
    ...theme.typography.body2,
    color: theme.palette.text.grey,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  txtLink: {
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    textDecoration: "none",
    display: "block",
  },
  tabsMovie: {
    flex: 1,
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
      ...theme.typography.h5,
      color: theme.palette.text.green,
    },
  },
  wrapperTabsMovie: {
    overflowX: "hidden",
    maxHeight: heightSchedulesComponent,
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
}));

export default Style;
