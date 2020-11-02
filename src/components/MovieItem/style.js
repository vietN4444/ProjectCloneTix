const { makeStyles } = require("@material-ui/core");

const Style = makeStyles((theme) => ({
  movieItemDetail: {
    padding: "8px 0",
    overflow: "hidden",
  },
  movieItemDetailContainer: {
    padding: "0 8px",
    position: "relative",
    width: "100%",
  },
  movieItemDetailName: {
    height: 42,
    maxHeight: 42,
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
    textOverflow: "ellipsis",
    "& > p": {
      fontFamily: "sfMedium",
      color: theme.palette.text.white,
      display: "inline-block",
      borderRadius: 4,
      background: theme.palette.secondary.main,
      textAlign: "center",
      minWidth: 33,
      padding: "0 5px",
      marginBottom: 0,
      marginRight: theme.spacing(0.8),
    },
    "> span": {
      color: theme.palette.text.primary,
    },
  },
  movieItemButton: {
    display: "block",
    position: "absolute",
    top: 0,
    right: "100%",
    width: "100%",
    opacity: 0,
    transition: "all 0.5s",
  },
  movieItem: {
    overflow: "unset",
    "&:hover .btnVideo": {
      opacity: 1,
    },
    "&:hover .bgLinear": {
      opacity: 1,
      top: 0,
    },
    "&:hover .itemButton": {
      opacity: 1,
      right: 0,
    },
    "&:hover > button": {
      boxShadow:
        "0 4px 10px 2px rgba(66,66,66,0.8), 0 5px 8px 0px rgba(0,0,0,0.14), 0 5px 10px 0px rgba(0,0,0,0.12)",
    },
  },
}));

export default Style;
