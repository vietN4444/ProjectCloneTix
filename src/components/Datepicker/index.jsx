import React, { memo, useEffect, useState } from "react";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import {
  KeyboardDateTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const defaultMaterialTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#f55960",
    },
  },
});

const Datepicker = ({ type, setTimeMovie, data, ...props }) => {
  const [clearedDate, handleClearedDateChange] = useState(data);
  const [time, setTime] = useState(data);
  const dateValue = new Date(data);

  useEffect(() => {
    if (setTimeMovie) {
      let tzoffset = new Date(time).getTimezoneOffset() * 60000;
      let timeData = new Date(Date.parse(time) - tzoffset)
        .toISOString()
        .slice(0, -5);
      setTimeMovie(timeData);
    }
  }, [time, setTime]);

  return (
    <ThemeProvider theme={defaultMaterialTheme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDateTimePicker
          variant="dialog"
          value={data}
          format="yyyy/MM/dd HH:mm"
          onChange={type ? setTime : handleClearedDateChange}
          cancelLabel="Cancel"
          okLabel={type ? "OK" : null}
          maxDate={type ? new Date(2050, 1, 1) : new Date()}
          minDate={type ? new Date(2000, 1, 1) : new Date(dateValue)}
        />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

export default memo(Datepicker);
