import React from "react";
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

const Datepicker = ({ data, ...props }) => {
  return (
    <ThemeProvider theme={defaultMaterialTheme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDateTimePicker
          variant="inline"
          ampm={false}
          value={data}
          format="yyyy/MM/dd HH:mm"
        />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

export default Datepicker;
