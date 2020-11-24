import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

import logoLogin from "../../assets/imgs/logoLogin.png";
import Style from "./style";

const SignUp = (props) => {
  const classes = Style(props);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = () => {};

  return (
    <Box className={classes.login}>
      <Box className={classes.loginWrapper}>
        <Box className={classes.loginContainer}>
          <Box className={classes.loginLogo}>
            <Link to="/">
              <img src={logoLogin} alt="logo" />
            </Link>
          </Box>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={1} style={{ marginBottom: 10 }}>
              <Grid item md={12}>
                <Box py={0.2}>
                  <TextField
                    onChange={handleChange}
                    className={classes.input}
                    id="filled-basic"
                    name="taiKhoan"
                    label="Username"
                    variant="filled"
                  />
                </Box>
              </Grid>
              <Grid item md={12}>
                <Box py={0.2}>
                  <TextField
                    onChange={handleChange}
                    className={classes.input}
                    id="filled-basic"
                    type="password"
                    name="matKhau"
                    label="Password"
                    variant="filled"
                  />
                </Box>
              </Grid>
              <Grid item md={12}>
                <Box py={0.2}>
                  <TextField
                    onChange={handleChange}
                    name="hoTen"
                    className={classes.input}
                    id="filled-basic"
                    label="Full Name"
                    variant="filled"
                  />
                </Box>
              </Grid>
              <Grid item md={12}>
                <Box py={0.2}>
                  <TextField
                    onChange={handleChange}
                    className={classes.input}
                    id="filled-basic"
                    type="email"
                    name="email"
                    label="Email"
                    variant="filled"
                  />
                </Box>
              </Grid>
              <Grid item md={12}>
                <Box py={0.2}>
                  <TextField
                    onChange={handleChange}
                    className={classes.input}
                    id="filled-basic"
                    name="soDt"
                    label="Phone Number"
                    variant="filled"
                  />
                </Box>
              </Grid>
            </Grid>
            <Typography
              component="p"
              variant="subtitle2"
              className={classes.txtInfo}
            >
              Đăng ký tài khoản để được nhiều ưu đãi, mua vé và bảo mật thông
              tin!
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
                Đăng kí
              </Button>
            </Box>
            <Box className={classes.txtSubtitle}>
              <Typography component="p">
                Nếu bạn đã có tài khoản , hãy
                <Link to="/signin"> đăng nhập tại đây</Link>
              </Typography>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
