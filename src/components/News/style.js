const { makeStyles } = require("@material-ui/core");

const Style = makeStyles((theme) => ({
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
  boxTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    "& > div": {
      cursor: "pointer",
      margin: "0 10px",
    },
  },
  subTitle: {
    color: theme.palette.text.grey,
    "& h4": {
      padding: "0 10px",
      fontSize: 18,
      transition: "all 0.3s",
    },
    "&:hover": {
      "& h4": {
        fontSize: 22,
      },
    },
  },

  newsItemList: {
    display: "flex",
    marginBottom: theme.spacing(1),
    position: "relative",
    "& > a": {
      textDecoration: "none",
      "&:first-child": {
        marginRight: theme.spacing(1),
      },
      "& > img": {
        width: 50,
        height: 50,
        borderRadius: 6,
      },
      "& > p": {
        ...theme.typography.subtitle1,
        fontSize: theme.typography.h6.fontSize,
        color: theme.palette.text.primary,
        display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "20px",
        height: 42,
        transition: "color 0.2s",
        marginBottom: 5,
        opacity: 0.7,
        cursor: "pointer",
        "&:hover": {
          color: theme.palette.text.secondary,
        },
      },
    },
    "& >img": {
      position: "absolute",
      width: "10%",
      top: 2,
      left: 2,
    },
  },
  btnViewMore: {
    textAlign: "center",
    marginBottom: 50,
    marginTop: 50,
    "& a": {
      ...theme.typography.subtitle1,
      color: theme.palette.text.grey,
      padding: "9px 25px",
      border: `1px solid ${theme.palette.text.grey}`,
      borderRadius: 4,
      transition: "all 0.2s",
      "&:hover": {
        backgroundColor: theme.palette.secondary.main,
        borderColor: theme.palette.text.secondary,
        color: theme.palette.text.white,
        textDecoration: "none",
      },
    },
  },
}));

export default Style;
