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
      color: theme.palette.text.dark,
    },
    "& textarea": {
      ...theme.typography.subtitle1,
      color: theme.palette.text.dark,
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
}));

export default Style;
