const HeightMovie = 350;
const { makeStyles } = require("@material-ui/core");

const Style = makeStyles((theme) => ({
  movieItemPoints: {
    position: "absolute",
    top: 12,
    right: 12,
    width: 54,
    backgroundColor: "rgba(12, 27, 54, 0.8)",
    border: "1px solid #1f2e46",
    borderRadius: 4,
    padding: "2px 0",
    textAlign: "center",
    pointerEvents: "none",
    "& > p": {
      color: theme.palette.text.white,
      margin: 0,
    },
  },
  movieItemStars: {
    display: "flex",
    justifyContent: "center",
    padding: `${theme.spacing(0.2)}px 0`,
    "& > img": {
      maxWidth: 8,
    },
  },
  movieItemBtnVideo: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 70,
    height: 70,
    opacity: 0,
    transition: "opacity 0.3s",
    "&:hover": {
      opacity: "0.7 !important",
    },
    "& > img": {
      width: "100%",
      objectFit: "cover",
      display: "block",
    },
  },
  movieItemBgLinear: {
    position: "absolute",
    top: "150%",
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(to top, #000, transparent 100%)",
    opacity: 0,
    transition: "all 0.4s",
    pointerEvents: "none",
  },
  movieItemDetail: {
    padding: "8px 0",
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
  movieItemContent: {
    overflow: "hidden",
    height: HeightMovie,
    maxHeight: HeightMovie,
    "& >img": {
      borderRadius: 4,
      height: "100%",
    },
  },
  movieItem: {
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
  },
}));

export default Style;
