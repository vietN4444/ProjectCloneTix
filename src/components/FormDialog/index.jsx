import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from "@material-ui/core";
import React, { memo, useCallback } from "react";
import Datepicker from "../Datepicker";
import Style from "./style";

const FormDialog = ({ submit, setMovie, data, func, movieData, ...props }) => {
  const classes = Style(props);

  const handleChangeInput = useCallback(
    (e) => {
      setMovie({
        ...movieData,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    },
    [movieData, setMovie]
  );

  const setTimeMovie = useCallback(
    (time) => {
      setMovie({ ...movieData, ngayKhoiChieu: time });
    },
    [movieData, setMovie]
  );

  const fileSelectedHandler = useCallback(
    (e) => {
      setMovie({ ...movieData, hinhAnh: e.target.files[0] });
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
      className={classes.dialog}
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
          <Grid container spacing={2}>
            <Grid item md={6}>
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
            <Grid item md={6}>
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
            <Grid item md={6}>
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
            <Grid item md={6} className={classes.datePicker}>
              <Datepicker
                data={movieData.ngayKhoiChieu}
                setTimeMovie={setTimeMovie}
                type={true}
              />
            </Grid>
            <Grid item md={12}>
              <TextField
                onChange={handleChangeInput}
                margin="dense"
                label="Trailer"
                name="trailer"
                fullWidth
                color="secondary"
                defaultValue={movieData.trailer}
                className={classes.input}
              />
            </Grid>
            <Grid item md={12}>
              <TextField
                type="file"
                margin="dense"
                fullWidth
                color="secondary"
                className={`${classes.input} ${classes.inputFile}`}
                onChange={fileSelectedHandler}
              />
            </Grid>
            <Grid item md={12}>
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
            <Grid item md={12}>
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

export default memo(FormDialog);
