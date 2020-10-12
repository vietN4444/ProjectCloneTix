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
import React, { useCallback, useEffect, useRef, useState } from "react";
import Style from "./style";

import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserList,
  getUserListByName,
} from "../../redux/actions/managementActions";

const columns = [
  { label: "Tác vụ", minWidth: 88, align: "center" },
  { label: "Tài khoản", minWidth: 150 },
  {
    label: "Mật khẩu",
    minWidth: 120,
  },
  {
    label: "Email",
    minWidth: 300,
  },
  {
    label: "Số điện thoại",
    minWidth: 100,
  },
  {
    label: "Loại người dùng",
    align: "center",
    minWidth: 120,
  },
  {
    label: "Họ tên",
    minWidth: 250,
  },
];

const UserManagement = (props) => {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const totalCount = useSelector((state) => state.dashboard.totalCount);
  const userList = useSelector((state) => state.dashboard.userList);
  const userListSearched = useSelector(
    (state) => state.dashboard.userSearchList
  );

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const [widthTable, setWidthTable] = useState(0);
  const [userSearched, setUserSearch] = useState("");

  useEffect(() => {
    dispatch(getUserList(1, 15));
    setWidthTable(ref.current.offsetWidth - 20);
  }, [dispatch, ref]);

  const handleChangePage = useCallback(
    (event, newPage) => {
      setPage(newPage);
      dispatch(getUserList(newPage + 1, rowsPerPage));
    },
    [rowsPerPage, dispatch]
  );

  const handleChangeRowsPerPage = useCallback(
    (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
      dispatch(getUserList(page + 1, +event.target.value));
    },
    [page, dispatch]
  );

  const handleDelete = useCallback(
    (maPhim) => {
      // dispatch(deleteMovie(maPhim));
    },
    [dispatch]
  );

  const handleFormDialog = useCallback((movie) => {
    //   setOpen(!open);
    //   setMovieSelected(movie);
  }, []);

  const handleInput = useCallback(
    (event, id, num) => {
      let userName = event.target.value.trim();
      setUserSearch(userName);
      dispatch(getUserListByName(id, num, userName));
    },
    [userSearched, dispatch]
  );

  const classes = Style(props, widthTable);

  const renderUserList = useCallback(() => {
    if (!!userSearched) {
      return userListSearched.map((user, index) => {
        const { biDanh, maNhom, trailer, ...currentUser } = user;
        return (
          <TableRow key={index}>
            <TableCell>
              <Tooltip title="Delete" placement="top">
                <IconButton onClick={() => handleDelete(user.maPhim)}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Edit" placement="top">
                <IconButton onClick={() => handleFormDialog(user)}>
                  <CreateIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </TableCell>
            {Object.keys(currentUser).map((data, index) => {
              return <TableCell key={index}>{currentUser[data]}</TableCell>;
            })}
          </TableRow>
        );
      });
    }
    return userList.map((user, index) => {
      const { maNhom, ...currentUser } = user;
      return (
        <TableRow key={index} className={classes.tableRow}>
          <TableCell>
            <Tooltip title="Delete" placement="top">
              <IconButton onClick={() => handleDelete(user.maPhim)}>
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Edit" placement="top">
              <IconButton onClick={() => handleFormDialog(user)}>
                <CreateIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </TableCell>
          {Object.keys(currentUser).map((data, index) => {
            return <TableCell key={index}>{currentUser[data]}</TableCell>;
          })}
        </TableRow>
      );
    });
  }, [
    userList,
    handleDelete,
    handleFormDialog,
    userListSearched,
    userSearched,
  ]);

  return (
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
                  label="Tìm kiếm người dùng(Theo tên)"
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
              {renderUserList()}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[15, 20]}
          component="div"
          count={totalCount}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </Grid>
  );
};

export default UserManagement;
