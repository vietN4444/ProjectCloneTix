import { Textfunc } from "../../helpers/mxins";
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
      fontSize: 26,
      letterSpacing: 2,
      position: "relative",
      textShadow: `
     /* This set has more blur distance to create glowing effect */
     1px -1px 10px rgba(255, 255, 255, 0.7), 
     0px -1px 10px rgba(255, 255, 255, 0.7),  
    -1px -1px 10px rgba(255, 255, 255, 0.7), 
     0px -2px 3px #fff, 
    -1px -2px 3px #fff, 
    -2px -2px 3px #fff,
     
     /* This set has darken color to create depth */
    -2px -2px 2px ${theme.palette.text.grey}, 
    -3px -2px 2px ${theme.palette.text.grey}, 
    -4px -2px 2px ${theme.palette.text.grey},
    -3px -5px 1px ${theme.palette.text.white}, 
    -4px -5px 1px ${theme.palette.text.white}, 
    -5px -5px 1px ${theme.palette.text.white};`,
    },
  },
  input: {
    "& label": {
      ...Textfunc(14, "sfTextRegular", 400, theme.palette.text.dark),
    },
    "& span": {
      paddingLeft: 10,
      paddingRight: 10,
    },
    "& input": {
      ...Textfunc(14, "sfTextRegular", 400, theme.palette.text.dark),
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
}));

export default Style;
