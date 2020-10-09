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
} from "@material-ui/core";
import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";

import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import SearchIcon from "@material-ui/icons/Search";

import {
  getMovieByNameDashBoard,
  getMoviePageDashBoard,
} from "../../redux/actions/managementActions";
import Style from "./style";
import Datepicker from "../Datepicker";
import FormDialog from "../FormDialog";
import {
  deleteMovie,
  updateMovie,
  updateMovieNochangeImg,
} from "../../redux/actions/movieActions";

const columns = [
  { label: "Tác vụ", minWidth: 88, align: "center" },
  { label: "Mã phim", minWidth: 70 },
  {
    label: "Tên phim",
    minWidth: 130,
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
    minWidth: 200,
    align: "center",
  },
  {
    label: "Đánh giá",
    minWidth: 70,
    align: "center",
  },
];

const MovieManagement = (props) => {
  const dispatch = useDispatch();
  const classes = Style(props);

  const ref = useRef(null);

  const movieList = useSelector((state) => state.dashboard.movieList);
  const movieListSearched = useSelector(
    (state) => state.dashboard.movieSearchList
  );
  const totalCount = useSelector((state) => state.dashboard.totalCount);

  const [page, setPage] = useState(0);
  const [widthTable, setWidthTable] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [movieSearched, setMovieSearch] = useState("");
  const [open, setOpen] = useState(false);
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

  useEffect(() => {
    dispatch(getMoviePageDashBoard(1, 5));
    setWidthTable(ref.current.offsetWidth - 20);
  }, [dispatch]);

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
      dispatch(getMovieByNameDashBoard(id, num, movieSearched));
    },
    [movieSearched, dispatch]
  );

  const handleDelete = useCallback(
    (maPhim) => {
      dispatch(deleteMovie(maPhim));
    },
    [dispatch]
  );

  const handleFormDialog = useCallback(
    (movie) => {
      setOpen(!open);
      setMovieSelected(movie);
    },
    [open, setMovieSelected]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(!open);
    let form_data = new FormData();
    if (typeof movieSelected.hinhAnh === "string") {
      for (let key in movieSelected) {
        if (key === "hinhAnh") {
          continue;
        }
        form_data.append(key, movieSelected[key]);
        console.log(key, form_data.get(key));
      }
      dispatch(updateMovieNochangeImg(form_data, page + 1, 5));
      return;
    }
    for (let key in movieSelected) {
      form_data.append(key, movieSelected[key]);
      console.log(key, form_data.get(key));
    }
    dispatch(updateMovie(form_data, page + 1, 5));
  };

  const renderMovieList = useCallback(() => {
    if (!!movieSearched) {
      return movieListSearched.map((movie, index) => {
        const { biDanh, maNhom, trailer, ...currentMovie } = movie;
        return (
          <TableRow key={index}>
            <TableCell>
              <Tooltip title="Delete" placement="top">
                <IconButton onClick={() => handleDelete(movie.maPhim)}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Edit" placement="top">
                <IconButton onClick={() => handleFormDialog(movie)}>
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
          <TableCell>
            <Tooltip title="Delete" placement="top">
              <IconButton onClick={() => handleDelete(movie.maPhim)}>
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Edit" placement="top">
              <IconButton onClick={() => handleFormDialog(movie)}>
                <CreateIcon fontSize="small" />
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
    handleDelete,
    handleFormDialog,
    movieSearched,
  ]);

  const renderMovieItem = (currentMovie) => {
    return Object.keys(currentMovie).map((data, index) => {
      switch (data) {
        case "hinhAnh": {
          return (
            <TableCell key={index} className={classes.tableImg}>
              <img src={currentMovie[data]} alt="movie" />
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
  };
  return (
    <>
      <Grid container spacing={2}>
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
    </>
  );
};

export default memo(MovieManagement);
