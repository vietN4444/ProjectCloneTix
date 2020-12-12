import {
  Avatar,
  Box,
  Button,
  Divider,
  Fade,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { memo, useCallback, useEffect, useState } from "react";

import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import LockIcon from "@material-ui/icons/Lock";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PersonIcon from "@material-ui/icons/Person";

import { SubMenuItemsProfile } from "../MenuProfile";
import Style from "./style";
import { useDispatch } from "react-redux";
import { changeUserInformation } from "../../redux/actions/userActions";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

const FormChangePassword = ({
  setErrorCheckNewPass,
  setErrorCheckPass,
  authSubmit,
  errCheckNewPass,
  checkNewPassword,
  checkChangePassword,
  handleShowPassword,
  showPassword,
  errCheckPass,
  checkPassword,
  handleInput,
  submitChangePass,
  typeUser,
  data,
  ...props
}) => {
  const classes = Style(props);

  useEffect(() => {
    return () => {
      setErrorCheckPass(false);
      setErrorCheckNewPass({
        confirm: false,
        equalOldPass: false,
      });
    };
  }, [setErrorCheckPass, setErrorCheckNewPass]);

  return (
    <Box className={classes.boxContainer}>
      <Box className={`${classes.headTitle} headTitleBox`}>
        <Typography component="span">Thay đổi mật khẩu</Typography>
      </Box>
      <Divider variant="middle" />
      <Box className={classes.boxContent}>
        <form onSubmit={submitChangePass}>
          <div>
            <TextField
              id="outlined-basic"
              label="Mật khẩu hiện tại"
              variant="outlined"
              name="passCurrent"
              onChange={handleInput}
              onBlur={checkPassword}
              className={errCheckPass ? "inputError" : null}
              type={showPassword.current ? "text" : "password"}
            />
            {showPassword.current ? (
              <VisibilityIcon
                data-name="current"
                onClick={handleShowPassword}
              />
            ) : (
              <VisibilityOffIcon
                data-name="current"
                onClick={handleShowPassword}
              />
            )}
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="Mật khẩu mới"
              variant="outlined"
              name="newPass"
              type={showPassword.new ? "text" : "password"}
              onChange={handleInput}
              onBlur={checkChangePassword}
              className={errCheckPass ? "inputError" : null}
            />
            {showPassword.new ? (
              <VisibilityIcon data-name="new" onClick={handleShowPassword} />
            ) : (
              <VisibilityOffIcon data-name="new" onClick={handleShowPassword} />
            )}
          </div>
          <div>
            <TextField
              id="input-renewpass"
              label="Xác nhận Mật khẩu mới"
              variant="outlined"
              name="comfirmNewPass"
              onChange={handleInput}
              type={showPassword.confirmNew ? "text" : "password"}
              onBlur={checkNewPassword}
              className={errCheckPass ? "inputError" : null}
            />
            {showPassword.confirmNew ? (
              <VisibilityIcon
                data-name="confirmNew"
                onClick={handleShowPassword}
              />
            ) : (
              <VisibilityOffIcon
                data-name="confirmNew"
                onClick={handleShowPassword}
              />
            )}
          </div>
          <Box className={classes.boxTxtError}>
            <Typography>
              {errCheckPass ? "- Mặt khẩu hiện tại không chính xác" : null}
            </Typography>
            <Typography>
              {errCheckNewPass.equalOldPass
                ? "- Mật khẩu mới trùng với mật khẩu cũ"
                : errCheckNewPass.confirm
                ? "- Mật khẩu xác nhận không trùng khớp với mật khẩu vừa tạo"
                : null}
            </Typography>
          </Box>
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            disabled={!authSubmit()}
          >
            Thay đổi
          </Button>
        </form>
        <Box className={classes.informationPassword}>
          <div>
            <Typography>
              <Typography component="span">Gợi ý: </Typography>Dùng ít nhất 8 kí
              tự.
            </Typography>
            <Typography>
              Kết hợp các ký tự a-z, số 0-9 và một số kí tự đặc biệt.
            </Typography>
            <Typography>
              Không nên sử dụng những chuỗi dễ đoán như ngày sinh trong mật khẩu
            </Typography>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

const UserInformation = ({
  forwardRef,
  subMenu,
  res,
  authMenu,
  typeUser,
  data,
  ...props
}) => {
  const classes = Style(props);
  const dispatch = useDispatch();
  const history = useHistory();

  const [checkedPage, setCheckedPage] = useState(false);
  const [menuTab, setMenuTab] = useState(0);
  const [errCheckPass, setErrorCheckPass] = useState(false);
  const [checkedNewpass, setCheckedNewpass] = useState(false);
  const [errCheckNewPass, setErrorCheckNewPass] = useState({
    confirm: false,
    equalOldPass: false,
  });
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirmNew: false,
  });
  const [checkedPass, setCheckedPass] = useState({
    passCurrent: "",
    newPass: "",
    comfirmNewPass: "",
  });

  const [userChangeInfo, setUserChangeInfo] = useState({
    SDT: "",
    email: "",
    hoten: "",
  });

  const [errorRegex, setErrorRegex] = useState({
    phone: false,
    email: false,
    name: false,
  });

  const alertChangeInfo = useCallback(() => {
    return Swal.fire({
      icon: "success",
      title: "Thay đổi thông tin tài khoản thành công",
      confirmButtonText: "OK",
      confirmButtonColor: "#f55960",
      onClose: () => {
        history.go(0);
      },
    });
  }, []);

  const handleShowPassword = useCallback(
    (e) => {
      const value = e.currentTarget.dataset.name;
      setShowPassword({ ...showPassword, [value]: !showPassword[value] });
    },
    [showPassword]
  );

  const checkPassword = useCallback(
    (e) => {
      const value = e.target.value;
      if (value !== data.matKhau) {
        if (value === "") {
          return setErrorCheckPass(false);
        }
        setErrorCheckPass(true);
      } else {
        setErrorCheckPass(false);
      }
    },
    [data]
  );

  const handleInput = useCallback(
    (e) => {
      const value = e.target.value;
      const name = e.target.name;
      if (name === "newPass") {
        document.getElementById("input-renewpass").value = "";
        return setCheckedPass({
          ...checkedPass,
          [name]: value,
          comfirmNewPass: "",
        });
      }
      setCheckedPass({ ...checkedPass, [name]: value });
    },
    [checkedPass]
  );

  const checkChangePassword = useCallback(
    (e) => {
      const value = e.target.value;
      if (value === data.matKhau) {
        if (value === "") {
          return setErrorCheckNewPass({
            ...errCheckNewPass,
            equalOldPass: false,
          });
        }
        setErrorCheckNewPass({
          ...errCheckNewPass,
          equalOldPass: true,
        });
      } else {
        setErrorCheckNewPass({
          ...errCheckNewPass,
          equalOldPass: false,
        });
      }
    },
    [errCheckNewPass, data]
  );

  const checkNewPassword = useCallback(
    (e) => {
      const value = e.target.value;
      if (value === checkedPass.newPass) {
        setErrorCheckNewPass({ ...errCheckNewPass, confirm: false });
        setCheckedNewpass(true);
      } else {
        if (value === "") {
          return setErrorCheckNewPass({ ...errCheckNewPass, confirm: false });
        }
        setErrorCheckNewPass({ ...errCheckNewPass, confirm: true });
        setCheckedNewpass(false);
      }
    },
    [checkedPass, errCheckNewPass]
  );

  const submitChangePass = useCallback(
    (e) => {
      e.preventDefault();
      const user = {
        taiKhoan: data.taiKhoan,
        matKhau: data.matKhau,
        email: data.email,
        soDt: data.soDT,
        maNhom: data.maNhom,
        maLoaiNguoiDung: typeUser,
        hoTen: data.hoTen,
      };
      if (authSubmit) {
        return dispatch(changeUserInformation(user, alertChangeInfo));
      }
    },
    [data, typeUser]
  );

  const authSubmit = useCallback(() => {
    if (
      checkedPass.newPass !== "" &&
      checkedPass.passCurrent !== "" &&
      checkedPass.comfirmNewPass !== ""
    ) {
      if (
        errCheckNewPass.confirm === false &&
        errCheckNewPass.equalOldPass === false &&
        checkedNewpass === true
      )
        return true;
    } else {
      return false;
    }
  }, [errCheckNewPass, checkedPass, checkedNewpass]);

  const handleInputTabInfo = useCallback(
    (e) => {
      const value = e.target.value;
      const name = e.target.name;

      setUserChangeInfo({ ...userChangeInfo, [name]: value });
    },
    [userChangeInfo]
  );

  const checkInputTabInfo = useCallback(
    (e) => {
      const name = e.target.name;
      const regexPhone = /[A-Za-z]/g;
      const regexName = /[0-9]/g;
      const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      switch (name) {
        case "SDT": {
          const value = e.target.value.match(regexPhone);
          if (value) {
            return setErrorRegex({
              ...errorRegex,
              phone: true,
            });
          } else {
            setErrorRegex({
              ...errorRegex,
              phone: false,
            });
          }
          break;
        }
        case "email": {
          const value = e.target.value.match(regexEmail);
          if (value) {
            return setErrorRegex({
              ...errorRegex,
              email: false,
            });
          } else {
            setErrorRegex({
              ...errorRegex,
              email: true,
            });
          }
          break;
        }
        case "hoten": {
          const value = e.target.value.match(regexName);
          if (value) {
            return setErrorRegex({
              ...errorRegex,
              name: true,
            });
          } else {
            setErrorRegex({
              ...errorRegex,
              name: false,
            });
          }
          break;
        }
        default:
          return;
      }
    },
    [errorRegex]
  );

  const authSubmitChangeInfo = useCallback(() => {
    if (
      userChangeInfo.SDT !== "" ||
      userChangeInfo.email !== "" ||
      userChangeInfo.hoten !== ""
    ) {
      if (
        errorRegex.name === false &&
        errorRegex.email === false &&
        errorRegex.phone === false
      ) {
        return true;
      }
    } else {
      return false;
    }
  }, [userChangeInfo, errorRegex]);

  const submitChangeInfo = useCallback(
    (e) => {
      e.preventDefault();
      let user = {
        taiKhoan: data.taiKhoan,
        matKhau: data.matKhau,
        email: data.email,
        soDt: data.soDT,
        maNhom: data.maNhom,
        maLoaiNguoiDung: typeUser,
        hoTen: data.hoTen,
      };
      if (userChangeInfo.SDT !== "") {
        user = { ...user, soDt: userChangeInfo.SDT };
      }
      if (userChangeInfo.email !== "") {
        user = { ...user, email: userChangeInfo.email };
      }
      if (userChangeInfo.hoten !== "") {
        user = { ...user, hoTen: userChangeInfo.hoten };
      }
      if (authSubmit) {
        return dispatch(changeUserInformation(user, alertChangeInfo));
      }
    },
    [data, typeUser, userChangeInfo]
  );

  const renderContent = useCallback(() => {
    switch (menuTab) {
      case 0: {
        return (
          <List>
            <ListItem>
              <ListItemText
                primary="Thông tin tài khoản"
                className={classes.headTitle}
              />
            </ListItem>
            <Divider variant="middle" component="li" />
            <ListItem className={classes.listItem}>
              <ListItemAvatar>
                <Avatar>
                  <PermContactCalendarIcon />
                </Avatar>
              </ListItemAvatar>
              <Box className={classes.listItemText}>
                <Typography component="h1">
                  Tên khách hàng:
                  <Typography component="span">{data?.hoTen}</Typography>
                </Typography>
                <Typography component="p">
                  Họ và tên chủ tài khoản, cũng là tên của tài khoản hiển thị
                  trên website. Bạn có thể thay đổi ở phần thay đổi thông tin cá
                  nhân
                </Typography>
              </Box>
            </ListItem>
            <Divider variant="middle" component="li" />
            <ListItem className={classes.listItem}>
              <ListItemAvatar>
                <Avatar>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <Box className={classes.listItemText}>
                <Typography component="h1">
                  Tài khoản:
                  <Typography component="span">{data?.taiKhoan}</Typography>
                </Typography>
                <Typography component="p">
                  Là tên tài khoản (username) để đăng nhập tài khoản.
                </Typography>
              </Box>
            </ListItem>
            <Divider variant="middle" component="li" />
            <ListItem className={classes.listItem}>
              <ListItemAvatar>
                <Avatar>
                  <LockIcon />
                </Avatar>
              </ListItemAvatar>
              <Box className={classes.listItemText}>
                <Typography component="h1">Mật khẩu</Typography>
                <Typography component="p">
                  Mật khẩu cần được kết hợp bởi nhiều chữ cái, số và ký tự đặc
                  biệt để bảo mật tài khoản.
                </Typography>
              </Box>
              <Button variant="outlined" onClick={() => setMenuTab(1)}>
                Thay đổi
              </Button>
            </ListItem>
            <Divider variant="middle" component="li" />
            <ListItem className={classes.listItem}>
              <ListItemAvatar>
                <Avatar>
                  <PhoneIphoneIcon />
                </Avatar>
              </ListItemAvatar>
              <Box className={classes.listItemText}>
                <Typography component="h1">
                  Số điện thoại:
                  <Typography component="span">{data?.soDT}</Typography>
                </Typography>
                <Typography component="p">
                  Số điện thoại dùng để đăng kí tài khoản. Thông tin này có thể
                  được dùng để xác minh bạn là chủ sở hữu tài khoản nhằm thiết
                  lập lại mật khẩu
                </Typography>
              </Box>
            </ListItem>
            <Divider variant="middle" component="li" />
            <ListItem className={classes.listItem}>
              <ListItemAvatar>
                <Avatar>
                  <MailOutlineIcon />
                </Avatar>
              </ListItemAvatar>
              <Box className={classes.listItemText}>
                <Typography component="h1">
                  Email:
                  <Typography component="span">{data?.email}</Typography>
                </Typography>
                <Typography component="p">
                  Email có thể được sử dụng để thay đổi mật khẩu khi không có
                  công cụ bảo mật nào khác được bật. Cũng như nhận các tin tức
                  hoạt động của tài khoản.
                </Typography>
              </Box>
            </ListItem>
          </List>
        );
      }
      case 1: {
        return (
          <FormChangePassword
            setErrorCheckNewPass={setErrorCheckNewPass}
            setErrorCheckPass={setErrorCheckPass}
            authSubmit={authSubmit}
            errCheckNewPass={errCheckNewPass}
            checkNewPassword={checkNewPassword}
            checkChangePassword={checkChangePassword}
            handleShowPassword={handleShowPassword}
            showPassword={showPassword}
            errCheckPass={errCheckPass}
            checkPassword={checkPassword}
            handleInput={handleInput}
            submitChangePass={submitChangePass}
            typeUser={typeUser}
            data={data}
          />
        );
      }
      case 2: {
        return (
          <Box className={classes.boxContainer}>
            <Box className={`${classes.headTitle} headTitleBox`}>
              <Typography component="span">
                Thay đổi thông tin cá nhân
              </Typography>
            </Box>
            <Divider variant="middle" />
            <Box className={classes.boxContent}>
              <form onSubmit={submitChangeInfo}>
                <div>
                  <TextField
                    id="outlined-read-only-input"
                    label="Tài khoản"
                    variant="outlined"
                    disabled
                    defaultValue={data.taiKhoan}
                  />
                </div>
                <div>
                  <TextField
                    id="outlined-basic"
                    label="Mật khẩu"
                    variant="outlined"
                    type="password"
                    disabled
                    defaultValue={data.matKhau}
                  />
                </div>
                <div>
                  <TextField
                    id="outlined-basic"
                    label="Số điện thoại"
                    variant="outlined"
                    name="SDT"
                    defaultValue={data.soDT}
                    onChange={handleInputTabInfo}
                    onBlur={checkInputTabInfo}
                  />
                </div>
                <div>
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    name="email"
                    defaultValue={data.email}
                    onChange={handleInputTabInfo}
                    onBlur={checkInputTabInfo}
                  />
                </div>
                <div>
                  <TextField
                    id="outlined-basic"
                    label="Tên khách hàng"
                    variant="outlined"
                    name="hoten"
                    defaultValue={data.hoTen}
                    onChange={handleInputTabInfo}
                    onBlur={checkInputTabInfo}
                  />
                </div>
                <Box className={`${classes.boxTxtError} errorTxtChangeInfo`}>
                  <Typography>
                    {errorRegex.phone
                      ? "- Số điện thoại phải là số (0-9)"
                      : null}
                  </Typography>
                  <Typography>
                    {errorRegex.email ? "- Email phải có định dạng @" : null}
                  </Typography>
                  <Typography>
                    {errorRegex.name ? "- Tên không thể có số." : null}
                  </Typography>
                </Box>
                <Button
                  type="submit"
                  color="secondary"
                  variant="contained"
                  disabled={!authSubmitChangeInfo()}
                >
                  Thay đổi
                </Button>
              </form>
              <Box className={classes.informationPassword}>
                <div>
                  <Typography>
                    <Typography component="span">Lưu ý: </Typography>Chỉ thay
                    đổi được một số thông tin cơ bản.
                  </Typography>
                  <Typography>- Email phải đúng định dạng @xxx.com.</Typography>
                  <Typography>
                    - Không nên sử dụng những chuỗi dễ đoán như ngày sinh trong
                    mật khẩu
                  </Typography>
                </div>
              </Box>
            </Box>
          </Box>
        );
      }
      default: {
        return null;
      }
    }
  }, [
    data,
    menuTab,
    errCheckPass,
    showPassword,
    errCheckNewPass,
    handleInput,
    errorRegex,
  ]);

  useEffect(() => {
    setTimeout(setCheckedPage(true), 2000);
  }, []);

  useEffect(() => {
    subMenu(menuTab);
  }, [menuTab, subMenu]);

  return (
    <Fade in={checkedPage}>
      <Grid container spacing={2}>
        <Grid item md={3} className={classes.subMenuItems} ref={forwardRef}>
          <Paper elevation={3}>
            <SubMenuItemsProfile
              func={setMenuTab}
              authMenu={authMenu}
              res={res}
            />
          </Paper>
        </Grid>
        <Grid item md={9}>
          <Paper elevation={3}>{renderContent()}</Paper>
        </Grid>
      </Grid>
    </Fade>
  );
};

export default memo(UserInformation);
