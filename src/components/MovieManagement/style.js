const { makeStyles } = require("@material-ui/core");

const Style = makeStyles((theme, widthTable) => ({
  wrapperMovieManagement: {
    width: "100%",
    overflow: "hidden",
  },
  container: {
    maxHeight: 440,
    minHeight: 440,
    "& > table": {
      background: theme.palette.primary.main,
      position: "relative",
      "&::after": {
        content: '""',
        position: "absolute",
        width: "10%",
        height: "6%",
        top: "1px",
        right: 0,
        background: theme.palette.secondary.light,
        transform: "translateY(-100%)",
      },
    },
    "&::-webkit-scrollbar": {
      width: 8,
      height: 9,
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: theme.palette.primary.main,
      transition: "all 0.5s",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: theme.palette.primary.main,
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
        "&:last-child": {
          textAlign: "center",
        },
        "&:nth-child(2)": {
          padding: 4,
          textAlign: "center",
        },
        "&:nth-child(3)": {
          padding: 4,
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

  tableCellAction: {
    padding: 4,
    textAlign: "center",
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

  "@media (max-width: 425px)": {
    gridContainer: {
      margin: 0,
      width: "100%",
    },
  },
}));

export default Style;
