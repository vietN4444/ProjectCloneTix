const HeightMovie = 320;
const { makeStyles } = require("@material-ui/core");

const Style = makeStyles((theme) => ({
  movieItemContent: {
    overflow: "hidden",
    height: HeightMovie,
    maxHeight: HeightMovie,
    "& >img": {
      borderRadius: 4,
      height: "100%",
      objectFit: "fill",
    },
  },
  movieItemBgLinear: {
    position: "absolute",
    top: "150%",
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(to top, #000, transparent 100%)",
    opacity: 0,
    transition: "all 0.4s",
    pointerEvents: "none",
  },
  movieItemBtnVideo: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 70,
    height: 70,
    opacity: 0,
    transition: "opacity 0.3s",
    "&:hover": {
      opacity: "0.7 !important",
    },
    "& > img": {
      width: "100%",
      objectFit: "cover",
      display: "block",
    },
  },
  "@media (max-width: 736px)": {
    movieItemContent: {
      "& >img": {
        objectFit: "fill",
      },
    },
    movieItemBtnVideo: {
      display: "none",
    },
  },
  "@media (max-width: 400px)": {
    movieItemContent: {
      height: 200,
      maxHeight: 200,
      "& >img": {
        objectFit: "fill",
      },
    },
  },
}));

export default Style;
