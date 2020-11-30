import { Box, Button, TextField, Typography } from "@material-ui/core";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import logoLogin from "../../assets/imgs/logoLogin.png";
import { signIn } from "../../redux/actions/userActions";
import Style from "./style";

const SignIn = (props) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    taiKhoan: "",
    matKhau: "",
  });
  const classes = Style(props);

  const alertError = useCallback((text) => {
    return Swal.fire({
      icon: "error",
      confirmButtonText: "OK",
      confirmButtonColor: "#fb4226",
      title: text,
    });
  }, []);

  const handleChange = useCallback(
    (e) => {
      const key = e.target.name;
      const value = e.target.value;
      setUser({ ...user, [key]: value });
    },
    [user]
  );

  const hanldeSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const currentUser = user;
      dispatch(signIn(currentUser, props.history, alertError));
    },
    [user, dispatch, props.history]
  );

  return (
    <Box className={classes.login}>
      <Box className={classes.loginWrapper}>
        <Box className={classes.loginContainer}>
          <Box className={classes.loginLogo}>
            <Link to="/">
              <img src={logoLogin} alt="logo" />
            </Link>
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
            </Box>
            <Box className={classes.txtSubtitle}>
              <Typography component="p">
                Nếu bạn chưa có tài khoản, hãy
                <Link to="/signup"> đăng kí tài khoản tại đây</Link>
              </Typography>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default SignIn;
