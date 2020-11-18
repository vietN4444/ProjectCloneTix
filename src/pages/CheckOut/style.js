const heightHeader = 80;
const heightBtn = 60;
const screenBody = 550;
const widthHeightSeat = 32;
const widthHeightSeatNote = 18;
const widthCombo = 465;

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
    zIndex: 101,
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
    height: `calc(100vh - ${heightHeader}px)`,
  },
  checkOutRightContainer: {
    position: "fixed",
    top: 0,
    right: 0,
    width: "26%",
    height: "100vh",
    background: theme.palette.primary.main,
    zIndex: 101,
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
  },
  checkOutRightContent: {
    height: `calc(100% - ${heightBtn}px)`,
    minHeight: `calc(100% - ${heightBtn}px)`,
    overflowY: "scroll",
    padding: "0 5%",
    paddingRight: "calc(5% + 4px)",
    paddingBottom: 40,
    "&:hover": {
      "&::-webkit-scrollbar-thumb": {
        display: "block",
      },
    },
    "&::-webkit-scrollbar": {
      width: 4,
    },
    "&::-webkit-scrollbar-track": {
      background: "#e9e9e9",
    },
    "&::-webkit-scrollbar-thumb": {
      display: "none",
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
    },
    "& > span": {
      ...theme.typography.body1,
      fontSize: theme.typography.body2.fontSize,
      color: theme.palette.text.darkLight,
      "& > span": {
        color: theme.palette.text.ogrange,
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
  checkOutmethodPay: {
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "12px 0",
    marginBottom: "40%",
    border: "none",
    cursor: "pointer",
    "& > p": {
      ...theme.typography.subtitle1,
      color: theme.palette.text.dark,
      marginBottom: 10,
    },
  },
  methodPayContent: {
    width: "100%",
    "& > span": {
      ...theme.typography.body1,
      color: theme.palette.text.secondary,
    },
  },
  methodPayLabel: {
    display: "flex",
    alignItems: "center",
    "& > img": {
      width: "auto",
      maxWidth: 40,
      marginRight: 15,
    },
    "& > p": {
      ...theme.typography.subtitle1,
      color: theme.palette.text.dark,
      "& > span": {
        ...theme.typography.body1,
        fontSize: 11,
        color: theme.palette.text.red,
        display: "block",
      },
    },
  },
  label: {
    "& .MuiIconButton-colorSecondary": {
      color: theme.palette.grey[200],
      "&:hover": {
        backgroundColor: "rgba(38, 108, 251, 0.04)",
      },
    },
    "& .MuiRadio-colorSecondary.Mui-checked": {
      color: theme.palette.text.blue,
    },
    "& .MuiSvgIcon-root": {
      width: 26,
      height: 26,
    },
  },

  // CheckOutLeft
  checkOutLeft: {
    height: "100%",
  },
  checkOutLeftContainer: {
    // height: "100%",
    height: "max-content",
    width: "75%",
    display: "flex",
  },
  checkOutLeftModal: {
    width: "5.5%",
    background: theme.palette.background.blackBlur,
  },
  checkOutLeftContent: {
    width: "93%",
    background: theme.palette.primary.main,
    paddingTop: 30,
  },
  checkOutLeftGrid: {
    width: "90%",
    margin: "0 auto",
  },
  // &Header
  checkOutLeftHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  headerLeft: {
    display: "flex",
    alignItems: "center",
    "& > img": {
      width: 48,
      marginRight: 10,
    },
  },
  headerLeftDetailCinema: {
    "& > p": {
      ...theme.typography.subtitle1,
      fontSize: theme.typography.h6.fontSize,
      color: theme.palette.text.dark,
      "& > span": {
        fontSize: theme.typography.h6.fontSize,
        color: theme.palette.grey[500],
      },
      "&:last-child": {
        "& > span": {
          fontSize: theme.typography.subtitle1.fontSize,
        },
      },
    },
  },
  headerRight: {
    "& > span": {
      ...theme.typography.body1,
      fontSize: 10,
      color: theme.palette.grey[500],
      lineHeight: 0,
      textAlign: "center",
    },
    "& > p": {
      ...theme.typography.h6,
      fontSize: 29,
      color: theme.palette.text.secondary,
      lineHeight: 1,
      textAlign: "center",
    },
  },
  // &Body
  bodyContainer: {
    width: "100%",
    margin: "0 auto",
    "& > img": {
      width: "100%",
    },
  },
  checkoutScreen: {
    display: "flex",
    width: screenBody,
    margin: "0 auto",
    flexWrap: "wrap",
  },

  checkoutScreenSeatList: {
    width: "100%",
    justifyContent: "center",
    "& > div": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },

  // seatBtn: {
  //   padding: 0,
  //   margin: "0 5px",
  //   color: theme.palette.background.seatNormal,
  //   cursor: "pointer",
  //   position: "relative",
  //   marginBottom: 5,
  //   display: "flex",
  //   "& > svg": {
  //     width: widthHeightSeat,
  //     height: widthHeightSeat,
  //   },
  //   "&.seatVip": {
  //     color: theme.palette.background.seatVip,
  //     "& > div": {
  //       background: theme.palette.background.seatVip,
  //     },
  //   },
  // },

  // seatNumber: {
  //   position: "absolute",
  //   background: theme.palette.background.seatNormal,
  //   width: 20,
  //   top: "-1px",
  //   left: "50%",
  //   borderRadius: "50%",
  //   minHeight: 20,
  //   transform: "translateX(-50%)",
  //   "& > p": {
  //     ...theme.typography.body1,
  //     fontSize: 10,
  //     color: theme.palette.text.white,
  //     position: "absolute",
  //     left: "50%",
  //     top: "50%",
  //     transform: "translate(-50%,-50%)",
  //   },
  // },
  checkoutScreenNote: {
    display: "flex",
    width: "80%",
    margin: "0 auto",
    justifyContent: "space-around",
    marginTop: 60,
    paddingBottom: 10,
  },
  checkoutScreenNoteItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > p": {
      ...theme.typography.body1,
      fontSize: theme.typography.body2.fontSize,
      color: theme.palette.grey[500],
    },
  },
  seatNote: {
    position: "relative",
    color: theme.palette.background.seatNormal,
    display: "flex",
    "& > svg": {
      width: widthHeightSeatNote,
      height: widthHeightSeatNote,
    },
    "& > div": {
      position: "absolute",
      background: theme.palette.background.seatNormal,
      width: 10,
      top: "-1px",
      left: "50%",
      borderRadius: "50%",
      minHeight: 10,
      transform: "translateX(-50%)",
    },
    "&.seatVip": {
      color: theme.palette.background.seatVip,
      "& > div": {
        background: theme.palette.background.seatVip,
      },
    },
    "&.seatChoosing": {
      color: theme.palette.background.seatChoosing,
      "& > div": {
        background: theme.palette.background.seatChoosing,
      },
    },
    "&.seatBooked": {
      color: theme.palette.background.seatBooked,
      "& > div": {
        background: theme.palette.background.seatBooked,
      },
    },
  },

  // COMBO
  comboWrapper: {
    position: "fixed",
    width: "100vw",
    height: "100vh",
    top: 0,
    left: 0,
    zIndex: 100,
    pointerEvents: "none",
    "&.showCombo": {
      pointerEvents: "inherit",
    },
    "&.showCombo > div": {
      transform: "translateX(0)",
    },
  },
  comboContainer: {
    position: "absolute",
    top: 0,
    right: " 27%",
    width: widthCombo,
    background: theme.palette.primary.main,
    zIndex: 3,
    height: "100%",
    overflowX: "hidden",
    paddingTop: `calc(${heightHeader}px + 20px)`,
    transform: "translateX(100%)",
    transition: "all 0.8s",
    "&::-webkit-scrollbar": {
      width: 4,
    },
    "&::-webkit-scrollbar-track": {
      background: theme.palette.grey[300],
    },
    "&::-webkit-scrollbar-thumb": {
      background: theme.palette.background.whiteGrey,
      borderRadius: 200,
    },
  },
  comboContent: {
    padding: "0 20px",
    paddingBottom: 10,
  },
  comboHeaderTitle: {
    marginBottom: 15,
    backgroundColor: "#f5f5f5",
    borderBottom: `1px dashed ${theme.palette.grey[100]}`,
    padding: "3%",
    "& > p": {
      ...theme.typography.h5,
      color: theme.palette.text.dark,
    },
  },
  comboItem: {
    display: "flex",
    marginBottom: theme.spacing(3),
    "& .comboLogo": {
      paddingRight: 15,
      "& >img": {
        width: "100%",
      },
    },
    "& .comboDetail": {
      "& > p": {
        ...theme.typography.h5,
        fontSize: 15,
        color: theme.palette.text.greenPrice,
        paddingLeft: theme.spacing(2.9),
        letterSpacing: 1,
      },
    },
    "& .comboCount": {
      display: "flex",
      justifyContent: "flex-end",
      "& > span": {
        ...theme.typography.h6,
        color: theme.palette.text.dark,
        border: `1px solid ${theme.palette.grey[300]}`,
        borderRadius: 4,
        height: 32,
        width: 32,
        lineHeight: "32px",
        textAlign: "center",
        display: "block",
        margin: "0 2px",
      },
      "& > button": {
        ...theme.typography.h6,
        "&.btnDiminish": {
          border: "transparent",
          color: theme.palette.grey[500],
          height: 32,
          minWidth: 32,
          width: 32,
          "& .MuiButton-label": {
            transform: "scaleX(3)",
          },
        },
        "&.btnAdd": {
          border: "transparent",
          color: theme.palette.secondary.main,
          height: 32,
          minWidth: 32,
          width: 32,
          "& .MuiButton-label": {
            transform: "scale(1.5)",
          },
        },
      },
    },
  },
  collapse: {
    boxShadow: "none",
    "&.MuiAccordion-root.Mui-expanded": {
      margin: 0,
    },
    "& > div": {
      padding: 0,
      alignItems: "flex-start",
      minHeight: 0,
      "&.MuiAccordionSummary-root.Mui-expanded": {
        minHeight: 0,
      },
      "& > div": {
        margin: 0,
        display: "block",
        ...theme.typography.h6,
        color: theme.palette.text.dark,
        "&.MuiAccordionSummary-content.Mui-expanded": {
          margin: 0,
        },
        "& > img": {
          width: 18,
          height: 18,
          marginRight: 6,
          position: "relative",
          top: "4px",
        },
      },
    },
    "& .collapseDetails": {
      padding: "4px 29px",
      "& > p": {
        ...theme.typography.h6,
        fontSize: 11,
        color: theme.palette.grey[500],
        margin: 0,
        marginTop: 3,
        whiteSpace: "pre-line",
      },
    },
  },
}));

export default Style;
