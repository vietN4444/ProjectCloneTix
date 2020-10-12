import { makeStyles } from "@material-ui/core";

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
      backgroundColor: "transparent",
      transition: "all 0.5s",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "transparent",
      transition: "all 0.5s",
      borderRadius: 200,
    },
    "&:hover": {
      "&::-webkit-scrollbar-track": {
        backgroundColor: "#f2f2f2",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: theme.palette.grey[400],
      },
      "&::-webkit-scrollbar-thumb:hover": {
        backgroundColor: theme.palette.grey[500],
      },
    },
  },
  tableBody: {
    "& >tr": {
      "&>td": {
        ...theme.typography.subtitle1,
        "&:nth-last-child(2)": {
          textAlign: "center",
        },
        "&:nth-child(3)": {
          WebkitTextSecurity: "disc",
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
    width: "60%",
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
