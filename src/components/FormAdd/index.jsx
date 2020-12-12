import {
  Box,
  Button,
  Divider,
  FormControl,
  InputLabel,
  NativeSelect,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { addMovie } from "../../redux/actions/movieActions";
import { addUser } from "../../redux/actions/userActions";
import { DatepickerAddMovie } from "../Datepicker";
import Style from "./style";

const date = new Date();

export const FormAddMovie = () => {
  const classes = Style();
  const dispatch = useDispatch();

  const [movie, setMovie] = useState({
    maPhim: 0,
    tenPhim: "",
    biDanh: "",
    trailer: "",
    hinhAnh: {},
    moTa: "",
    maNhom: "GP03",
    ngayKhoiChieu: date,
    danhGia: 5,
  });

  const [errorRegex, setErrorRegex] = useState({
    trailer: false,
  });

  const resetForm = useCallback(() => {
    return document.getElementById("formAddMovie").reset();
  }, []);

  const submitAddMovie = useCallback(
    (e) => {
      e.preventDefault();
      let form_data = new FormData();
      for (let key in movie) {
        form_data.append(key, movie[key]);
      }
      dispatch(addMovie(form_data, alertSuccess, alertError, resetForm));
    },
    [movie]
  );

  const setTimeMovie = useCallback(
    (time) => {
      const year = time.slice(0, 4);
      const month = time.slice(5, 7);
      const day = time.slice(8, 10);
      const newDate = day + "/" + month + "/" + year;

      setMovie({ ...movie, ngayKhoiChieu: newDate });
    },
    [movie]
  );

  const fileSelectedHandler = useCallback(
    (e) => {
      setMovie({ ...movie, hinhAnh: e.target.files[0] });
    },
    [movie, setMovie]
  );

  const handleInput = useCallback(
    (e) => {
      const name = e.target.name;
      const value = e.target.value;
      switch (name) {
        case "trailer": {
          if (value.includes("https://www.youtube.com/")) {
            const index = value.indexOf("=");
            if (index !== -1) {
              const newValue = value.slice(index + 1, index + 12);
              const linkTrailer = "https://www.youtube.com/embed/" + newValue;
              setMovie({
                ...movie,
                [name]: linkTrailer,
              });
              setErrorRegex({ ...errorRegex, trailer: false });
            } else {
              setMovie({
                ...movie,
                [name]: value,
              });
              setErrorRegex({ ...errorRegex, trailer: false });
            }
          } else {
            setErrorRegex({ ...errorRegex, trailer: true });
          }
          if (value === "") {
            setErrorRegex({ ...errorRegex, trailer: false });
          }
          break;
        }
        default: {
          setMovie({ ...movie, [name]: value });
        }
      }
    },
    [movie, errorRegex]
  );

  const authSubmit = useCallback(() => {
    for (let key in movie) {
      if (movie[key] === "") {
        return false;
      }
    }
    if (errorRegex.trailer === true) return false;
    return true;
  }, [errorRegex, movie]);

  const alertSuccess = useCallback(() => {
    return Swal.fire({
      icon: "success",
      title: "Thêm phim mới thành công",
      showConfirmButton: false,
      timer: 1500,
    });
  }, []);

  const alertError = useCallback((Text) => {
    return Swal.fire({
      icon: "error",
      title: Text,
      confirmButtonText: "OK",
      confirmButtonColor: "#f55960",
    });
  }, []);

  return (
    <Paper elevation={3}>
      <Box className={classes.boxContainer}>
        <Box className={`${classes.headTitle} headTitleBox`}>
          <Typography component="span">Thêm phim</Typography>
        </Box>
        <Divider variant="middle" />
        <Box className={classes.boxContent}>
          <form onSubmit={submitAddMovie} id="formAddMovie">
            <div>
              <TextField
                id="outlined-basic"
                label="Tên phim"
                variant="outlined"
                name="tenPhim"
                onBlur={handleInput}
              />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Bí danh"
                variant="outlined"
                name="biDanh"
                onBlur={handleInput}
              />
            </div>
            <div>
              <TextField
                variant="outlined"
                type="file"
                name="hinhAnh"
                margin="dense"
                fullWidth
                color="secondary"
                className="inputFile"
                onChange={fileSelectedHandler}
              />
            </div>
            <div>
              <TextField
                variant="outlined"
                multiline
                margin="dense"
                label="Mô tả"
                name="moTa"
                fullWidth
                color="secondary"
                onBlur={handleInput}
              />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Link trailer"
                variant="outlined"
                name="trailer"
                onBlur={handleInput}
              />
            </div>
            <div>
              <DatepickerAddMovie
                data={movie.ngayKhoiChieu}
                setTimeMovie={setTimeMovie}
                type={true}
              />
            </div>

            <Box className={`${classes.boxTxtError} errorTxtChangeInfo`}>
              <Typography>
                {errorRegex.trailer
                  ? "- Trailer không đúng định dạng, nên là link youtube"
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
                <Typography component="span">Lưu ý: </Typography>Một số quy định
                trong việc tạo phim mới.
              </Typography>
              <Typography>
                - Nhập đầy đủ thông tin mới có thể thêm phim mới
              </Typography>
              <Typography>- File hình ảnh phải là đuôi jpg, png</Typography>
              <Typography>- Tralier nên dùng link youtube</Typography>
            </div>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export const FormAddUser = () => {
  const classes = Style();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP03",
    maLoaiNguoiDung: "",
    hoTen: "",
  });

  const [errorName, setErrorName] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);

  const submitAddUser = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(addUser(user, alertSuccess, alertError, resetForm));
    },
    [user]
  );

  const authSubmit = useCallback(() => {
    for (let key in user) {
      if (user[key] === "") {
        return false;
      }
    }
    if (errorName === true || errorPhone == true) {
      return false;
    }
    return true;
  }, [user, errorName, errorPhone]);

  const handleInput = useCallback(
    (e) => {
      const value = e.target.value;
      const name = e.target.name;
      const regexPhone = /^[s\./0-9]*$/g;
      const regexName = /[0-9]/g;
      switch (name) {
        case "hoTen": {
          if (value.match(regexName)) {
            setErrorName(true);
          } else {
            setErrorName(false);
            setUser({ ...user, [name]: value });
          }
          break;
        }
        case "soDt": {
          if (!value.match(regexPhone)) {
            setErrorPhone(true);
          } else {
            setErrorPhone(false);
            setUser({ ...user, [name]: value });
          }
          break;
        }
        default: {
          setUser({ ...user, [name]: value });
        }
      }
    },
    [user]
  );

  const alertSuccess = useCallback(() => {
    return Swal.fire({
      icon: "success",
      title: "Thêm người dùng mới thành công",
      showConfirmButton: false,
      timer: 1500,
    });
  }, []);

  const alertError = useCallback((Text) => {
    return Swal.fire({
      icon: "error",
      title: Text,
      confirmButtonText: "OK",
      confirmButtonColor: "#f55960",
    });
  }, []);

  const resetForm = useCallback(() => {
    return document.getElementById("formAddUser").reset();
  }, []);

  return (
    <Paper elevation={3}>
      <Box className={classes.boxContainer}>
        <Box className={`${classes.headTitle} headTitleBox`}>
          <Typography component="span">Thêm phim</Typography>
        </Box>
        <Divider variant="middle" />
        <Box className={classes.boxContent}>
          <form onSubmit={submitAddUser} id="formAddUser">
            <div>
              <TextField
                id="outlined-read-only-input"
                label="Tài khoản"
                variant="outlined"
                name="taiKhoan"
                onBlur={handleInput}
              />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Mật khẩu"
                variant="outlined"
                name="matKhau"
                type="password"
                onBlur={handleInput}
              />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                type="email"
                name="email"
                onBlur={handleInput}
              />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Số điện thoại"
                variant="outlined"
                name="soDt"
                onBlur={handleInput}
                inputProps={{ maxLength: 10, minLength: 10 }}
              />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Họ tên"
                variant="outlined"
                name="hoTen"
                onBlur={handleInput}
              />
            </div>
            <div>
              <FormControl className={classes.formControl} variant="outlined">
                <InputLabel htmlFor="outlined-age-native-simple">
                  Loại người dùng
                </InputLabel>
                <NativeSelect
                  inputProps={{
                    name: "maLoaiNguoiDung",
                    id: "outlined-age-native-simple",
                  }}
                  onChange={handleInput}
                >
                  <option aria-label="None" value="" />
                  <option value="KhachHang">Khách Hàng</option>
                  <option value="QuanTri">Quản trị</option>
                </NativeSelect>
              </FormControl>
            </div>

            <Box className={`${classes.boxTxtError} errorTxtChangeInfo`}>
              <Typography>
                {errorName ? "- Họ và tên không thể có số." : null}
              </Typography>
              <Typography>
                {errorPhone
                  ? "- Số điện thoại vui lòng không thêm kí tự ngoài số."
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
                <Typography component="span">Lưu ý: </Typography>
                Vui lòng để ý một lưu ý cơ bản sau.
              </Typography>
              <Typography>- Email phải đúng định dạng @xxx.com.</Typography>
              <Typography>
                - Không nên sử dụng những chuỗi dễ đoán như ngày sinh trong mật
                khẩu.
              </Typography>
              <Typography>
                - Số điện thoại vui lòng không thêm kí tự & chữ, độ dài phải là
                10 kí tự.
              </Typography>
              <Typography>- Họ tên vui lòng không thêm số.</Typography>
              <Typography>- Vui lòng chọn loại người dùng.</Typography>
            </div>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};
