const widthHeightSeat = 32;

const { makeStyles } = require("@material-ui/core");

const Style = makeStyles((theme) => ({
  seatBtn: {
    padding: 0,
    margin: "0 5px",
    color: theme.palette.background.seatNormal,
    cursor: "pointer",
    position: "relative",
    marginBottom: 5,
    display: "flex",
    "& > svg": {
      width: widthHeightSeat,
      height: widthHeightSeat,
    },
    "&.seatVip": {
      color: theme.palette.background.seatVip,
      "& > div": {
        background: theme.palette.background.seatVip,
      },
    },
    "&.seatChosing": {
      color: theme.palette.background.seatChoosing,
      "& > div": {
        background: `${theme.palette.background.seatChoosing}!important`,
      },
    },
  },

  seatNumber: {
    position: "absolute",
    background: theme.palette.background.seatNormal,
    width: 20,
    top: "-1px",
    left: "50%",
    borderRadius: "50%",
    minHeight: 20,
    transform: "translateX(-50%)",
    "& > p": {
      ...theme.typography.body1,
      fontSize: 10,
      color: theme.palette.text.white,
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%,-50%)",
    },
  },

  "@media (max-width: 600px)": {
    seatBtn: {
      "& > svg": {
        width: 30,
        height: 30,
      },
    },
    seatNumber: {
      width: 18,
      minHeight: 18,
    },
  },
}));

export default Style;
