import nextSession from "../../assets/imgs/next-session.png";
import backSession from "../../assets/imgs/back-session.png";

const { makeStyles } = require("@material-ui/core");

const Style = makeStyles((theme) => ({
  backgroundLinear: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(to top, #000, transparent 20%)",
    zIndex: 3,
    pointerEvents: "none",
  },
  sliderContentItem: {
    "& >img": {
      width: "100%",
      objectFit: "fill",
      maxHeight: 562,
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
      right: 0,
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
      left: 0,
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
    "& .slick-dots": {
      bottom: "16%",
      "& > li": {
        width: 12,
        height: 12,
        background: theme.palette.grey[400],
        borderRadius: "100%",
        "& > button": {
          width: "100%",
          height: "100%",
          "&::before": {
            content: '""',
          },
        },
      },
      "& .slick-active": {
        background: theme.palette.secondary.main,
      },
    },
  },

  "@media (max-width: 1200px)": {
    sliderContentItem: {
      "& >img": {
        width: "100%",
        maxHeight: 450,
      },
    },
  },
  "@media (max-width: 900px)": {
    sliderContentItem: {
      "& >img": {
        width: "100%",
        maxHeight: 370,
      },
    },
  },
}));

export default Style;
