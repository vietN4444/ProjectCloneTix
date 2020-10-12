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
}));

export default Style;
