import BackgroundBackApp from "../../assets/imgs/backapp.jpg";
import { Textfunc } from "../../helpers/mxins";
const { makeStyles } = require("@material-ui/core");

const Style = makeStyles((theme) => ({
  appIntroContainer: {
    padding: "120px 0 80px 0",
    background: `url(${BackgroundBackApp})`,
    backgroundSize: "contain",
  },
  appIntroDetail: {
    paddingTop: 60,
    "& > h1": {
      lineHeight: "56px",
      marginBottom: 26,
      color: theme.palette.text.white,
    },
    "& .txtMiddle": {
      color: theme.palette.text.white,
      fontFamily: `"sfTextRegular"`,
      marginBottom: 30,
      wordSpacing: 1,
    },
    "& > a": {
      ...Textfunc(
        theme.typography.h6.fontSize,
        "sfTextRegular",
        400,
        theme.palette.text.white
      ),
      textTransform: "inherit",
      padding: "7px 14px",
    },
    "& .txtBottom": {
      marginTop: theme.spacing(1),
      color: theme.palette.text.white,
      "& > a": {
        textDecoration: "none",
        color: theme.palette.text.white,
        borderBottom: `1px solid ${theme.palette.text.white}`,
      },
    },
  },
  appIntroMobileScreen: {
    padding: 0,
    position: "relative",
    "& > img": {
      boxSizing: "border-box",
      padding: "0 28%",
      width: "100%",
    },
  },
  appIntroSlider: {
    position: "absolute",
    padding: "1.5% 29.3% 0 29.3%",
    top: 0,
    left: 0,
    width: "100%",
    boxSizing: "border-box",
    "& .slick-list": {
      borderRadius: 20,
    },
  },
  appIntroSliderItem: {
    width: "100%",
    "& > img": {
      width: "100%",
    },
  },
}));

export default Style;
