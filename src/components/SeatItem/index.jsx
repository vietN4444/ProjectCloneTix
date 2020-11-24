import { Box, Typography } from "@material-ui/core";
import React, { memo, useCallback, useState } from "react";
import WeekendIcon from "@material-ui/icons/Weekend";

import Style from "./style";
import { useDispatch, useSelector } from "react-redux";
import { SET_TICKET_BOOKING } from "../../redux/actions/actionContants";

const SeatItem = ({ funcMethodPay, funcBtn, seat, ...props }) => {
  const classes = Style(props);
  const dispatch = useDispatch();

  const data = useSelector((state) => state.cinema.cinemaSeatBooking);

  const [seatChosing, setSeatChosing] = useState(false);

  const handleBooking = useCallback(() => {
    dispatch({
      type: SET_TICKET_BOOKING,
      payload: {
        arr: { maGhe: seat.maGhe, giaVe: seat.giaVe },
        tenGhe: seat.tenGhe,
      },
    });

    setSeatChosing(!seatChosing);
    if (data.length === 6) {
      setTimeout(setSeatChosing(false), 500);
    }
    funcBtn(false);
    funcMethodPay(true);
  }, [seatChosing, seat, data]);

  return (
    <Box
      className={`${classes.seatBtn} ${
        seat.loaiGhe === "Vip" ? "seatVip" : null
      } ${seat.daDat ? null : "booked"} ${seatChosing ? "seatChosing" : null}`}
      onClick={handleBooking}
    >
      <WeekendIcon />
      <Box className={classes.seatNumber}>
        <Typography>{seatChosing ? seat.tenGhe : null}</Typography>
      </Box>
    </Box>
  );
};

export default memo(SeatItem);
