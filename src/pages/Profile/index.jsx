import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  AppBar,
  Divider,
  Container,
  Typography,
  Toolbar,
  Box,
  List,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Fade,
} from "@material-ui/core";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "../../assets/imgs/web-logo.png";
import UnarchiveIcon from "@material-ui/icons/Unarchive";

import Style from "./style";
import { MainMenuItemsProfile } from "../../components/MenuProfile";
import { useDispatch, useSelector } from "react-redux";
import UserInformation from "../../components/UserInformation";
import { userDetail } from "../../redux/actions/userActions";
import { REMOVE_TOKEN } from "../../redux/actions/actionContants";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

const columns = [
  { label: "Tên phim", key: "tenPhim" },
  { label: "Ngày đặt", key: "ngayDat" },
  {
    label: "Thời lượng phim",
    key: "thoiLuongPhim",
    align: "center",
  },
  {
    label: "Rạp",
    key: "tenHeThongRap",
    align: "center",
  },
  {
    label: "Ghế số",
    key: "tenGhe",
    align: "center",
  },
  {
    label: "Mã vé",
    key: "maVe",
  },
  {
    label: "Giá vé",
    key: "giaVe",
  },
];

const title = ["Thông tin cá nhân", "Vé đã đặt"];

const Profile = (props) => {
  const classes = Style(props);
  const dispatch = useDispatch();
  const history = useHistory();
  const appRef = useRef();
  const navRef = useRef();
  const subMenuRef = useRef();

  const dataUser = useSelector((state) => state.profile.userDetail);
  const typeUser = useSelector((state) => state.auth.userAC);
  const userName = useSelector((state) => state.auth.userName);

  const [titleProfile, setTitleProfile] = useState(0);
  const [menuTab, setMenuTab] = useState(0);
  const [checked, setChecked] = useState(false);
  const [resMenuMobile, setResMenuMobile] = useState(false);
  const [handleSubMenu, setHandleSubMenu] = useState(0);
  const [subMenu, setSubMenu] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [lazyLoad, setLazyLoad] = useState(false);

  const setTab = useCallback(() => {
    setChecked(false);
    setMenuTab(1);
    setTimeout(setChecked(true), 2000);
  }, []);

  const signOut = useCallback(() => {
    dispatch({
      type: REMOVE_TOKEN,
    });
    localStorage.removeItem("accessToken");
    history.replace("/");
  });

  const renderTableBody = useCallback(() => {
    return dataUser.thongTinDatVe?.map((ticket, index) => {
      return (
        <TableRow key={index} className={classes.tableRow}>
          {columns.map((ele, index2) => {
            switch (ele.key) {
              case "tenHeThongRap": {
                return (
                  <TableCell key={index2}>
                    {ticket.danhSachGhe[0][ele.key]}
                  </TableCell>
                );
              }
              case "tenGhe": {
                return (
                  <TableCell key={index2} className="tableSeat">
                    <Box>
                      {ticket.danhSachGhe.map((ele2, index3) => {
                        return (
                          <Box key={index3}>
                            <Box>{ele2.tenGhe}</Box>
                          </Box>
                        );
                      })}
                    </Box>
                  </TableCell>
                );
              }
              case "ngayDat": {
                const str = ticket[ele.key].slice(0, 10);
                return <TableCell key={index2}>{str}</TableCell>;
              }
              case "giaVe": {
                const str = ticket[ele.key]
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                return <TableCell key={index2}>{str + " đ"}</TableCell>;
              }
              case "thoiLuongPhim": {
                return (
                  <TableCell key={index2}>
                    {ticket[ele.key] + " phút"}
                  </TableCell>
                );
              }
              default: {
                return <TableCell key={index2}>{ticket[ele.key]}</TableCell>;
              }
            }
          })}
        </TableRow>
      );
    });
  }, [dataUser, columns]);

  const handleMenu = useCallback(() => {
    setOpenMenu(!openMenu);
    setSubMenu(!subMenu);
  }, [openMenu, subMenu]);

  const changeRes = () => {
    if (window.innerWidth <= 600) {
      setResMenuMobile(true);
    } else {
      setResMenuMobile(false);
    }
  };

  const alertSignIn = useCallback(() => {
    return Swal.fire({
      icon: "error",
      confirmButtonText: "Đăng nhập",
      cancelButtonText: "Để sau",
      title: "Opps...",
      text: "Bạn chưa đăng nhập để thực hiện tác vụ này",
      confirmButtonColor: "#fb4226",
      showCancelButton: true,
      willOpen: () => {
        history.replace("/");
      },
    }).then((result) => {
      if (result.isConfirmed) {
        history.replace("/signin");
      }
    });
  }, []);

  window.addEventListener("resize", changeRes);

  useEffect(() => {
    changeRes();
  }, []);

  useEffect(() => {
    const user = { taiKhoan: userName };
    dispatch(userDetail(user));
  }, [userName, dispatch]);

  useEffect(() => {
    setTimeout(setLazyLoad(true), 2000);
  }, []);

  useEffect(() => {
    async function fetchData() {
      // You can await here
      if (!JSON.parse(localStorage.getItem("accessToken"))) {
        return alertSignIn();
      }
      // ...
    }
    fetchData();
  }, []);

  useEffect(() => {
    let handler = (event) => {
      if (
        appRef.current.contains(event.target) === false &&
        navRef.current.contains(event.target) === false &&
        subMenuRef.current.contains(event.target) === false
      ) {
        setOpenMenu(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <>
      {lazyLoad ? (
        <div className={classes.root}>
          <AppBar ref={appRef} style={{ zIndex: 1000 }}>
            <Toolbar className={classes.toolbar}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={() => history.replace("/")}
              >
                <img src={HomeIcon} alt="icon" />
              </IconButton>
              <Typography
                align="center"
                component="h1"
                variant="h4"
                className={classes.title}
              >
                {title[titleProfile]}
              </Typography>
              <IconButton color="inherit" onClick={signOut}>
                <ExitToAppIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Box
            className={`${classes.drawerPaper} ${
              resMenuMobile ? (openMenu ? "openMenu" : null) : null
            }`}
            ref={navRef}
          >
            <div className={classes.appBarSpacer}></div>
            <Divider />
            <List>
              <MainMenuItemsProfile
                funcSetTabFade={setTab}
                funcSetMenuTab={setMenuTab}
                funcSetTitleProfile={setTitleProfile}
              />
              {resMenuMobile ? (
                <Box className={classes.btnOpenMenu} onClick={handleMenu}>
                  <UnarchiveIcon />
                </Box>
              ) : null}
            </List>
          </Box>
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container
              maxWidth="lg"
              className={`${classes.container} ${menuTab ? "tabTwo" : null} ${
                handleSubMenu ? "subMenu" : null
              } ${menuTab === 1 ? "containerTicket" : null}`}
            >
              {!menuTab ? (
                <UserInformation
                  forwardRef={subMenuRef}
                  subMenu={setHandleSubMenu}
                  data={dataUser}
                  typeUser={typeUser}
                  authMenu={openMenu}
                  res={resMenuMobile}
                />
              ) : (
                <Fade in={checked}>
                  <Paper elevation={3}>
                    <Box className={classes.boxContainer}>
                      <Box className={`${classes.headTitle} headTitleBox`}>
                        <Typography component="span">
                          Thông tin đặt vé
                        </Typography>
                      </Box>
                      <Divider variant="middle" />
                      <Box className={classes.boxContent}>
                        <TableContainer className={classes.tableContainer}>
                          <Table stickyHeader aria-label="sticky table">
                            <TableHead className={classes.tableHead}>
                              <TableRow>
                                {columns.map((column, index) => (
                                  <TableCell key={index} align={column.align}>
                                    {column.label}
                                  </TableCell>
                                ))}
                              </TableRow>
                            </TableHead>
                            <TableBody className={classes.tableBody}>
                              {renderTableBody()}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </Box>
                    </Box>
                  </Paper>
                </Fade>
              )}
            </Container>
          </main>
        </div>
      ) : null}
    </>
  );
};

export default Profile;
