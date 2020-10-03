import { Textfunc } from "../../helpers/mxins";

const { makeStyles } = require("@material-ui/core");

const Style = makeStyles((theme) => ({
  headTitle: {
    "& > span": {
      ...theme.typography.h4,
    },
  },
  listItem: {
    paddingTop: 20,
    paddingBottom: 20,
    "& .MuiListItemAvatar-root": {
      minWidth: 80,
    },
    "& .MuiAvatar-root": {
      width: 60,
      height: 60,
      background: theme.palette.secondary.light,
    },
    "& svg": {
      fontSize: 36,
    },
    "& span": {
      ...theme.typography.h6,
    },
    "& p": {
      ...theme.typography.body2,
      color: theme.palette.text.grey,
      width: "70%",
    },
  },
  listItemText: {
    marginTop: 6,
    marginBottom: 6,
    flex: "1 1 auto",
    "& h1": {
      ...theme.typography.h6,
    },
    "& p": {
      ...theme.typography.body2,
      color: theme.palette.text.grey,
      width: "70%",
    },
  },
}));

export default Style;
