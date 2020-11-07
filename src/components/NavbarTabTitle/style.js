const { makeStyles } = require("@material-ui/core");

const Style = makeStyles((theme) => ({
  boxTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
    "& > div": {
      cursor: "pointer",
      margin: "0 10px",
    },
  },
  subTitle: {
    color: theme.palette.text.grey,
    "& h4": {
      fontSize: 18,
      transition: "all 0.2s",
    },
    "&:hover": {
      "& h4": {
        fontSize: 22,
      },
    },
  },
  subTitleDetailPage: {
    color: theme.palette.text.white,
  },
  title: {
    "& h4": {
      width: "fit-content",
      margin: "0 auto",
      padding: "0 10px",
      color: theme.palette.text.secondary,
      fontSize: 22,
      letterSpacing: 2,
      position: "relative",
    },
  },
  "@media (max-width: 375px)": {
    title: {
      "& h4": {
        fontSize: 18,
        padding: 0,
      },
    },
    subTitle: {
      "& h4": {
        fontSize: 16,
      },
      "&:hover": {
        "& h4": {
          fontSize: 16,
        },
      },
    },
  },
}));

export default Style;
