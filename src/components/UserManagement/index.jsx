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
import { deleteUser, updateUser } from "../../redux/actions/userActions";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import { FormDialogUserInfo } from "../FormDialog";

const columns = [
  { label: "Tác vụ", minWidth: 100, align: "center" },
  { label: "Tài khoản", minWidth: 180 },
  {
    label: "Mật khẩu",
    minWidth: 140,
  },
  {
    label: "Email",
    minWidth: 300,
  },
  {
    label: "Số điện thoại",
    minWidth: 140,
  },
  {
    label: "Loại người dùng",
    align: "center",
    minWidth: 140,
  },
  {
    label: "Họ tên",
    minWidth: 180,
  },
];

const UserManagement = (props) => {
  const classes = Style(props);
  const dispatch = useDispatch();
  const history = useHistory();
  const refTable = useRef();

  const totalCount = useSelector((state) => state.dashboard.totalCount);
  const userList = useSelector((state) => state.dashboard.userList);
  const userListSearched = useSelector(
    (state) => state.dashboard.userSearchList
  );

  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const [widthTable, setWidthTable] = useState(0);
  const [userSelected, setUserSelected] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "",
    maLoaiNguoiDung: "",
    hoTen: "",
  });
  const [userSearched, setUserSearch] = useState("");

  useEffect(() => {
    dispatch(getUserList(1, 15));
    setWidthTable(refTable.current?.offsetWidth);
  }, [refTable.current?.offsetWidth, setWidthTable]);

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
    (idUser) => {
      dispatch(deleteUser(idUser, alertSuccess, alertError));
    },
    [dispatch]
  );

  const handleFormDialog = useCallback(
    (user) => {
      setOpen(!open);
      setUserSelected(user);
    },
    [open]
  );

  const handleInput = useCallback(
    (event, id, num) => {
      let userName = event.target.value.trim();
      setUserSearch(userName);
      if (userName === "") {
        setPage(0);
        return dispatch(getUserList(1, 15));
      }
      setPage(0);
      dispatch(getUserListByName(id, num, userName));
    },
    [dispatch]
  );

  const alertHandleDelete = useCallback((idUser) => {
    return Swal.fire({
      icon: "warning",
      confirmButtonText: "Xoá",
      cancelButtonText: "Cancel",
      title: "Cảnh báo",
      text: "Bạn có chắc chắn xoá tài khoản này",
      confirmButtonColor: "#fb4226",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete(idUser);
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

  const renderUserList = useCallback(() => {
    if (!!userSearched) {
      return userListSearched.map((user, index) => {
        const { biDanh, maNhom, trailer, ...currentUser } = user;
        return (
          <TableRow key={index}>
            <TableCell>
              <Tooltip title="Delete" placement="top">
                <IconButton onClick={() => alertHandleDelete(user.taiKhoan)}>
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
              <IconButton onClick={() => alertHandleDelete(user.taiKhoan)}>
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

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setOpen(false);
      let user = { ...userSelected, maNhom: "GP03" };
      // console.log(page);
      dispatch(
        updateUser(user, page + 1, 15, userSearched, alertSuccess, alertError)
      );
    },
    [userSelected, userSearched, page]
  );

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
                <Grid item md={6} sm={6}>
                  <TextField
                    className={classes.input}
                    id="input-with-icon-grid"
                    label="Tìm kiếm người dùng(Theo tên)"
                    onChange={(e) => handleInput(e, page + 1, rowsPerPage)}
                  />
                </Grid>
              </Grid>
            </Box>
            <Table stickyHeader aria-label="sticky table" ref={refTable}>
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
      <FormDialogUserInfo
        data={open}
        submit={handleSubmit}
        func={handleFormDialog}
        setUser={setUserSelected}
        userData={userSelected}
      />
    </>
  );
};

export default UserManagement;
