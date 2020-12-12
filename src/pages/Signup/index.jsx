import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";

import logoLogin from "../../assets/imgs/logoLogin.png";
import { signUp, signIn } from "../../redux/actions/userActions";
import Style from "./style";

const SignUp = (props) => {
  const classes = Style(props);
  const dispatch = useDispatch();
  const history = useHistory();

  const [userSignUp, setUserSignUp] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "gp03",
    maLoaiNguoiDung: "KhachHang",
    hoTen: "",
  });
  const [alertNumberPhone, setAlertNumberPhone] = useState(false);
  const [alertEmail, setAlertEmail] = useState(false);
  const [alertName, setAlertName] = useState(false);
  const [alertEmpty, setAlertEmpty] = useState({
    taiKhoan: false,
    matKhau: false,
    hoTen: false,
    email: false,
    soDt: false,
  });

  const alertSubmit = useCallback(() => {
    const user = {
      taiKhoan: userSignUp.taiKhoan,
      matKhau: userSignUp.matKhau,
    };
    return Swal.fire({
      icon: "success",
      title: "Đăng kí tài khoản thành công",
      timer: 2000,
      showConfirmButton: false,
      onClose: () => {
        dispatch(signIn(user, history));
      },
    });
  }, [history, userSignUp]);

  const alertError = useCallback(
    (text) => {
      return Swal.fire({
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#fb4226",
        title: text,
      });
    },
    [history]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      let auth = true;
      let obj = { ...alertEmpty };
      for (let key in userSignUp) {
        if (userSignUp[key] === "") {
          switch (key) {
            case "hoTen": {
              if (alertName) {
                obj = {
                  ...obj,
                  [key]: false,
                };
              } else {
                obj = {
                  ...obj,
                  [key]: true,
                };
                auth = false;
              }
              break;
            }
            case "email": {
              if (alertEmail) {
                obj = {
                  ...obj,
                  [key]: false,
                };
              } else {
                obj = {
                  ...obj,
                  [key]: true,
                };
                auth = false;
              }
              break;
            }
            case "soDt": {
              if (alertNumberPhone) {
                obj = {
                  ...obj,
                  [key]: false,
                };
              } else {
                obj = {
                  ...obj,
                  [key]: true,
                };
                auth = false;
              }
              break;
            }
            default: {
              obj = {
                ...obj,
                [key]: true,
              };
              auth = false;
              break;
            }
          }
        }
      }
      setAlertEmpty(obj);

      if (auth) {
        return dispatch(signUp(userSignUp, alertSubmit, alertError));
      }
    },
    [userSignUp, alertEmpty, alertNumberPhone, alertEmail, alertName]
  );

  const handleChange = useCallback(
    (e) => {
      const regexPhone = /[A-Za-z]/g;
      const regexName = /[0-9]/g;
      const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      const name = e.target.name;
      const value = e.target.value;
      if (value === "") {
        switch (name) {
          case "email": {
            setAlertEmail(false);
            break;
          }
          case "hoTen": {
            setAlertName(false);
            break;
          }
          case "soDt": {
            setAlertNumberPhone(false);
            break;
          }
        }
        setAlertEmpty({ ...alertEmpty, [name]: true });
        setUserSignUp({ ...userSignUp, [name]: value });
      } else {
        setAlertEmpty({ ...alertEmpty, [name]: false });
        switch (name) {
          case "soDt": {
            const value = e.target.value.match(regexPhone);
            if (value) {
              return setAlertNumberPhone(true);
            } else {
              setAlertNumberPhone(false);
            }
            break;
          }
          case "email": {
            const value = e.target.value.match(regexEmail);
            if (!value) {
              return setAlertEmail(true);
            } else {
              setAlertEmail(false);
            }
            break;
          }
          case "hoTen": {
            const value = e.target.value.match(regexName);
            if (value) {
              return setAlertName(true);
            } else {
              setAlertName(false);
            }
            break;
          }
        }
        setUserSignUp({ ...userSignUp, [name]: value });
      }
    },
    [userSignUp, alertEmpty]
  );

  const alertEmptyInput = useCallback(
    (e) => {
      const name = e.target.name;
      const value = e.target.value;
      if (value === "") {
        setAlertEmpty({ ...alertEmpty, [name]: true });
      } else {
        setAlertEmpty({ ...alertEmpty, [name]: false });
      }
    },
    [alertEmpty, userSignUp]
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
          <form onSubmit={handleSubmit}>
            <Grid container spacing={1} style={{ marginBottom: 10 }}>
              <Grid item md={12} sm={12} className={classes.boxInput}>
                <Box py={0.2} className={classes.wrapperInput}>
                  <TextField
                    onChange={handleChange}
                    className={`${classes.input} ${
                      alertEmpty.taiKhoan ? "inputError" : null
                    }`}
                    id="filled-basic"
                    name="taiKhoan"
                    label="Username"
                    variant="filled"
                    onBlur={alertEmptyInput}
                  />
                  {alertEmpty.taiKhoan ? (
                    <Box className={classes.wrapperAlert}>
                      <Typography>Vui lòng không để trống !</Typography>
                    </Box>
                  ) : null}
                </Box>
              </Grid>
              <Grid item md={12} sm={12} className={classes.boxInput}>
                <Box py={0.2} className={classes.wrapperInput}>
                  <TextField
                    onChange={handleChange}
                    className={`${classes.input} ${
                      alertEmpty.matKhau ? "inputError" : null
                    }`}
                    onBlur={alertEmptyInput}
                    id="filled-basic"
                    type="password"
                    name="matKhau"
                    label="Password"
                    variant="filled"
                  />
                  {alertEmpty.matKhau ? (
                    <Box className={classes.wrapperAlert}>
                      <Typography>Vui lòng không để trống !</Typography>
                    </Box>
                  ) : null}
                </Box>
              </Grid>
              <Grid item md={12} sm={12} className={classes.boxInput}>
                <Box py={0.2} className={classes.wrapperInput}>
                  <TextField
                    onChange={handleChange}
                    name="hoTen"
                    className={`${classes.input} ${
                      alertEmpty.hoTen
                        ? "inputError"
                        : alertName
                        ? "inputError"
                        : null
                    }`}
                    onBlur={alertEmptyInput}
                    id="filled-basic"
                    label="Full Name"
                    variant="filled"
                  />
                  {alertName ? (
                    <Box className={classes.wrapperAlert}>
                      <Typography>Họ tên không được có số !</Typography>
                    </Box>
                  ) : null}
                  {alertEmpty.hoTen ? (
                    <Box className={classes.wrapperAlert}>
                      <Typography>Vui lòng không để trống !</Typography>
                    </Box>
                  ) : null}
                </Box>
              </Grid>
              <Grid item md={12} sm={12} className={classes.boxInput}>
                <Box py={0.2} className={classes.wrapperInput}>
                  <TextField
                    onChange={handleChange}
                    className={`${classes.input} ${
                      alertEmpty.email
                        ? "inputError"
                        : alertEmail
                        ? "inputError"
                        : null
                    }`}
                    onBlur={alertEmptyInput}
                    id="filled-basic"
                    type="email"
                    name="email"
                    label="Email"
                    variant="filled"
                  />
                  {alertEmail ? (
                    <Box className={classes.wrapperAlert}>
                      <Typography>
                        Phải bao gồm '@xxx.com' trong địa chỉ email.
                      </Typography>
                    </Box>
                  ) : null}
                  {alertEmpty.email ? (
                    <Box className={classes.wrapperAlert}>
                      <Typography>Vui lòng không để trống !</Typography>
                    </Box>
                  ) : null}
                </Box>
              </Grid>
              <Grid item md={12} sm={12} className={classes.boxInput}>
                <Box py={0.2} className={classes.wrapperInput}>
                  <TextField
                    onChange={handleChange}
                    className={`${classes.input} ${
                      alertEmpty.soDt
                        ? "inputError"
                        : alertNumberPhone
                        ? "inputError"
                        : null
                    }`}
                    onBlur={alertEmptyInput}
                    id="filled-basic"
                    name="soDt"
                    label="Phone Number"
                    variant="filled"
                  />
                  {alertNumberPhone ? (
                    <Box className={classes.wrapperAlert}>
                      <Typography>Số điện thoại chỉ nhập số !</Typography>
                    </Box>
                  ) : null}
                  {alertEmpty.soDt ? (
                    <Box className={classes.wrapperAlert}>
                      <Typography>Vui lòng không để trống !</Typography>
                    </Box>
                  ) : null}
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
