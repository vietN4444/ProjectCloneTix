const widthModalTrailer = 900;
const widthModalComments = 780;
const { makeStyles } = require("@material-ui/core");

const Style = makeStyles((theme) => ({
  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 100,
  },
  modalOverplay: {
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
    width: widthModalTrailer,
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
  modalComments: {
    position: "relative",
    paddingBottom: "40.25%",
    height: 0,
    background: theme.palette.primary.main,
    borderRadius: 6,
    "& > button": {
      position: "absolute",
      top: 0,
      right: 0,
      "& svg": {
        width: 18,
        height: 18,
      },
    },
    "& > button.btnSubmit": {
      ...theme.typography.h6,
      fontSize: theme.typography.subtitle2.fontSize,
      top: "inherit",
      bottom: "30px",
      right: "20px",
      padding: "8px 29px",
      backgroundImage: "linear-gradient(-226deg,#fb4226 11%,#be2912 100%)",
    },
  },
  modalCommentsContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: widthModalComments,
    opacity: 1,
    transition: "all 0.8s",
    zIndex: 2,
  },
  voteComments: {
    textAlign: "center",
    padding: 16,
    marginBottom: 0,
    "& .MuiRating-root": {
      color: theme.palette.secondary.main,
      fontSize: 36,
    },
    "& > p": {
      ...theme.typography.h2,
      color: theme.palette.text.greenLight,
      fontWeight: 400,
      lineHeight: 1,
    },
  },
  wrapperInput: {
    width: "calc(100% - 40px)",
    margin: "0 auto",
  },
  input: {
    width: "100%",
    "& > label": {
      color: theme.palette.text.grey,
    },
    "& textarea": {
      ...theme.typography.h6,
      fontFamily: "inherit",
      color: theme.palette.text.dark,
      "&::placeholder": {
        color: theme.palette.text.dark,
      },
    },
  },
  txtError: {
    ...theme.typography.subtitle2,
    color: theme.palette.text.secondary,
    margin: "8px 0",
    textAlign: "center",
  },
}));

export default Style;
