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
  "@media (max-width: 1160px)": {
    movieListContainer: {
      padding: 10,
    },
    slider: {
      "& .slick-arrow": {
        height: 50,
        width: 50,
      },
      "& .slick-next": {
        right: 0,
        "&::before": {
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: 35,
          height: 35,
          content: '""',
          background: `url(${nextSession}) no-repeat`,
          display: "block",
          backgroundSize: "cover",
        },
      },
      "& .slick-prev": {
        left: 0,
        "&::before": {
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: 35,
          height: 35,
          content: '""',
          background: `url(${backSession}) no-repeat`,
          display: "block",
          backgroundSize: "cover",
        },
      },
    },
  },
  mobileMovieList: {
    textAlign: "center",
  },
  btnViewMore: {
    padding: "8px 20px",
    marginBottom: 15,
    marginTop: 15,
    "& > span": {
      ...theme.typography.subtitle1,
    },
  },

  "@media (max-width: 960px)": {
    movieListContainer: {
      maxWidth: 736,
    },
  },
  "@media (max-width: 736px) and (min-width: 500px)": {
    movieListWrapper: {
      padding: "0 20px",
    },
  },
  "@media (max-width: 600px)": {
    gridItem: {
      maxWidth: "50%",
      flexBasis: "50%",
    },
  },
}));

export default Style;
