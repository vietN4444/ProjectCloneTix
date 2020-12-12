const { makeStyles } = require("@material-ui/core");

const Style = makeStyles((theme) => ({
  form: {
    "& .MuiDialogContent-root:first-child": {
      paddingTop: 0,
      paddingBottom: 30,
    },
  },
  input: {
    "& label": {
      ...theme.typography.body1,
      color: theme.palette.text.grey,
    },
    "& input": {
      ...theme.typography.subtitle1,
      // color: theme.palette.text.dark,
    },
    "& textarea": {
      ...theme.typography.subtitle1,
      color: theme.palette.text.dark,
    },
  },
  formControl: {
    top: 5,
    width: 120,
    "& > label": {
      ...theme.typography.body1,
      color: theme.palette.text.dark,
      "&.Mui-focused": {
        color: theme.palette.text.dark,
      },
    },
    "& > div": {
      "& > select": {
        ...theme.typography.subtitle1,
        height: 20,
      },
      "& > select:focus": {
        backgroundColor: "transparent",
      },
    },
  },
  dialogContent: {
    maxHeight: 415,
    "&::-webkit-scrollbar": {
      width: 5,
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
      background: theme.palette.secondary.light,
    },
    "& .selectCinema": {
      display: "flex",
      margin: "0 -4px",
    },
    "& .datepicker": {
      marginTop: 10,
      "& > div": {
        width: "100%",
      },
    },
  },
  dialogTitle: {
    "& h2": {
      fontSize: 20,
    },
  },
  dialog: {
    "& .MuiDialog-paper": {
      overflowY: "unset",
    },
  },
  dialogAction: {
    padding: 10,
    boxShadow: "0px -8px 8px -5px rgb(201, 201, 201, 0.8);",
    "& >button": {
      backgroundColor: theme.palette.secondary.light,
      "&:hover": {
        backgroundColor: theme.palette.secondary.dark,
      },
    },
  },
  datePicker: {
    paddingBottom: "14px!important",
    display: "flex",
    "& >div": {
      width: "100%",
      alignSelf: "flex-end",
    },
  },
  inputFile: {
    "& input": {
      paddingBottom: 10,
      cursor: "pointer",
    },
  },

  selectPrice: {
    width: "100%",
  },

  priceItem: {
    fontSize: theme.typography.subtitle1.fontSize,
  },

  selectCinemaItem: {
    flexGrow: 0,
    maxWidth: "33.333333%",
    flexBasis: "33.333333%",
    padding: "0 4px",
  },

  "@media (max-width: 600px)": {
    gridContainer: {
      "& > div": {
        width: "100%",
      },
    },
    dialog: {
      "&.dialogMaxheight": {
        "& .MuiDialog-paper": {
          maxHeight: "100%",
        },
      },
    },
  },
  "@media (max-width: 425px)": {
    dialog: {
      "& .MuiDialog-paper": {
        margin: 0,
        width: "100%",
      },
    },
  },
}));

export default Style;
