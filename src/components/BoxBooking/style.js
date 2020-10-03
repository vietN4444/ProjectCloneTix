import { Textfunc } from "../../helpers/mxins";
import { makeStyles } from "@material-ui/core";

const heightBooking = 80;

const Style = makeStyles((theme) => ({
  bookingWrapper: {
    position: "relative",
  },
  bookingContainer: {
    height: heightBooking,
    width: "100%",
    margin: 0,
    background: theme.palette.primary.main,
    borderRadius: 5,
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
    top: 0,
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 4,
    position: "relative",
  },
  bookingItem: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    "&::after": {
      content: '""',
      height: "50%",
      width: 1,
      background: "rgba(238, 238, 238, 0.88)",
      display: "block",
      position: "absolute",
      right: 0,
      top: "50%",
      transform: "translateY(-50%)",
    },
  },
  bookingLabel: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "7%",
    paddingRight: "4%",
    cursor: "pointer",
    userSelect: "none",
    "&> p": {
      //   @include Text(SF_Text_Regular, $textPrimary, $subtitle, $fwRegular);
      color: theme.palette.text.primary,
      margin: 0,
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
    },
    "&> img": {
      width: 10,
    },
  },
  bookingButton: {
    padding: theme.spacing(0.6),
    "& button": {
      ...Textfunc(
        14,
        "sfTextRegular",
        400,
        `${theme.palette.text.white}!important`
      ),
      background: theme.palette.grey[800],
    },
  },
  bookingDropdownList: {
    display: "none",
    position: "absolute",
    left: 0,
    top: "80%",
    minWidth: 260,
    background: theme.palette.primary.main,
    zIndex: 1000,
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.175)",
    border: "1px solid rgba(0, 0, 0, 0.15)",
    borderRadius: 4,
    "& > ul": {
      padding: `${theme.spacing(0.5)}px 0`,
      listStyle: "none",
      margin: 0,
      maxHeight: 300,
      overflowX: "hidden",
      "&::-webkit-scrollbar": {
        width: 4,
        borderRadius: 200,
      },
      "&::-webkit-scrollbar-track": {
        background: "#f1f1f1",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "#ccc",
        borderRadius: 200,
      },
      "& > li": {
        ...Textfunc(14, "sfTextRegular", 400, theme.palette.text.dark),
        padding: "3px 20px",
        cursor: "pointer",
        transition: "all 0.3s",
        lineHeight: 1.42857143,
        "&:hover": {
          background: theme.palette.background.blue,
          color: theme.palette.text.white,
        },
      },
    },
  },
  selecteMovie: {
    "& #selecteMovie": {
      minWidth: 400,
    },
  },
}));

export default Style;
