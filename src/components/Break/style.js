const { makeStyles } = require("@material-ui/core");

const Style = makeStyles((theme) => ({
  break: {
    "& img": {
      width: "100%",
      height: 120,
      objectFit: "cover",
      display: "block",
    },
  },
}));

export default Style;
