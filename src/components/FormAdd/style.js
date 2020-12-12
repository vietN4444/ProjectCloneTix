const { makeStyles } = require("@material-ui/core");

const Style = makeStyles((theme) => ({
  boxContainer: {
    padding: "8px 0",
  },
  headTitle: {
    "&.headTitleBox": {
      padding: "8px 16px",
      "& > span": {
        margin: "4px 0",
        display: "block",
      },
    },
    "& > span": {
      ...theme.typography.h4,
    },
  },
  boxContent: {
    padding: "20px 16px",
    display: "flex",
    margin: "0 -10px",
    "& form": {
      display: "flex",
      flexDirection: "column",
      flex: 1,
      padding: "0 10px",
      "& > div": {
        marginBottom: 15,
        position: "relative",
        "& > svg": {
          position: "absolute",
          top: "50%",
          right: 10,
          transform: "translateY(-50%)",
          opacity: 0.5,
          transition: "all 0.4s",
          cursor: "pointer",
          "&:hover": {
            opacity: 1,
          },
        },
        "& > div": {
          width: "100%",
          "&.inputError": {
            "& > div > input": {
              background: theme.palette.background.redRgba,
              "&:-webkit-autofill": {
                WebkitBoxShadow: `0 0 0 30px ${theme.palette.background.redRgba} inset`,
              },
            },
          },
          "& > div > input": {
            padding: "12px 14px",
          },
          "& > label": {
            color: theme.palette.text.dark,
            transform: "translate(12px, 14px) scale(1)",
            "&.Mui-focused": {
              color: theme.palette.text.dark,
            },
          },
          "& > div.Mui-focused ": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(0,0,0,0.4)",
            },
          },
          "&.inputFile": {
            margin: 0,
            "& > div > input": {
              height: 20,
            },
          },
        },
      },
      "& > button": {
        background: theme.palette.secondary.light,
        marginTop: 10,
      },
    },
  },
  informationPassword: {
    flex: 1,
    padding: "0 10px",
    display: "flex",
    alignItems: "center",
    "& > div": {
      padding: "10px 20px",
      background: "#f7f9fa",
      height: "fit-content",
      "& > p": {
        ...theme.typography.body1,
        color: "#8a9cb7",
        "& > span": {
          ...theme.typography.subtitle1,
          color: "##6f88b3",
        },
      },
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
      marginTop: 8,
      "& > select": {
        ...theme.typography.subtitle1,
        height: 20,
        "&.MuiNativeSelect-outlined.MuiNativeSelect-outlined": {
          paddingLeft: 10,
        },
      },
      "& > select:focus": {
        backgroundColor: "transparent",
      },
    },
  },
  boxTxtError: {
    margin: 0,
    height: 50,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    "&.errorTxtChangeInfo": {
      height: 30,
    },
    "& > p": {
      ...theme.typography.subtitle1,
      color: theme.palette.text.red,
    },
  },

  "@media (max-width: 650px)": {
    boxContent: {
      flexDirection: "column-reverse",
    },
    informationPassword: {
      marginBottom: 10,
      "& > div": {
        width: "100%",
      },
    },
  },
}));

export default Style;
