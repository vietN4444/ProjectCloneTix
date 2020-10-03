import { Box, Button, TextField, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

import logoLogin from "../../assets/imgs/logoLogin.png";
import Style from "./style";

const SignIn = (props) => {
  const classes = Style(props);

  const hanldeSubmit = () => {};
  const handleChange = () => {};

  return (
    <Box className={classes.login}>
      <Box className={classes.loginWrapper}>
        <Box className={classes.loginContainer}>
          <Box className={classes.loginLogo}>
            <img src={logoLogin} alt="logo" />
          </Box>
          <form onSubmit={hanldeSubmit}>
            <Box py={1}>
              <TextField
                onChange={handleChange}
                className={classes.input}
                id="filled-basic"
                name="taiKhoan"
                label="Username"
                variant="filled"
              />
            </Box>
            <Box py={1} mb={1}>
              <TextField
                type="password"
                onChange={handleChange}
                className={classes.input}
                id="filled-basic"
                name="matKhau"
                label="Password"
                variant="filled"
              />
            </Box>
            <Typography
              className={classes.txtInfo}
              component="p"
              variant="subtitle2"
            >
              Đăng nhập để được nhiều ưu đãi, mua vé và bảo mật thông tin!
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              className={classes.buttonWrapper}
            >
              <Button
                type="submit"
                size="large"
                variant="contained"
                color="secondary"
              >
                Sign In
              </Button>
              {/* <Button
                //   onClick={() => history.push("/signup")}
                size="large"
                variant="contained"
                color="secondary"
              >
                Sign Up
              </Button> */}
            </Box>
            <Box className={classes.txtSubtitle}>
              <Typography component="p">
                Nếu bạn chưa có tài khoản hãy, đăng kí tài khoản tại
                <Link to="/dashboard"> đây</Link>
              </Typography>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default SignIn;
