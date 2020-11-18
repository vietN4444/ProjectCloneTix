import { Box, Typography } from "@material-ui/core";
import React, { memo, useState } from "react";
import WeekendIcon from "@material-ui/icons/Weekend";

import Style from "./style";

const SeatItem = ({ seat, ...props }) => {
  const classes = Style(props);

  const [seatChosing, setSeatChosing] = useState(false);

  return (
    <Box
      className={`${classes.seatBtn} ${
        seat.loaiGhe === "Vip" ? "seatVip" : null
      } ${seat.daDat ? null : "booked"} ${seatChosing ? "seatChosing" : null}`}
      onClick={() => setSeatChosing(!seatChosing)}
    >
      <WeekendIcon />
      <Box className={classes.seatNumber}>
        <Typography>{seatChosing ? seat.tenGhe : null}</Typography>
      </Box>
    </Box>
  );
};

export default memo(SeatItem);
