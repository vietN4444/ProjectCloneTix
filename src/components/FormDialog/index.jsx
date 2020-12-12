import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
  TextField,
} from "@material-ui/core";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { getCinemaInformationItem } from "../../redux/actions/cinemaActions";
import { addSchedules } from "../../redux/actions/movieActions";
import { Datepicker, DatepickerAddMovie } from "../Datepicker";
import Style from "./style";

const dateAddSchedules = new Date();

export const FormDialog = ({
  submit,
  setMovie,
  data,
  func,
  movieData,
  ...props
}) => {
  const classes = Style(props);

  const handleChangeInput = useCallback(
    (e) => {
      const name = e.currentTarget.name;
      const value = e.currentTarget.value;
      setMovie({
        ...movieData,
        [name]: value,
      });
    },
    [movieData, setMovie]
  );

  const setTimeMovie = useCallback(
    (time) => {
      const year = time.slice(0, 4);
      const month = time.slice(5, 7);
      const day = time.slice(8, 10);

      const newDate = day + "/" + month + "/" + year;

      setMovie({ ...movieData, ngayKhoiChieu: newDate });
    },
    [movieData, setMovie]
  );

  const fileSelectedHandler = useCallback(
    (e) => {
      setMovie({ ...movieData, hinhAnh: e.target.files[0] });
    },
    [movieData, setMovie]
  );

  const handleTrailer = useCallback(
    (e) => {
      const name = e.currentTarget.name;
      const value = e.currentTarget.value;
      const index = value.indexOf("=");
      if (index !== -1) {
        const newValue = value.slice(index + 1, index + 12);
        const linkTrailer = "https://www.youtube.com/embed/" + newValue;
        setMovie({
          ...movieData,
          [name]: linkTrailer,
        });
      } else {
        setMovie({
          ...movieData,
          [name]: value,
        });
      }
    },
    [movieData, setMovie]
  );

  return (
    <Dialog
      open={data}
      onClose={func}
      aria-labelledby="form-dialog-title"
      maxWidth="sm"
      fullWidth
      className={`${classes.dialog} dialogMaxheight`}
      style={{ zIndex: 1024 }}
    >
      <DialogTitle
        align="center"
        id="form-dialog-title"
        className={classes.dialogTitle}
      >
        Thay đổi thông tin phim
      </DialogTitle>
      <form className={classes.form} onSubmit={submit}>
        <DialogContent className={classes.dialogContent}>
          <Grid container spacing={2} className={classes.gridContainer}>
            <Grid item md={6} sm={6}>
              <TextField
                onChange={handleChangeInput}
                disabled
                margin="dense"
                label="Mã phim"
                name="maPhim"
                fullWidth
                color="secondary"
                defaultValue={movieData.maPhim}
                className={classes.input}
              />
            </Grid>
            <Grid item md={6} sm={6}>
              <TextField
                onChange={handleChangeInput}
                margin="dense"
                label="Bí danh"
                name="biDanh"
                fullWidth
                color="secondary"
                defaultValue={movieData.biDanh}
                className={classes.input}
              />
            </Grid>
            <Grid item md={6} sm={6}>
              <TextField
                onChange={handleChangeInput}
                margin="dense"
                label="Tên phim"
                name="tenPhim"
                fullWidth
                color="secondary"
                defaultValue={movieData.tenPhim}
                className={classes.input}
              />
            </Grid>
            <Grid item md={6} sm={6} className={classes.datePicker}>
              <Datepicker
                data={movieData.ngayKhoiChieu}
                setTimeMovie={setTimeMovie}
                type={true}
              />
            </Grid>
            <Grid item md={12} sm={12}>
              <TextField
                onBlur={handleTrailer}
                margin="dense"
                label="Trailer"
                name="trailer"
                fullWidth
                color="secondary"
                defaultValue={movieData.trailer}
                className={classes.input}
              />
            </Grid>
            <Grid item md={12} sm={12}>
              <TextField
                type="file"
                margin="dense"
                fullWidth
                color="secondary"
                className={`${classes.input} ${classes.inputFile}`}
                onChange={fileSelectedHandler}
              />
            </Grid>
            <Grid item md={12} sm={12}>
              <TextField
                onChange={handleChangeInput}
                multiline
                margin="dense"
                label="Mô tả"
                name="moTa"
                fullWidth
                color="secondary"
                defaultValue={movieData.moTa}
                className={classes.input}
              />
            </Grid>
            <Grid item md={12} sm={12}>
              <TextField
                onChange={handleChangeInput}
                margin="dense"
                label="Đánh giá"
                name="danhGia"
                fullWidth
                color="secondary"
                defaultValue={movieData.danhGia}
                className={classes.input}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions className={classes.dialogAction}>
          <Button variant="contained" type="submit" color="secondary">
            Thay đổi
          </Button>
          <Button variant="contained" onClick={func} color="secondary">
            Thoát
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export const FormDialogUserInfo = ({
  submit,
  userData,
  setUser,
  func,
  data,
  props,
}) => {
  const classes = Style(props);

  const [select, setSelect] = useState({
    name: "KhachHang",
  });

  const handleChangeInput = useCallback(
    (e) => {
      setUser({
        ...userData,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    },
    [userData, setUser]
  );

  const handleChange = useCallback(
    (event) => {
      const name = event.target.name;
      setSelect({
        ...select,
        [name]: event.target.value,
      });
    },
    [select]
  );

  return (
    <Dialog
      open={data}
      onClose={func}
      aria-labelledby="form-dialog-title"
      maxWidth="sm"
      fullWidth
      className={`${classes.dialog} dialogMaxheight`}
    >
      <DialogTitle
        align="center"
        id="form-dialog-title"
        className={classes.dialogTitle}
      >
        Thay đổi thông tin tài khoản
      </DialogTitle>
      <form className={classes.form} onSubmit={submit}>
        <DialogContent className={classes.dialogContent}>
          <Grid container spacing={2} className={classes.gridContainer}>
            <Grid item md={12} sm={12}>
              <TextField
                onChange={handleChangeInput}
                disabled
                margin="dense"
                label="Tài khoản"
                name="taiKhoan"
                fullWidth
                color="secondary"
                defaultValue={userData.taiKhoan}
                className={classes.input}
                disabled
              />
            </Grid>
            <Grid item md={12} sm={12}>
              <TextField
                onChange={handleChangeInput}
                margin="dense"
                label="Mật khẩu"
                name="matKhau"
                fullWidth
                color="secondary"
                defaultValue={userData.matKhau}
                className={classes.input}
                disabled
                type="password"
              />
            </Grid>
            <Grid item md={12} sm={12}>
              <TextField
                onChange={handleChangeInput}
                margin="dense"
                label="Họ tên"
                name="hoTen"
                fullWidth
                color="secondary"
                defaultValue={userData.hoTen}
                className={classes.input}
              />
            </Grid>
            <Grid item md={12} sm={12}>
              <TextField
                onChange={handleChangeInput}
                margin="dense"
                label="Email"
                name="email"
                fullWidth
                color="secondary"
                defaultValue={userData.email}
                className={classes.input}
              />
            </Grid>
            <Grid item md={8} sm={8}>
              <TextField
                onChange={handleChangeInput}
                multiline
                margin="dense"
                label="Số điện thoại"
                name="soDt"
                fullWidth
                color="secondary"
                defaultValue={userData.soDt}
                className={classes.input}
              />
            </Grid>
            <Grid item md={4} sm={4}>
              <FormControl className={classes.formControl} disabled>
                <InputLabel htmlFor="name-native-disabled">
                  Loại người dùng
                </InputLabel>
                <NativeSelect
                  value={userData.maLoaiNguoiDung}
                  onChange={handleChange}
                >
                  <option aria-label="None" value="" />
                  <option value="KhachHang">Khách Hàng</option>
                  <option value="QuanTri">Quản trị</option>
                </NativeSelect>
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions className={classes.dialogAction}>
          <Button variant="contained" type="submit" color="secondary">
            Thay đổi
          </Button>
          <Button variant="contained" onClick={func} color="secondary">
            Thoát
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export const FormDialogAddSchedules = ({
  closeDialog,
  data,
  func,
  schedules,
  ...props
}) => {
  const classes = Style(props);
  const dispatch = useDispatch();

  const cinemaList = useSelector((state) => state.cinema.cinemaList);

  const [schedulesData, setSchedulesData] = useState({
    maPhim: 0,
    ngayChieuGioChieu: "",
    maRap: "",
    giaVe: "",
  });

  const [cinemaItem, setCinemaItem] = useState([]);

  const [selectItem, setSelectItem] = useState({
    maCumRap: "",
    rap: "",
  });

  useEffect(() => {
    setSchedulesData({
      ...schedulesData,
      maPhim: schedules.maPhim,
      ngayChieuGioChieu: "",
      maRap: "",
      giaVe: "",
    });
    setSelectItem({
      ...selectItem,
      maCumRap: "",
      rap: "",
    });
  }, [schedules]);

  const authSubmit = useCallback(() => {
    for (let key in schedulesData) {
      if (schedulesData[key] === "") {
        return true;
      }
    }
    return false;
  }, [schedulesData]);

  const handleChangePrice = useCallback(
    (e) => {
      const value = e.target.value;
      setSchedulesData({ ...schedulesData, giaVe: value });
    },
    [schedulesData]
  );

  const handleChangeIdCinema = useCallback(
    (e) => {
      const value = e.target.value;
      setSchedulesData({ ...schedulesData, maRap: value });
    },
    [schedulesData]
  );

  const handleChangeCinema = useCallback(
    (e) => {
      const value = e.target.value;
      setSelectItem({ ...selectItem, maCumRap: value, rap: "" });
      setSchedulesData({ ...schedulesData, maRap: "" });
      dispatch(getCinemaInformationItem(value)).then((res) => {
        setCinemaItem(res);
      });
    },
    [selectItem, schedulesData]
  );

  const handleChangeCinemaLocation = useCallback(
    (e) => {
      const value = e.target.value;
      setSchedulesData({ ...schedulesData, maRap: "" });
      setSelectItem({ ...selectItem, rap: value });
    },
    [selectItem, schedulesData]
  );

  const submit = useCallback((data) => {
    dispatch(addSchedules(data, alertSuccess));
  }, []);

  const setTimeMovie = useCallback(
    (time) => {
      const year = time.slice(0, 4);
      const month = time.slice(5, 7);
      const day = time.slice(8, 10);
      const hours = time.slice(11, 13);
      const minutes = time.slice(14, 16);
      const newDate =
        day + "/" + month + "/" + year + " " + hours + ":" + minutes + ":00";

      setSchedulesData({ ...schedulesData, ngayChieuGioChieu: newDate });
    },
    [schedulesData]
  );

  const renderItemCinemaLocation = useCallback(() => {
    return cinemaItem?.map((cinema, index) => {
      return (
        <MenuItem key={index} value={index}>
          {cinema.tenCumRap}
        </MenuItem>
      );
    });
  }, [cinemaItem]);

  const renderIDCinema = useCallback(() => {
    const id = selectItem.rap;
    return cinemaItem[id].danhSachRap.map((id, index) => {
      return (
        <MenuItem key={index} value={id.maRap}>
          {id.tenRap}
        </MenuItem>
      );
    });
  }, [selectItem, cinemaItem]);

  const alertSuccess = useCallback(
    (Text) => {
      return Swal.fire({
        icon: "success",
        title: Text,
        showConfirmButton: false,
        timer: 1500,
        willClose: () => {
          closeDialog(false);
        },
      });
    },
    [closeDialog]
  );

  const alertSubmit = useCallback(
    (e) => {
      e.preventDefault();
      return Swal.fire({
        icon: "question",
        title: "Xác nhận?",
        text: "Bạn có xác nhận tạo lịch chiếu như vậy?",
        confirmButtonColor: "#44c020",
        confirmButtonText: "Tạo lịch",
        cancelButtonText: "Chỉnh sửa",
        showCancelButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          submit(schedulesData);
        }
      });
    },
    [schedulesData]
  );

  return (
    <Dialog
      open={data}
      onClose={func}
      aria-labelledby="form-dialog-title"
      maxWidth="sm"
      fullWidth
      className={classes.dialog}
      style={{ zIndex: 1024 }}
    >
      <DialogTitle
        align="center"
        id="form-dialog-title"
        className={classes.dialogTitle}
      >
        Tạo lịch chiếu phim
      </DialogTitle>
      <form
        className={classes.form}
        onSubmit={alertSubmit}
        id="formAddSchedules"
      >
        <DialogContent className={classes.dialogContent}>
          <Grid container spacing={2} className={classes.gridContainer}>
            <Grid item md={12} sm={12}>
              <TextField
                disabled
                margin="dense"
                label="Mã phim"
                name="maPhim"
                fullWidth
                color="secondary"
                defaultValue={schedules.maPhim}
                className={classes.input}
              />
            </Grid>
            <Grid item md={12} sm={12}>
              <FormControl
                className={`${classes.formControl} ${classes.selectPrice}`}
                variant="outlined"
              >
                <InputLabel id="demo-simple-select-label">Giá vé</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={schedulesData.giaVe}
                  onChange={handleChangePrice}
                >
                  <MenuItem className={classes.priceItem} value={75000}>
                    75.000 đ
                  </MenuItem>
                  <MenuItem className={classes.priceItem} value={100000}>
                    100.000 đ
                  </MenuItem>
                  <MenuItem className={classes.priceItem} value={125000}>
                    125.000 đ
                  </MenuItem>
                  <MenuItem className={classes.priceItem} value={150000}>
                    150.000 đ
                  </MenuItem>
                  <MenuItem className={classes.priceItem} value={175000}>
                    175.000 đ
                  </MenuItem>
                  <MenuItem className={classes.priceItem} value={200000}>
                    200.000 đ
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={12} sm={12}>
              <Box className="selectCinema">
                <FormControl
                  className={`${classes.formControl} ${classes.selectCinemaItem}`}
                  variant="outlined"
                >
                  <InputLabel id="select-label-rap">Cụm Rạp</InputLabel>
                  <Select
                    labelId="select-label-cumRap"
                    id="select-cumRap"
                    value={selectItem.maCumRap}
                    onChange={handleChangeCinema}
                  >
                    {cinemaList?.map((cinema, index) => {
                      if (cinema.tenHeThongRap === "cgv") {
                        return (
                          <MenuItem value={cinema.maHeThongRap} key={index}>
                            {cinema.tenHeThongRap.toUpperCase()}
                          </MenuItem>
                        );
                      }
                      return (
                        <MenuItem value={cinema.maHeThongRap} key={index}>
                          {cinema.tenHeThongRap}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
                <FormControl
                  className={`${classes.formControl} ${classes.selectCinemaItem}`}
                  variant="outlined"
                >
                  <InputLabel id="select-label-rap">Rạp phim</InputLabel>
                  <Select
                    labelId="select-label-rap"
                    id="select-cumRap"
                    value={selectItem.rap}
                    onChange={handleChangeCinemaLocation}
                  >
                    {selectItem.maCumRap === "" ? (
                      <MenuItem value="">Vui lòng chọn cụm rạp phim.</MenuItem>
                    ) : (
                      renderItemCinemaLocation()
                    )}
                  </Select>
                </FormControl>
                <FormControl
                  className={`${classes.formControl} ${classes.selectCinemaItem}`}
                  variant="outlined"
                >
                  <InputLabel id="select-label-maRap">Mã rạp</InputLabel>
                  <Select
                    labelId="select-label-maRap"
                    id="select-maRap"
                    value={schedulesData.maRap}
                    onChange={handleChangeIdCinema}
                  >
                    {selectItem.rap === "" ? (
                      <MenuItem value="">Vui lòng chọn rạp phim.</MenuItem>
                    ) : (
                      renderIDCinema()
                    )}
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item md={12} sm={12} className="datepicker">
              <DatepickerAddMovie
                data={dateAddSchedules}
                setTimeMovie={setTimeMovie}
                type={true}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions className={classes.dialogAction}>
          <Button
            variant="contained"
            type="submit"
            color="secondary"
            disabled={authSubmit()}
          >
            Thay đổi
          </Button>
          <Button variant="contained" onClick={func} color="secondary">
            Thoát
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
