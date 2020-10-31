const { makeStyles } = require("@material-ui/core");

const Style = makeStyles((theme) => ({
  toTop: {
    position: "absolute",
    bottom: "5px",
    right: "5px",
    padding: 6,
    "@media (max-width: 768px)": {
      "& img": {
        width: 24,
        height: 24,
      },
    },
  },
  container: {
    position: "fixed",
    top: theme.props.heightHeader,
    left: 0,
    width: "100%",
    height: "100vh",
    display: "block",
    zIndex: 6,
    background: "#fff",
    "& img": {
      margin: "0 auto",
      display: "block",
    },
  },
}));

export default Style;
