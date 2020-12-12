import {
  Box,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Tooltip,
  Typography,
} from "@material-ui/core";
import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import SearchIcon from "@material-ui/icons/Search";
import QueueIcon from "@material-ui/icons/Queue";
import DefaultFilms from "../../assets/imgs/defaultFilms.png";

import {
  getMovieByNameDashBoard,
  getMoviePageDashBoard,
} from "../../redux/actions/managementActions";
import Style from "./style";
import { Datepicker } from "../Datepicker";
import { FormDialog, FormDialogAddSchedules } from "../FormDialog";
import {
  deleteMovie,
  updateMovie,
  updateMovieNochangeImg,
} from "../../redux/actions/movieActions";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

const columns = [
  { label: "Tác vụ", minWidth: 110, align: "center" },
  { label: "Mã phim", minWidth: 90 },
  {
    label: "Tên phim",
    minWidth: 120,
    align: "center",
  },
  {
    label: "Hình Ảnh",
    align: "center",
    minWidth: 120,
  },
  {
    label: "Mô tả",
    align: "center",
    minWidth: 320,
  },
  {
    label: "Ngày khởi chiếu",
    minWidth: 215,
    align: "center",
  },
  {
    label: "Đánh giá",
    minWidth: 100,
    align: "center",
  },
];

const MovieManagement = (props) => {
  const dispatch = useDispatch();
  const classes = Style(props);
  const history = useHistory();
  const ref = useRef();

  const movieList = useSelector((state) => state.dashboard.movieList);
  const movieListSearched = useSelector(
    (state) => state.dashboard.movieSearchList
  );
  const totalCount = useSelector((state) => state.dashboard.totalCount);

  const [widthTable, setWidthTable] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [movieSearched, setMovieSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [openSchedules, setOpenSchedules] = useState(false);
  const [movieSelected, setMovieSelected] = useState({
    maPhim: 0,
    tenPhim: "",
    biDanh: "",
    trailer: "",
    hinhAnh: "",
    moTa: "",
    maNhom: "03",
    ngayKhoiChieu: "",
    danhGia: 0,
  });

  const handleChangePage = useCallback(
    (event, newPage) => {
      setPage(newPage);
      dispatch(getMoviePageDashBoard(newPage + 1, rowsPerPage));
    },
    [rowsPerPage, dispatch]
  );

  const handleChangeRowsPerPage = useCallback(
    (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
      dispatch(getMoviePageDashBoard(page + 1, +event.target.value));
    },
    [page, dispatch]
  );

  const handleInput = useCallback(
    (event, id, num) => {
      let nameMovie = event.target.value.trim();
      setMovieSearch(nameMovie);
      if (nameMovie === "") {
        setPage(0);
        dispatch(getMoviePageDashBoard(1, 5));
        return;
      }
      setPage(0);
      dispatch(getMovieByNameDashBoard(id, num, nameMovie));
    },
    [movieSearched, dispatch]
  );

  const handleDelete = useCallback(
    (maPhim) => {
      dispatch(deleteMovie(maPhim, alertSuccess, alertError));
    },
    [dispatch]
  );

  const handleFormDialog = useCallback(
    (movie) => {
      setOpen(!open);
      if (movie) {
        return setMovieSelected(movie);
      }
    },
    [open, setMovieSelected]
  );

  const handleFormDialogSchedules = useCallback(
    (movie) => {
      setOpenSchedules(!openSchedules);
      if (movie) {
        return setMovieSelected(movie);
      }
    },
    [openSchedules, setMovieSelected]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      let form_data = new FormData();

      if (typeof movieSelected.hinhAnh === "string") {
        // for (let key in movieSelected) {
        //   if (key === "hinhAnh") {
        //     continue;
        //   }
        //   form_data.append(key, movieSelected[key]);
        // }
        return alertChangeInfoNoImg(movieSelected, movieSearched);
      }
      setOpen(!open);
      for (let key in movieSelected) {
        form_data.append(key, movieSelected[key]);
        // console.log(key, form_data.get(key));
      }
      dispatch(
        updateMovie(
          form_data,
          page + 1,
          5,
          movieSearched,
          alertSuccess,
          alertError
        )
      );
    },
    [movieSelected, movieSearched]
  );

  const renderMovieList = useCallback(() => {
    if (!!movieSearched) {
      if (movieListSearched.length === 0) {
        return (
          <TableRow>
            <TableCell colSpan="7" style={{ border: "none" }}>
              Không tìm thấy phim giống tên trong danh sách
            </TableCell>
          </TableRow>
        );
      }
      return movieListSearched.map((movie, index) => {
        const { biDanh, maNhom, trailer, ...currentMovie } = movie;
        return (
          <TableRow key={index}>
            <TableCell className={classes.tableCellAction}>
              <Tooltip title="Delete" placement="top">
                <IconButton onClick={() => alertHandleDelete(movie.maPhim)}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Edit" placement="top">
                <IconButton onClick={() => handleFormDialog(movie)}>
                  <CreateIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title="AddSchedules" placement="top">
                <IconButton onClick={() => handleFormDialogSchedules(movie)}>
                  <CreateIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </TableCell>
            {renderMovieItem(currentMovie)}
          </TableRow>
        );
      });
    }
    return movieList.map((movie, index) => {
      const { biDanh, maNhom, trailer, ...currentMovie } = movie;
      return (
        <TableRow key={index}>
          <TableCell className={classes.tableCellAction}>
            <Tooltip title="Delete" placement="top">
              <IconButton onClick={() => alertHandleDelete(movie.maPhim)}>
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Edit" placement="top">
              <IconButton onClick={() => handleFormDialog(movie)}>
                <CreateIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="AddSchedules" placement="top">
              <IconButton onClick={() => handleFormDialogSchedules(movie)}>
                <QueueIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </TableCell>
          {renderMovieItem(currentMovie)}
        </TableRow>
      );
    });
  }, [
    movieList,
    movieListSearched,
    handleFormDialog,
    movieSearched,
    handleFormDialogSchedules,
  ]);

  const renderMovieItem = useCallback((currentMovie) => {
    return Object.keys(currentMovie).map((data, index) => {
      switch (data) {
        case "hinhAnh": {
          return (
            <TableCell key={index} className={classes.tableImg}>
              <img
                src={currentMovie[data]}
                alt="movie"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = DefaultFilms;
                }}
              />
            </TableCell>
          );
        }
        case "ngayKhoiChieu": {
          return (
            <TableCell key={index}>
              <Datepicker data={currentMovie[data]} type={false} />
            </TableCell>
          );
        }
        default: {
          return <TableCell key={index}>{currentMovie[data]}</TableCell>;
        }
      }
    });
  }, []);

  const alertChangeInfoNoImg = useCallback((movie, movieSearched) => {
    return Swal.fire({
      icon: "warning",
      title: "Cảnh báo!",
      text:
        "Bạn update thông tin nên đính kèm hình ảnh phim, nếu không phim update sẽ không có hình ảnh phim",
      confirmButtonColor: "#44c020",
      confirmButtonText: "Tiếp tục update",
      cancelButtonText: "Cancel",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(
          updateMovieNochangeImg(
            movie,
            page + 1,
            5,
            movieSearched,
            alertSuccess,
            alertError
          )
        );
        setOpen(false);
      }
    });
  }, []);

  const alertHandleDelete = useCallback((maPhim) => {
    return Swal.fire({
      icon: "warning",
      confirmButtonText: "Xoá",
      cancelButtonText: "Cancel",
      title: "Cảnh báo",
      text: "Bạn có chắc chắn xoá bộ phim này",
      confirmButtonColor: "#fb4226",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete(maPhim);
      }
    });
  }, []);

  const alertSuccess = useCallback((text, type = 0) => {
    if (type) {
      return Swal.fire({
        icon: "success",
        text: text,
        timer: 1500,
        confirmButtonColor: "#108f3e",
        confirmButtonText: "OK",
      });
    }
    return Swal.fire({
      icon: "success",
      text: text,
      confirmButtonColor: "#108f3e",
      confirmButtonText: "OK",
      willClose: () => {
        history.go(0);
      },
    });
  }, []);

  const alertError = useCallback((text) => {
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: text,
      confirmButtonColor: "#fb4226",
      confirmButtonText: "OK",
    });
  }, []);

  useEffect(() => {
    dispatch(getMoviePageDashBoard(1, 5));
  }, [dispatch]);

  useEffect(() => {
    setWidthTable(ref.current?.offsetWidth);
  }, [ref.current?.offsetWidth, setWidthTable, ref]);

  return (
    <>
      <Grid container spacing={2} className={classes.gridContainer}>
        <Paper className={classes.wrapperMovieManagement} elevation={3}>
          <TableContainer className={classes.container}>
            <Box className={classes.margin} style={{ width: widthTable }}>
              <Grid
                container
                spacing={1}
                alignItems="flex-end"
                justify="flex-end"
              >
                <Grid item>
                  <SearchIcon className={classes.icon} />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    className={classes.input}
                    id="input-with-icon-grid"
                    label="Tìm kiếm phim"
                    onChange={(e) => handleInput(e, page + 1, rowsPerPage)}
                  />
                </Grid>
              </Grid>
            </Box>
            <Table stickyHeader aria-label="sticky table" ref={ref}>
              <TableHead className={classes.tableHead}>
                <TableRow>
                  {columns.map((column, index) => (
                    <TableCell
                      key={index}
                      align={column.align}
                      style={{
                        minWidth: column.minWidth,
                        width: column.minWidth,
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody className={classes.tableBody}>
                {renderMovieList()}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10]}
            component="div"
            count={totalCount}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </Grid>
      <FormDialog
        func={handleFormDialog}
        submit={handleSubmit}
        setMovie={setMovieSelected}
        data={open}
        movieData={movieSelected}
      />
      <FormDialogAddSchedules
        func={handleFormDialogSchedules}
        data={openSchedules}
        schedules={movieSelected}
        closeDialog={setOpenSchedules}
      />
    </>
  );
};

export default memo(MovieManagement);
