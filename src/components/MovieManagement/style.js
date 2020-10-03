const { makeStyles } = require("@material-ui/core");

const Style = makeStyles((theme, widthTable) => ({
  wrapperMovieManagement: {
    width: "100%",
    overflow: "hidden",
  },
  container: {
    maxHeight: 440,
    minHeight: 440,
    "&::-webkit-scrollbar": {
      width: 8,
      height: 9,
    },
    "&::-webkit-scrollbar-track": {
      background: "#f2f2f2",
    },
    "&::-webkit-scrollbar-thumb": {
      background: theme.palette.grey[400],
      borderRadius: 200,
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: theme.palette.grey[500],
    },
  },
  tableBody: {
    "& >tr": {
      "&>td": {
        ...theme.typography.subtitle1,
        "&:last-child": {
          textAlign: "center",
        },
      },
    },
  },
  tableImg: {
    "& img": {
      width: 120,
    },
  },
  tableHead: {
    "& th": {
      ...theme.typography.subtitle2,
      background: theme.palette.secondary.light,
      color: theme.palette.text.white,
    },
  },
  margin: {
    padding: theme.spacing(1),
    paddingBottom: 0,
    background: theme.palette.secondary.light,
    width: widthTable,
  },
  input: {
    width: "100%",
    paddingRight: 140,
    boxSizing: "border-box",
    "& label": {
      color: theme.palette.text.white,
    },
    "& .MuiInput-formControl": {
      "&:before": {
        borderColor: theme.palette.primary.main,
      },
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderColor: theme.palette.primary.main,
    },
    "& input": {
      ...theme.typography.subtitle1,
      color: theme.palette.text.whiteGrey,
    },
  },
  icon: {
    color: theme.palette.primary.main,
  },
}));

export default Style;
