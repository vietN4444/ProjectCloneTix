const widthBtn = 100;

const { makeStyles } = require("@material-ui/core");

const Style = makeStyles((theme) => ({
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
    "& > button": {
      minWidth: widthBtn,
      borderRadius: 200,
      border: `1px solid ${theme.palette.secondary.light}`,
      marginRight: 25,
      "&:hover": {
        backgroundColor: theme.palette.secondary.light,
        "& .MuiButton-label": {
          color: theme.palette.text.white,
        },
      },
      "& .MuiButton-label": {
        textTransform: "none",
        fontFamily: "inhertit",
        color: theme.palette.secondary.light,
      },
    },
  },
  listItemText: {
    marginTop: 6,
    marginBottom: 6,
    flex: "1 1 auto",
    "& h1": {
      ...theme.typography.h6,
      "& > span": {
        marginLeft: 10,
        fontSize: 18,
        color: theme.palette.secondary.light,
      },
    },
    "& p": {
      ...theme.typography.body2,
      color: theme.palette.text.grey,
      width: "70%",
    },
  },
  boxContainer: {
    padding: "8px 0",
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
        },
      },
      "& > button": {
        background: theme.palette.secondary.light,
        marginTop: 10,
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
  "@media (max-width: 960px)": {
    subMenuItems: {
      position: "absolute",
      bottom: 0,
      left: 0,
      "& > div": {
        boxShadow: "none",
      },
    },
  },
  "@media (max-width: 600px)": {
    subMenuItems: {
      zIndex: 100,
    },
  },
}));

export default Style;
