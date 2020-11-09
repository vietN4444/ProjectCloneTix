const widthHeightAvatarComments = 36;

const { makeStyles } = require("@material-ui/core");

const Style = makeStyles((theme) => ({
  body: {
    background: theme.palette.background.blueDark,
  },
  sliderWrapper: {
    position: "relative",
    overflow: "hidden",
    "& > img": {
      width: "100%",
      display: "block",
      maxHeight: 560,
    },
  },
  sliderMobileContainter: {
    marginBottom: 30,
  },
  sliderMobile: {
    position: "relative",
    overflow: "hidden",
    "& > img": {
      width: "100%",
      display: "block",
      maxHeight: 300,
    },
    "& iframe": {
      width: "100%",
      marginBottom: 10,
    },
  },
  slider: {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    background: `linear-gradient(to top, ${theme.palette.background.blueDark}, transparent 100%)`,
    display: "flex",
  },
  gridContainer: {
    margin: "auto",
    maxWidth: theme.props.widthGridDetailPage,
    width: theme.props.widthGridDetailPage,
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
  },
  filmItem: {
    position: "relative",
  },
  filmDetail: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    left: "10px",
  },
  filmDetailContent: {
    marginBottom: 24,
    color: theme.palette.text.white,
    "& >p": {
      ...theme.typography.h6,
      fontSize: theme.typography.subtitle1.fontSize,
      color: theme.palette.text.lightGrey,
    },
  },
  filmDetailTitle: {
    display: "flex",
    alignItems: "center",
    "& > span": {
      ...theme.typography.h6,
      margin: "6px 0",
      marginRight: 6,
      backgroundColor: theme.palette.secondary.main,
      borderRadius: 4,
      padding: "0 6px",
      textAlign: "center",
      minWidth: 33,
      lineHeight: 1.42857143,
    },
    "& > p": {
      ...theme.typography.h4,
      fontSize: 24,
    },
  },
  filmDetailBtn: {
    ...theme.typography.h6,
    padding: "7px 25px",
    textTransform: "initial",
  },
  filmItemEvaluate: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  filmItemCircleProgress: {
    width: "100%",
    textAlign: "center",
    position: "relative",
    marginBottom: 8,
    "& >p": {
      ...theme.typography.subtitle2,
      fontSize: 52,
      color: theme.palette.text.white,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
    },
  },
  progressCircle: {
    width: "64%",
    background: theme.palette.background.blackBlur,
    borderRadius: "50%",
    "& .CircularProgressbar-trail": {
      stroke: theme.palette.background.blackBlur,
    },
    "& .CircularProgressbar-path": {
      stroke: theme.palette.background.green,
      strokeWidth: 7,
    },
  },
  star: {
    marginTop: 4,
    marginBottom: 10,
    textAlign: "center",
    "& > img": {
      maxWidth: 25,
      margin: "0 2px",
    },
  },
  txtVote: {
    ...theme.typography.subtitle2,
    color: theme.palette.text.lightGrey,
    textAlign: "center",
  },
  tabStatsItem: {
    "& p": {
      ...theme.typography.h6,
      color: theme.palette.text.lightGrey,
      fontSize: theme.typography.subtitle1.fontSize,
      marginBottom: 16,
    },
    "& .mainTitle": {
      color: theme.palette.text.white,
    },
    "& > ul": {
      listStyle: "none",
      margin: 0,
      padding: 0,
      "& > li": {
        display: "flex",
        "& > p:first-child": {
          width: "35%",
        },
        "& > p:last-child": {
          width: "40%",
        },
      },
    },
  },
  contentTab: {
    paddingBottom: 60,
  },
  tabComments: {
    maxWidth: 580,
    margin: "0 auto",
  },
  tabCommentsHeader: {
    background: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    borderRadius: 5,
    padding: "12px 18px",
    "& > img": {
      height: widthHeightAvatarComments,
      width: widthHeightAvatarComments,
      borderRadius: "50%",
      marginRight: 10,
    },
    "& > p": {
      ...theme.typography.subtitle2,
      color: theme.palette.grey[700],
    },
  },
  tabCommentStars: {
    marginLeft: "auto",
  },
  playvideo: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
  backgroundOverplay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "linear-gradient(to top, rgb(10, 32, 41), transparent 100%)",
    top: 0,
  },
  sliderMobileTxt: {
    padding: "0 15px",
    "& > p": {
      ...theme.typography.subtitle2,
      color: theme.palette.grey[500],
      margin: 0,
    },
    "& > h2": {
      ...theme.typography.h4,
      color: theme.palette.text.lightGrey,
      margin: "4px 0",
      lineHeight: 1.2,
    },
  },
  txtErrTrailer: {
    ...theme.typography.subtitle2,
    color: theme.palette.text.white,
    textAlign: "center",
  },

  "@media (max-width: 960px)": {
    gridContainer: {
      maxWidth: "100%",
      width: "100%",
      padding: "0 20px",
    },
  },
  "@media (max-width: 850px)": {
    filmContainer: {
      "& > div:nth-child(1)": {
        maxWidth: "28%",
        flexBasis: "28%",
      },
      "& > div:nth-child(2)": {
        maxWidth: "47%",
        flexBasis: "47%",
      },
    },
  },
  "@media (max-width: 800px)": {
    filmContainer: {
      "& > div:nth-child(1)": {
        maxWidth: "30%",
        flexBasis: "30%",
      },
      "& > div:nth-child(2)": {
        maxWidth: "45%",
        flexBasis: "45%",
      },
    },
  },
  "@media (max-width: 600px)": {
    tabStatsItem: {
      width: "100%",
    },
  },
  "@media (max-width: 600px)": {
    tabStatsItem: {
      "& > ul": {
        "& > li": {
          "& > p": {
            width: "50%!important",
          },
        },
      },
    },
    sliderMobile: {
      "&  iframe": {
        height: 280,
      },
    },
  },
  "@media (max-width: 500px)": {
    tabCommentStars: {
      "& >img": {
        width: 80,
      },
    },
    tabComments: {
      margin: "0 -10px",
    },
  },
}));

export default Style;
