import backgroundImg from "../../assets/imgs/bglogin.jpg";
const { makeStyles } = require("@material-ui/core");

const Style = makeStyles((theme) => ({
  login: {
    width: "100vw",
    height: "100vh",
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
    width: "90%",
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
}));

export default Style;
