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
}));

export default Style;
