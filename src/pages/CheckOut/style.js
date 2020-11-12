const heightHeader = 80;
const heightBtn = 60;

const { makeStyles } = require("@material-ui/core");

const Style = makeStyles((theme) => ({
  header: {
    width: "100%",
    height: heightHeader,
  },
  headerContainer: {
    background: theme.palette.primary.main,
    position: "fixed",
    top: 0,
    left: 0,
    width: "75%",
    height: heightHeader,
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
    zIndex: 4,
  },
  headerWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
  },
  containerLeft: {
    display: "flex",
    height: "100%",
    alignItems: "center",
    paddingLeft: 40,
    "& > p": {
      ...theme.typography.h6,
      fontSize: theme.typography.body2.fontSize,
      color: theme.palette.text.dark,
      lineHeight: `${heightHeader}px`,
      margin: "0 30px",
      position: "relative",
      "& > span": {
        ...theme.typography.h6,
        fontSize: theme.typography.h5.fontSize,
        marginRight: 5,
      },
      "&.active": {
        color: theme.palette.text.secondary,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          width: "100%",
          borderTop: `2px solid ${theme.palette.secondary.main}`,
          display: "block",
        },
      },
    },
  },
  containerRight: {
    marginRight: "4%",
    cursor: "pointer",
    height: "100%",
    display: "flex",
    alignItems: "center",
    "& > div": {
      width: 30,
      height: 30,
      marginRight: theme.spacing(1),
    },
    "& > span": {
      ...theme.typography.subtitle1,
      color: theme.palette.grey[500],
    },
  },

  checkOutContainer: {
    height: `calc(100vh - ${heightHeader})`,
  },
  checkOutRightContainer: {
    position: "fixed",
    top: 0,
    right: 0,
    width: "26%",
    height: "100vh",
    background: theme.palette.primary.main,
    zIndex: 5,
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
  },
  checkOutRightContent: {
    minHeight: `calc(100% - ${heightBtn}px)`,
    overflowY: "scroll",
    padding: "0 5%",
    paddingBottom: 40,
    "&::-webkit-scrollbar": {
      width: 4,
    },
    "&::-webkit-scrollbar-track": {
      background: "#e9e9e9",
    },
    "&::-webkit-scrollbar-thumb": {
      background: theme.palette.background.whiteGrey,
      borderRadius: 200,
    },
  },
  checkOutRightItem: {
    display: "flex",
    alignItems: "center",
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
  checkOutRightPrice: {
    height: heightHeader,
    "& > p": {
      ...theme.typography.h6,
      fontSize: 34,
      color: theme.palette.text.greenPrice,
      width: "100%",
      textAlign: "center",
      margin: 0,
    },
  },
  checkOutRightDetail: {
    alignItems: "flex-start",
    flexDirection: "column",
    justifyContent: "center",
    padding: `15px 0`,
    "& .detailName": {
      display: "flex",
      alignItems: "center",
      marginBottom: theme.spacing(0.4),
      "& .nameTag": {
        ...theme.typography.h6,
        fontSize: theme.typography.subtitle1.fontSize,
        color: theme.palette.text.white,
        background: theme.palette.secondary.main,
        borderRadius: 4,
        padding: 5,
        float: "left",
        marginRight: 5,
        verticalAlign: 2,
        minWidth: 33,
        textAlign: "center",
        lineHeight: 0.8,
      },
      "& > span:last-child": {
        ...theme.typography.h6,
        fontSize: theme.typography.subtitle1.fontSize,
        color: theme.palette.text.dark,
      },
    },
    "& > p ": {
      ...theme.typography.subtitle1,
      color: theme.palette.text.dark,
      margin: 0,
    },
  },

  checkOutRightChair: {
    padding: "16px 0",
    justifyContent: "space-between",
    "& > span:first-child": {
      ...theme.typography.subtitle1,
      color: theme.palette.text.secondary,
      lineHeight: 0.8,
    },
    "& > span:last-child": {
      ...theme.typography.h6,
      fontSize: theme.typography.subtitle1.fontSize,
      color: theme.palette.text.greenPrice,
      lineHeight: 0.8,
    },
  },

  checkOutRightCombo: {
    padding: "12px 0",
    paddingTop: theme.spacing(2.2),
    justifyContent: "space-between",
    cursor: "pointer",
    "& > span": {
      ...theme.typography.body1,
      fontSize: theme.typography.body2.fontSize,
      color: theme.palette.text.primary,
      lineHeight: 0.8,
      "&:first-child": {
        display: "flex",
        alignItems: "center",
      },
      "& > img": {
        width: 17,
        height: 22,
        marginRight: 9,
      },
      "&:last-child": {
        ...theme.typography.h6,
        fontSize: theme.typography.subtitle1,
        color: theme.palette.text.greenPrice,
      },
    },
  },

  input: {
    "& .MuiInputLabel-formControl": {
      top: "50%",
      transform: "translate(0, -50%) scale(1)",
    },
    "& .MuiInputLabel-shrink": {
      top: 0,
      transformOrigin: "top left",
      transform: "translate(0, 0)",
      fontSize: 12,
    },
    "& label": {
      transition: "all 0.2s",
    },
  },

  checkOutRightInput: {
    paddingTop: 12,
    "& > div": {
      width: "100%",
      "& > div": {
        marginTop: 10,
        "&:hover": {
          "&::before": {
            content: '""',
            border: "none!important",
          },
        },
        "&::before": {
          content: '""',
          border: "none",
        },
        "&::after": {
          content: '""',
          border: "none!important",
        },
        "& input": {
          ...theme.typography.subtitle1,
          color: theme.palette.text.dark,
        },
      },
      "& > label": {
        ...theme.typography.subtitle1,
        color: theme.palette.grey[500],
      },
      "& .MuiFormLabel-root.Mui-focused": {
        color: theme.palette.text.blue,
      },
    },
    "&.checkOutCoupon": {
      position: "relative",
      "& > button": {
        minWidth: 68,
        padding: "6px 10px",
        position: "absolute",
        right: 0,
        top: "50%",
        transform: "translateY(-50%)",
        "&.MuiButton-contained.Mui-disabled": {
          backgroundColor: theme.palette.grey[600],
        },
        "& > span": {
          ...theme.typography.body1,
          color: theme.palette.text.white,
          textTransform: "none",
        },
      },
    },
  },

  checkOutRightNotice: {
    position: "absolute",
    bottom: 60,
    left: 0,
    zIndex: 2,
    background: theme.palette.primary.main,
    width: "calc(100% - 4px)",
    marginTop: "auto",
    textAlign: "center",
    padding: "0 5%",
    paddingBottom: 14,
    "& > svg": {
      marginRight: 4,
      width: 18,
      height: 18,
      fill: theme.palette.secondary.main,
      position: "relative",
      top: "3px",
      "& > span": {
        ...theme.typography.body1,
        fontSize: theme.typography.body2.fontSize,
        color: theme.palette.text.darkLight,
        "& > span": {
          color: theme.palette.text.ogrange,
        },
      },
    },
  },
  checkOutRightBtn: {
    height: heightBtn,
    "& > button": {
      width: "100%",
      height: "100%",
      "&.MuiButton-contained.Mui-disabled": {
        backgroundColor: theme.palette.grey[600],
      },
      "& > span": {
        ...theme.typography.h4,
        fontSize: 22,
        color: theme.palette.text.lightGrey,
        textTransform: "none",
      },
    },
  },
}));

export default Style;
