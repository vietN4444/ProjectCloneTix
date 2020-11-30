import backgroundImg from "../../assets/imgs/bglogin.jpg";
const { makeStyles } = require("@material-ui/core");

const Style = makeStyles((theme) => ({
  login: {
    // width: "100vw",
    height: "120vh",
    background: `url(${backgroundImg})`,
    backgroundSize: "contain",
  },
  loginWrapper: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  loginContainer: {
    maxWidth: 420,
    padding: "24px 32px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundImage: `linear-gradient(
      to bottom,
      rgba(20, 50, 93, 0.9),
      rgba(8, 22, 48, 0.9)
    )`,
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.45)",
    textAlign: "center",
    color: "#fff",
    borderRadius: "6px",
  },
  loginLogo: {
    "& a": {
      display: "block",
      margin: "0 auto",
      width: "fit-content",
      marginBottom: 15,
    },
    "& img": {
      width: 180,
    },
  },
  buttonWrapper: {
    "& button": {
      width: 300,
      marginTop: 10,
    },
  },
  input: {
    width: "100%",
    background: "#fff",
    "& input": {
      color: theme.palette.text.dark,
    },
    "& label": {
      color: `${theme.palette.text.grey}!important`,
    },
    "& >div": {
      background: "#fff",
      "& input": {
        ...theme.typography.subtitle1,
        padding: "27px 12px 10px",
      },
    },
    "& .MuiInputBase-formControl": {
      "&:after": {
        border: "none",
      },
    },

    "&.inputError > div": {
      background: theme.palette.background.redRgba,
      "& > input:-webkit-autofill": {
        WebkitBoxShadow: `0 0 0 30px ${theme.palette.background.redRgba} inset`,
      },
    },
  },
  txtInfo: {
    fontSize: 12,
  },
  txtSubtitle: {
    marginTop: 10,
    "& > p": {
      ...theme.typography.subtitle2,
      fontSize: 13,
      "& > a": {
        color: theme.palette.text.white,
      },
    },
  },
  wrapperInput: {
    position: "relative",
  },
  wrapperAlert: {
    position: "absolute",
    padding: 10,
    top: "-5px",
    right: "15px",
    background: theme.palette.primary.main,
    transform: "translate(50%,-50%)",
    boxShadow: "0px 0px 10px 1px rgba(0,0,0,0.75)",
    borderRadius: 200,
    width: 200,
    "&:after": {
      content: "''",
      borderWidth: 14,
      borderColor: "#fff transparent transparent transparent",
      borderStyle: "solid",
      position: "absolute",
      bottom: "-22px",
      left: "15px",
    },
    "& > p": {
      color: theme.palette.text.secondary,
      fontWeight: 700,
    },
  },
  boxInput: {
    flexGrow: 0,
    maxWidth: "100%",
    flexBasis: "100%",
  },
  "@media (max-width: 960px)": {
    wrapperAlert: {
      left: "100%",
      width: 200,
      transform: "translate(-50%,-50%)",
    },
  },
  "@media (max-width: 520px)": {
    wrapperAlert: {
      left: "75%",
    },
  },
  "@media (max-width: 360px)": {
    loginContainer: {
      maxWidth: "100%",
    },
    wrapperAlert: {
      width: 170,
      left: "75%",
    },
  },
}));

export default Style;
