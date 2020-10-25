const { makeStyles } = require("@material-ui/core");

const Style = makeStyles((theme) => ({
  newsItem: {
    position: "relative",
    "& >a": {
      textDecoration: "none",
      "& >p": {
        ...theme.typography.h6,
        color: theme.palette.text.primary,
        display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "20px",
        height: 40,
        transition: "color 0.2s",
        marginBottom: 5,
        "&:hover": {
          color: theme.palette.text.secondary,
        },
      },
    },
    "& > p": {
      ...theme.typography.body1,
      color: theme.palette.text.darkLight,
      textAlign: "justify",
      padding: "0 5px 0 0",
      lineHeight: "19px",
      display: "-webkit-box",
      WebkitLineClamp: 2,
      overflow: "hidden",
      textOverflow: "ellipsis",
      height: 55,
      marginBottom: 15,
    },
  },
  newsImg: {
    marginBottom: theme.spacing(1),
    "& img": {
      borderRadius: 6,
      width: "100%",
      display: "block",
    },
  },
  imgLogo: {
    position: "absolute",
    width: "20%",
    top: 5,
    right: 5,
  },
  imgLogoReview: {
    position: "absolute",
    width: "8%",
    top: 0,
    right: 5,
  },
}));

export default Style;
