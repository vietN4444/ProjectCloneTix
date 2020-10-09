import { makeStyles } from "@material-ui/core";

const Style = makeStyles((theme) => ({
  footer: {
    background: theme.palette.background.dark,
    padding: `${theme.spacing(2)}px 0`,
    color: theme.palette.text.grey,
  },
  footerContainerTop: {
    paddingBottom: theme.spacing(2),
    marginBottom: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.text.darkLight}`,
  },
  footerTopContent: {
    "& > p": {
      width: "100%",
    },
  },
  footerTopContentTxt: {
    width: "50%",
    float: "left",
    "&:last-child": {
      "&::before": {
        content: '""',
        display: "block",
        clear: "both",
      },
    },
    "&> a": {
      ...theme.typography.body2,
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.text.grey,
      whiteSpace: "nowrap",
      display: "block",
      transition: "all 0.2s",
      lineHeight: "2.3",

      "&:hover": {
        textDecoration: " none",
        color: theme.palette.text.white,
      },
    },
  },
  footerTitle: {
    ...theme.typography.body2,
    fontSize: 11,
    color: theme.palette.text.white,
    marginBottom: theme.spacing(1),
  },
  footerTopContentLogo: {
    marginBottom: theme.spacing(1.5),
    "&:last-child": {
      margin: 0,
    },
    "& > a": {
      marginRight: theme.spacing(1.5),
      textDecoration: "none",
      "& > img": {
        backgroundColor: theme.palette.primary.main,
        borderRadius: "50%",
        width: 30,
        height: 30,
        "&:hover": {
          opacity: 0.7,
        },
      },
      "& #Megags": {
        backgroundColor: "transparent",
      },
      "& #touchcinema": {
        backgroundColor: "transparent",
      },
    },
  },
  footerTopContentSocial: {
    textAlign: "center",
    "& > a": {
      "& > img ": {
        width: "auto",
        height: 30,
        margin: theme.spacing(0.5),
      },
    },
  },
  footerSocial: {
    display: "flex",
  },
  footerBottomContent: {
    display: "flex",
    padding: 0,
  },
  footerBottomContentLogo: {
    "& > img": {
      width: 80,
      borderRadius: 8,
      marginRight: theme.spacing(1.5),
    },
  },
  footerBottomContentTxt: {
    "h6.footer__title": {
      fontSize: theme.typography.subtitle2,
      margin: 0,
      lineHeight: 1.8,
    },
    "& > p": {
      margin: 0,
      lineHeight: 1.8,
      color: theme.palette.text.grey,
      "& > a": {
        color: theme.palette.text.secondary,
        "&:hover": {
          textDecoration: "none",
        },
      },
    },
  },
  footerBottomLogo: {
    padding: 0,
    "& > a": {
      marginLeft: "auto",
      float: "right",
      "& > img": {
        width: 130,
        display: "block",
      },
    },
  },
}));

export default Style;
