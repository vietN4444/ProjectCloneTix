const { createMuiTheme } = require("@material-ui/core");

const theme = createMuiTheme({
  breakpoints: {},
  palette: {
    primary: {
      light: "rgba(255, 255, 255, 0.95)",
      main: "#fff",
    },
    secondary: {
      light: "#f55960",
      main: "#fb4226",
      dark: "#d63038",
    },
    grey: {
      300: "#e9e9e9",
      400: "#d8d8d8",
      500: "#9b9b9b",
      800: "#4a4a4a",
    },
    text: {
      primary: "#000",
      secondary: "#fb4226",
      grey: "#949494",
      white: "#fff",
      dark: "#333",
      darkLight: "#4a4a4a",
      whiteGrey: "#ececec",
    },
    background: {
      dark: "#222",
      blue: "#60c5ef",
      blackBlur: "rgba(0, 0, 0, 0.7)",
    },
  },
  typography: {
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
      fontSize: 44,
    },
    h2: {
      fontSize: 40,
    },
    h3: {
      fontSize: 32,
      fontWeight: 700,
      lineHeight: 1.42857143,
      letterSpacing: "normal",
      fontFamily: `"sfTextRegular"`,
    },
    h4: {
      fontSize: 20,
      fontWeight: 400,
      lineHeight: 1.42857143,
      letterSpacing: "normal",
      fontFamily: `"sfMedium"`,
    },
    h5: {
      fontSize: 18,
    },
    h6: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 1.42857143,
      letterSpacing: "normal",
      fontFamily: `"sfMedium"`,
    },
    subtitle1: {
      fontSize: 14,
      fontWeight: 400,
      fontFamily: `"sfRegular"`,
      lineHeight: 1.42857143,
      letterSpacing: "normal",
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 400,
      fontFamily: `"sfTextRegular"`,
      lineHeight: 1.42857143,
      letterSpacing: "normal",
    },
    body1: {
      fontSize: 13,
      fontWeight: 400,
      fontFamily: `"sfRegular"`,
      lineHeight: 1.42857143,
      letterSpacing: "normal",
    },
    body2: {
      fontSize: 12,
      fontWeight: 400,
      fontFamily: `"sfTextRegular"`,
      lineHeight: 1.42857143,
      letterSpacing: "normal",
    },
  },
  props: {
    widthSliderBtn: 100,
  },
  spacing: 10,
  mixins: {},
});

export default theme;
