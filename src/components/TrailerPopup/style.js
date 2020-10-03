const widthModal = 900;
const { makeStyles } = require("@material-ui/core");

const Style = makeStyles((theme) => ({
  modalVideo: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 100,
  },
  modalVideoOverplay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: theme.palette.background.blackBlur,
    opacity: 1,
    transition: "all 0.8s",
    zIndex: 1,
  },
  modalVideoContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: widthModal,
    opacity: 1,
    transition: "all 0.8s",
    zIndex: 2,
  },
  modalVideoWrapper: {
    position: "relative",
    paddingBottom: "56.25%",
    height: 0,
    "& > button": {
      position: "absolute",
      top: 0,
      right: 0,
      transform: "translate(50%, -50%)",
      border: "none",
      outline: "none",
      background: "transparent",
      padding: 0,
      minWidth: "fit-content",
      "& > img": {
        width: "100%",
        display: "block",
        borderRadius: "100%",
      },
      "&:hover": {
        "& > img": {
          opacity: 0.7,
        },
      },
    },
  },
  modalIframe: {
    "& > iframe": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    },
  },
}));

export default Style;
