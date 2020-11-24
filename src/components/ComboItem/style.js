const { makeStyles } = require("@material-ui/core");

const Style = makeStyles((theme) => ({
  comboItem: {
    display: "flex",
    marginBottom: theme.spacing(3),
    "& .comboLogo": {
      paddingRight: 15,
      "& >img": {
        width: "100%",
      },
    },
    "& .comboDetail": {
      "& > p": {
        ...theme.typography.h5,
        fontSize: 15,
        color: theme.palette.text.greenPrice,
        paddingLeft: theme.spacing(2.9),
        letterSpacing: 1,
      },
    },
    "& .comboCount": {
      display: "flex",
      justifyContent: "flex-end",
      "& > span": {
        ...theme.typography.h6,
        color: theme.palette.text.dark,
        border: `1px solid ${theme.palette.grey[300]}`,
        borderRadius: 4,
        height: 32,
        width: 32,
        lineHeight: "32px",
        textAlign: "center",
        display: "block",
        margin: "0 2px",
      },
      "& > button": {
        ...theme.typography.h6,
        "&.btnDiminish": {
          border: "transparent",
          color: theme.palette.grey[500],
          height: 32,
          minWidth: 32,
          width: 32,
          "& .MuiButton-label": {
            transform: "scaleX(3)",
          },
        },
        "&.btnAdd": {
          border: "transparent",
          color: theme.palette.secondary.main,
          height: 32,
          minWidth: 32,
          width: 32,
          "& .MuiButton-label": {
            transform: "scale(1.5)",
          },
        },
      },
    },
  },
  collapse: {
    boxShadow: "none",
    "&.MuiAccordion-root.Mui-expanded": {
      margin: 0,
    },
    "& > div": {
      padding: 0,
      alignItems: "flex-start",
      minHeight: 0,
      "&.MuiAccordionSummary-root.Mui-expanded": {
        minHeight: 0,
      },
      "& > div": {
        margin: 0,
        display: "block",
        ...theme.typography.h6,
        color: theme.palette.text.dark,
        "&.MuiAccordionSummary-content.Mui-expanded": {
          margin: 0,
        },
        "& > img": {
          width: 18,
          height: 18,
          marginRight: 6,
          position: "relative",
          top: "4px",
        },
      },
    },
    "& .collapseDetails": {
      padding: "4px 29px",
      "& > p": {
        ...theme.typography.h6,
        fontSize: 11,
        color: theme.palette.grey[500],
        margin: 0,
        marginTop: 3,
        whiteSpace: "pre-line",
      },
    },
  },
  "@media (max-width: 600px)": {
    comboItem: {
      "& .comboLogo": {
        flexGrow: 0,
        maxWidth: "16.666667%",
        flexBasis: "16.666667%",
      },
      "& .comboDetail": {
        flexGrow: 0,
        maxWidth: "58.333333%",
        flexBasis: "58.333333%",
      },
      "& .comboCount": {
        flexGrow: 0,
        maxWidth: "25%",
        flexBasis: "25%",
      },
    },
  },
}));

export default Style;
