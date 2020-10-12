import nextSession from "../../assets/imgs/next-session.png";
import backSession from "../../assets/imgs/back-session.png";
const { makeStyles } = require("@material-ui/core");

const Style = makeStyles((theme) => ({
  movieListContainer: {
    paddingBottom: 20,
  },
  pagination: {
    maxWidth: "fit-content",
  },
  title: {
    "& h4": {
      width: "fit-content",
      margin: "0 auto",
      padding: "0 10px",
      color: theme.palette.text.secondary,
      fontSize: 22,
      letterSpacing: 2,
      position: "relative",
    },
  },
  slider: {
    position: "relative",
    "& .slick-arrow": {
      height: 100,
      zIndex: 2,
      width: theme.props.widthSliderBtn,
    },
    "& .slick-next": {
      right: "-100px",
      "&::before": {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: 50,
        height: 50,
        content: '""',
        background: `url(${nextSession}) no-repeat`,
        display: "block",
        backgroundSize: "cover",
      },
    },
    "& .slick-prev": {
      left: "-100px",
      "&::before": {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: 50,
        height: 50,
        content: '""',
        background: `url(${backSession}) no-repeat`,
        display: "block",
        backgroundSize: "cover",
      },
    },
  },
  boxTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
    "& > div": {
      cursor: "pointer",
      margin: "0 10px",
    },
  },
  subTitle: {
    color: theme.palette.text.grey,
    "& h4": {
      fontSize: 18,
      transition: "all 0.2s",
    },
    "&:hover": {
      "& h4": {
        fontSize: 22,
      },
    },
  },
}));

export default Style;
