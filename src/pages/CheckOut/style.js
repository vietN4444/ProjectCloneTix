const heightHeader = 80;
const heightHeaderMobile = 60;
const heightBtn = 60;
const heightBtnBox = 70;
const heightBtnBoxMobile = 50;
const screenBody = 550;
const widthHeightSeatNote = 18;
const paddingTopCheckoutLeftContainer = 30;
const widthCombo = 465;

const { makeStyles } = require("@material-ui/core");

const Style = makeStyles((theme) => ({
  checkOut: {
    position: "relative",
  },
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

  // Checkout Right
  checkOutRightContainer: {
    position: "fixed",
    top: 0,
    right: 0,
    width: "26%",
    height: "100vh",
    background: theme.palette.primary.main,
    zIndex: 101,
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
    "&.checkOutRightComfirm": {
      pointerEvents: "none",
      filter: "grayscale(1)",
    },
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
      width: "60%",
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
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 30px #fff inset",
          },
        },
      },
      "& > label": {
        ...theme.typography.subtitle1,
        color: theme.palette.grey[500],
        zIndex: 10,
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
        top: "55%",
        transform: "translateY(-50%)",
        backgroundColor: theme.palette.background.greenSucces,
        "&.Mui-disabled": {
          backgroundColor: theme.palette.grey[600],
        },
        "& > span": {
          ...theme.typography.body1,
          color: theme.palette.text.white,
          textTransform: "none",
        },
      },
      "& > svg": {
        width: 16,
        height: 16,
        position: "absolute",
        right: 30,
        top: "65%",
        transform: "translateY(-50%)",
        fill: theme.palette.background.greenSucces,
      },
    },
  },

  checkOutRightNotice: {
    position: "absolute",
    bottom: 60,
    left: 0,
    zIndex: 20,
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
      backgroundImage: "linear-gradient(223deg,#b4ec51 0,#429321 100%)",
      "&.MuiButton-contained.Mui-disabled": {
        backgroundImage: "none",
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
    paddingTop: paddingTopCheckoutLeftContainer,
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
  // &Result
  checkOutLeftResultContainer: {
    height: `calc(100vh - ${heightHeader}px - ${paddingTopCheckoutLeftContainer}px)`,
    position: "relative",
  },
  resultContent: {
    position: "absolute",
    top: "48%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "60%",
    height: "100%",
    borderRadius: 6,
    overflow: "hidden",
    border: `1px solid ${theme.palette.grey[200]}`,
    display: "flex",
    flexDirection: "column",
  },
  headerResult: {
    padding: 14,
    background: theme.palette.secondary.main,
    "& > p": {
      ...theme.typography.h6,
      color: theme.palette.text.white,
      textAlign: "center",
      textTransform: "uppercase",
    },
  },
  bodyResult: {
    flex: 1,
    background: theme.palette.background.whiteRgba,
    "& .resultAvatar": {
      "& > div": {
        background: theme.palette.secondary.main,
      },
    },
    "& .resultItem": {
      "& > p": {
        ...theme.typography.subtitle1,
        "& > span": {
          ...theme.typography.subtitle1,
          paddingLeft: 20,
        },
      },
    },
    "& .resultCinema ": {
      "& > span > p": {
        ...theme.typography.subtitle1,
        "& > span": {
          ...theme.typography.subtitle1,
          paddingLeft: 20,
        },
      },
    },
    "& .resultSeat": {
      "& > span > p": {
        marginBottom: 10,
        ...theme.typography.subtitle1,
        "& > span": {
          ...theme.typography.subtitle1,
          paddingLeft: 20,
        },
      },
    },
    "& .resultPrice": {
      "& > p": {
        "& > span": {
          color: theme.palette.text.greenPrice,
          fontSize: `${theme.typography.h5.fontSize}px!important`,
        },
      },
    },
  },

  seatResult: {
    textAlign: "center",
    background: theme.palette.secondary.main,
    color: theme.palette.text.white,
    padding: "8px 0",
    borderRadius: 4,
  },
  btnGroupResult: {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px 5px",
    "& > button": {
      padding: "10px 8px",
      "& .MuiButton-label": {
        ...theme.typography.subtitle1,
        textTransform: "none",
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
  btnBoxFixed: {
    position: "fixed",
    width: "100vw",
    height: "100vh",
    top: 0,
    left: 0,
    pointerEvents: "none",
    zIndex: 20,
  },
  btnBox: {
    position: "absolute",
    bottom: 0,
    left: 0,
    height: heightBtnBox,
    width: "100%",
    background: theme.palette.primary.main,
    boxShadow: "0 -1px 0 0 #dadada, 0 1px 0 0 #dadada",
    pointerEvents: "auto",
  },
  btnBoxItem: {
    "& > div": {
      ...theme.typography.subtitle1,
      background: theme.palette.grey[600],
      width: "100%",
      textAlign: "center",
      "&.active": {
        backgroundImage: "linear-gradient(223deg,#b4ec51 0,#429321 100%)",
      },
      "&.txtSeat": {
        background: theme.palette.primary.main,
        "& > span": {
          fontSize: 15,
          color: theme.palette.text.greenPrice,
        },
      },
      "& > span": {
        lineHeight: "70px",
        fontSize: 19,
        color: theme.palette.text.lightGrey,
      },
    },
  },

  "@media (max-width: 1024px)": {
    checkOutRightContainer: {
      width: "27%",
    },
    containerRight: {
      marginRight: "6%",
    },
  },
  "@media (max-width: 900px)": {
    checkOutLeftBody: {
      overflow: "scroll",
      margin: "0 -5%",
    },
    bodyContainer: {
      width: 627,
      padding: "0 5%",
    },
    resultContent: {
      width: "80%",
    },
  },
  "@media (max-width: 800px)": {
    containerLeft: {
      "& > p": {
        margin: "0 20px",
      },
    },
  },
  "@media (max-width: 768px)": {
    checkOutLeftBody: {
      overflow: "scroll",
      margin: 0,
    },
    bodyContainer: {
      width: "100%",
      padding: 0,
    },
    comboContainer: {
      right: 0,
      width: "100%",
      paddingTop: 20,
      paddingBottom: heightBtnBoxMobile,
    },
    checkOutLeftContent: {
      width: "100%",
    },
    checkOutLeftContainer: {
      width: "100%",
      paddingBottom: 80,
    },
    header: {
      height: heightHeaderMobile,
    },
    headerContainer: {
      width: "100%",
      height: heightHeaderMobile,
    },
    containerRight: {
      marginRight: "2%",
    },
    headerWrapper: {
      position: "relative",
      justifyContent: "flex-end",
    },
    containerLeft: {
      textAlign: "center",
      padding: 0,
      position: "absolute",
      top: 0,
      left: "50%",
      transform: "translateX(-50%)",
      "& > p": {
        fontSize: theme.typography.subtitle1.fontSize,
        "& > span": {
          fontSize: "inherit",
        },
      },
    },
    checkOutRightContainer: {
      width: "100%",
      position: "inherit",
    },
    checkOutRightNotice: {
      position: "inherit",
    },
    checkOutmethodPay: {
      margin: "4% 0",
    },
    resultContent: {
      width: "70%",
      height: "fit-content",
      margin: "6% 0",
    },
    comboWrapper: {
      zIndex: 102,
    },
    btnBox: {
      "&.combo": {
        zIndex: 22,
      },
    },
    btnBoxItem: {
      "&.priceCombo": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& > p": {
          fontSize: 30,
          lineHeight: 0.8,
          marginRight: 4,
          color: theme.palette.text.greenPrice,
        },
        "& > div": {
          width: "auto",
          display: "flex",
          background: "none",
          flexDirection: "column",
          "& > span": {
            lineHeight: 1,
            fontSize: 12,
            color: theme.palette.text.greenPrice,
          },
        },
      },
    },
  },

  "@media (max-width: 600px)": {
    btnBoxItem: {
      flexGrow: 0,
      maxWidth: "50%",
      flexBasis: "50%",
    },
    checkoutScreenSeatList: {
      "& > div": {
        flexGrow: 0,
        maxWidth: "8.333333%",
        flexBasis: "8.333333%",
      },
    },
    checkOutLeftBody: {
      position: "relative",
      margin: "0 -5%",
    },
    bodyContainer: {
      width: 600,
    },
    gridSeatResult: {
      flexGrow: 0,
      maxWidth: "16.666667%",
      flexBasis: "16.666667%",
    },
    checkOutLeftResultContainer: {
      height: "100%",
    },
  },

  "@media (max-width: 460px)": {
    resultContent: {
      marginTop: 0,
      width: "90%",
    },
    containerLeft: {
      "& > p": {
        margin: 0,
      },
    },
  },

  "@media (max-width: 425px)": {
    btnBox: {
      height: heightBtnBoxMobile,
    },
    btnBoxItem: {
      "& > div": {
        "&> span": {
          lineHeight: "50px",
        },
      },
      "& > div.txtSeat > span": {
        fontSize: 14,
      },
    },
    checkoutScreenNote: {
      width: "100%",
    },
    gridSeatResult: {
      flexGrow: 0,
      maxWidth: "33.333333%",
      flexBasis: "33.333333%",
    },
    bodyResult: {
      "& .resultItem > span > p > span": {
        paddingLeft: 10,
      },
      "& .resultUser > span > p": {
        textOverflow: "ellipsis",
        overflow: "hidden",
      },
    },
  },
  "@media (max-width: 343px)": {
    resultContent: {
      width: "94%",
    },
  },
}));

export default Style;
