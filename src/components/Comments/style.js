const { makeStyles } = require("@material-ui/core");

const Style = makeStyles((theme) => ({
  tabCommentItem: {
    padding: 20,
    paddingBottom: 14,
    background: theme.palette.primary.main,
    marginTop: 16,
    borderRadius: 5,
  },
  tabCommentItemHeader: {
    display: "flex",
  },
  tabCommentsItemAvatar: {
    width: "max-content",
    height: "max-content",
    "& > img": {
      height: 32,
      width: 32,
      borderRadius: "50%",
    },
  },
  tabCommentItemInfo: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 10,
    height: "max-content",
    "& > div": {
      display: "flex",
      alignItems: "center",
      "& > p": {
        marginRight: 2,
        ...theme.typography.h6,
        fontSize: theme.typography.subtitle1.fontSize,
        color: theme.palette.text.primary,
      },
      "& > img": {
        height: 18,
        width: 18,
      },
    },
    "& > span": {
      ...theme.typography.h6,
      fontSize: 10,
      color: theme.palette.grey[500],
      lineHeight: "10px",
    },
  },
  tabCommentItemStar: {
    marginLeft: "auto",
    textAlign: "center",
    "& > span": {
      ...theme.typography.subtitle2,
      fontSize: theme.typography.h6.fontSize,
      color: theme.palette.text.greenGem,
    },
    "& > div": {
      margin: 0,
      marginTop: 4,
      display: "flex",
      justifyContent: "center",
      "& > img": {
        maxWidth: 8,
        height: "auto",
      },
    },
  },
  tabCommentItemBody: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    "& > p": {
      ...theme.typography.h6,
      fontFamily: "inherit",
      padding: "20px 0",
    },
  },
  tabCommentItemFooter: {
    marginTop: 10,
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    width: "max-content",
    "&:hover": {
      "& > svg": {
        transform: "scale(1.2)",
      },
    },
    "& > svg": {
      transition: "all 0.2s",
      fill: theme.palette.grey[500],
      width: 16,
    },
    "& > span": {
      ...theme.typography.subtitle2,
      color: theme.palette.text.greyDark,
      fontWeight: 700,
      marginLeft: 10,
      marginRight: 4,
    },
    "& > p": {
      ...theme.typography.subtitle2,
      color: theme.palette.text.greyDark,
    },
  },
  iconChecked: {
    "& > svg": {
      fill: `${theme.palette.text.green}!important`,
    },
    "& > span": {
      color: theme.palette.text.green,
    },
    "& > p": {
      color: theme.palette.text.green,
    },
  },
}));

export default Style;
