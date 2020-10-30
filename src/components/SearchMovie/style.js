const { makeStyles } = require("@material-ui/core");

const Style = makeStyles((theme) => ({
  input: {
    "& label": {
      ...theme.typography.subtitle2,
      color: theme.palette.text.grey,
    },
    "& span": {
      paddingLeft: 10,
      paddingRight: 10,
    },
    "& input": {
      ...theme.typography.subtitle2,
      color: theme.palette.text.dark,
      padding: "20px 14px",
    },
  },
  boxSearchMovie: {
    position: "relative",
  },
  boxSearchMovieItem: {
    position: "absolute",
    left: 0,
    width: "100%",
    zIndex: 10,
    background: theme.palette.primary.main,
  },
  listItem: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  ulList: {
    maxHeight: 330,
    overflow: "auto",
    paddingTop: 7,
    paddingBottom: 7,
    "&::-webkit-scrollbar": {
      width: 6,
      height: 6,
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "transparent",
      transition: "all 0.5s",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "transparent",
      transition: "all 0.5s",
      borderRadius: 200,
    },
    "&:hover": {
      "&::-webkit-scrollbar-track": {
        backgroundColor: "#f2f2f2",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: theme.palette.grey[400],
      },
      "&::-webkit-scrollbar-thumb:hover": {
        backgroundColor: theme.palette.grey[500],
      },
    },
  },
  avatar: {
    width: 60,
    marginRight: 20,
    height: "fit-content",
    "& img": {
      width: 60,
      objectFit: "cover",
    },
  },
  movieItemTxt: {
    "& >span": {
      ...theme.typography.h6,
      marginBottom: 2,
      color: theme.palette.text.secondary,
    },
    "& >p": {
      ...theme.typography.subtitle2,
      color: theme.palette.text.grey,
    },
  },
  imgErrors: {
    position: "relative",
    padding: 0,
    "& >img": {
      width: "100%",
      objectFit: "cover",
      objectPosition: "0 -80px",
    },
    "& >h4": {
      position: "absolute",
      top: 16,
      right: 68,
      "@media (max-width: 720px)": {
        fontSize: 24,
        right: 40,
      },
      "@media (max-width: 600px)": {
        fontSize: 20,
        right: 20,
      },
      "@media (max-width: 450px)": {
        fontSize: 16,
        top: "20px !important",
      },
      "@media (max-width: 375px)": {
        fontSize: 12,
        right: 5,
      },
    },
  },
  ulErrorList: {
    overflow: "hidden",
    maxHeight: 400,
    padding: 0,
  },
  txtTitleSearch: {
    display: "none",
    color: theme.palette.text.secondary,
    fontSize: 22,
    letterSpacing: 2,
    textAlign: "center",
    marginTop: 5,
    marginBottom: 10,
  },

  "@media (max-width: 960px)": {
    searchContainer: {
      maxWidth: 768,
    },
    txtTitleSearch: {
      display: "block",
    },
    input: {
      padding: "0 10px",
      "& label": {
        transform: "translate(20px, 20px) scale(1)",
      },
      "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
        transform: "translate(24px, -6px) scale(0.75)",
      },
    },
    boxSearchMovieItem: {
      width: "calc(100% - 20px)",
      left: "50%",
      transform: "translateX(-50%)",
    },
    imgErrors: {
      "& > img": {
        objectPosition: "inherit",
      },
      "& > h4": {
        top: 40,
      },
    },
  },
}));

export default Style;
