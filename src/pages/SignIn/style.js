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
    maxWidth: 360,
    padding: "40px 32px 30px",
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
    "& > img": {
      width: 209,
      marginBottom: 20,
    },
  },
  buttonWrapper: {
    "& button": {
      width: 300,
      marginTop: 10,
    },
  },
  input: {
    background: "#fff",
    "& label": {
      color: "#333!important",
    },
    "& >div": {
      background: "#fff",
      "& input": {
        ...theme.typography.subtitle1,
        width: 270,
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
    fontSize: 11,
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
