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
      600: "#afafaf",
      700: "#888",
      800: "#4a4a4a",
    },
    text: {
      primary: "#000",
      secondary: "#fb4226",
      lightGrey: "#e9e9e9",
      grey: "#949494",
      greyDark: "#737576",
      white: "#fff",
      dark: "#333",
      darkLight: "#4a4a4a",
      whiteGrey: "#ececec",
      green: "#108f3e",
      greenGem: "#91d25a",
      greenLight: "#7ed321",
      bhdColor: "#8bc541",
      cnsColor: "#df0d7a",
      lotteColor: "#ca4137",
      megaColor: "#e5a813",
      cgvColor: "#e71a0f",
      greenPrice: "#44c020",
      blue: "#4a90e2",
      ogrange: "#f79320",
    },
    background: {
      dark: "#222",
      blue: "#60c5ef",
      blackBlur: "rgba(0, 0, 0, 0.7)",
      whiteRgba: "rgba(238, 238, 238, 0.88)",
      greyRgba: "rgba(246, 246, 246, 0.5)",
      blueDark: "rgb(10, 32, 41)",
      green: "#7ed321",
      whiteGrey: "#bbb",
    },
  },
  typography: {
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
      fontSize: 44,
      fontWeight: 700,
      lineHeight: 1.42857143,
      letterSpacing: "normal",
      fontFamily: `"sfTextRegular"`,
    },
    h2: {
      fontSize: 40,
      fontWeight: 700,
      lineHeight: 1.42857143,
      letterSpacing: "normal",
      fontFamily: `"sfMedium"`,
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
      fontWeight: 400,
      lineHeight: 1.42857143,
      letterSpacing: "normal",
      fontFamily: `"sfMedium"`,
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
    heightHeader: 60,
    widthGridDetailPage: 870,
  },
  spacing: 10,
  mixins: {},
});

export default theme;
