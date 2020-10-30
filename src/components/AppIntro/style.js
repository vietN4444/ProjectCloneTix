import BackgroundBackApp from "../../assets/imgs/backapp.jpg";
const { makeStyles } = require("@material-ui/core");

const Style = makeStyles((theme) => ({
  appIntroContainer: {
    padding: "120px 0 80px 0",
    background: `url(${BackgroundBackApp})`,
    backgroundSize: "contain",
  },
  appIntroDetail: {
    paddingTop: 60,
    paddingLeft: 20,
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
      ...theme.typography.h6,
      fontFamily: "sfTextRegular",
      color: theme.palette.text.white,
      textTransform: "inherit",
      padding: "10px 20px",
      "& span": {
        fontWeight: 700,
      },
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

  "@media (max-width: 960px)": {
    container: {
      maxWidth: "100%",
      width: "100%",
      "& >div": {
        justifyContent: "center",
      },
    },
    appIntroContainer: {
      padding: 0,
      paddingBottom: 80,
    },
    appIntroDetail: {
      paddingLeft: 0,
      textAlign: "center",
      marginBottom: 20,
      "& > h1": {
        fontSize: 26,
        lineHeight: "46px",
      },
      "& .txtMiddle": {
        fontSize: 14,
        marginBottom: 22,
      },
    },
  },
  "@media (max-width: 600px)": {
    appIntroContainer: {
      paddingBottom: 40,
    },
    appIntroDetail: {
      padding: "0 10px",
      paddingTop: 40,
    },
  },
  "@media (max-width: 425px)": {
    appIntroDetail: {
      "& > h1": {
        fontSize: 22,
        lineHeight: "30px",
      },
    },
  },
}));

export default Style;
