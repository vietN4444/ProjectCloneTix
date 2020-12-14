import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  AppBar,
  Divider,
  Container,
  Typography,
  Toolbar,
  Box,
  List,
  Tooltip,
} from "@material-ui/core";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "../../assets/imgs/web-logo.png";
import UnarchiveIcon from "@material-ui/icons/Unarchive";

import Style from "./style";
import MenuDashboard from "../../components/MenuDashboard";
import { useDispatch, useSelector } from "react-redux";
import MovieManagement from "../../components/MovieManagement";
import {
  DELETE_CINEMA_DATA,
  REMOVE_TOKEN,
} from "../../redux/actions/actionContants";
import UserManagement from "../../components/UserManagement";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { FormAddMovie, FormAddUser } from "../../components/FormAdd";
import { getCinemaInformation } from "../../redux/actions/cinemaActions";

const Dashboard = (props) => {
  const dispatch = useDispatch();
  const classes = Style(props);
  const history = useHistory();
  const headerRef = useRef();
  const menuRef = useRef();

  const [title, setTitle] = useState("Quản lý Movie");
  const [menuSelected, setMenuSelected] = useState(0);
  const [render, setRender] = useState(false);
  const [tabletScreen, setTabletScreen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const authUser = useSelector((state) => state.auth.userAC);

  const logOut = () => {
    dispatch({
      type: REMOVE_TOKEN,
    });
    localStorage.removeItem("accessToken");
    props.history.push("/");
  };

  const alertLogOut = useCallback(() => {
    return Swal.fire({
      icon: "question",
      title: "Xác nhận?",
      text: "Bạn có chắc chắn muốn thoát tài khoản.",
      confirmButtonColor: "#44c020",
      confirmButtonText: "Xác nhận",
      cancelButtonText: "Ở lại",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        logOut();
      }
    });
  }, []);

  const alertAuthUser = useCallback(() => {
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Bạn không phải là tài khoản admin để vào trang này!!",
      confirmButtonColor: "#fb4226",
      willOpen: () => {
        history.replace("/");
      },
    });
  }, []);

  const alertSignIn = useCallback(() => {
    return Swal.fire({
      icon: "error",
      confirmButtonText: "Đăng nhập",
      cancelButtonText: "Để sau",
      title: "Opps...",
      text: "Bạn chưa đăng nhập để có thể truy cập trang này!",
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

  const renderContent = useCallback(() => {
    switch (menuSelected) {
      case 0: {
        return <MovieManagement />;
      }
      case 1: {
        return <UserManagement />;
      }
      case 2: {
        return <FormAddMovie />;
      }
      case 3: {
        return <FormAddUser />;
      }
    }
  }, [menuSelected]);

  const handleMenu = useCallback(() => {
    setOpenMenu(!openMenu);
  }, [openMenu]);

  const changeRes = useCallback(() => {
    if (window.innerWidth <= 768) {
      setTabletScreen(true);
    } else {
      setTabletScreen(false);
    }
  }, []);

  window.addEventListener("resize", changeRes);

  useEffect(() => {
    let handler = (event) => {
      if (
        !headerRef.current.contains(event.target) &&
        !menuRef.current.contains(event.target)
      ) {
        setOpenMenu(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  useEffect(() => {
    changeRes();
    dispatch(getCinemaInformation());
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
    let timeout;
    async function fetchData() {
      // You can await here
      if (authUser === "KhachHang") {
        const response = await alertAuthUser();
      } else {
        timeout = setTimeout(() => setRender(true), 500);
      }
      // ...
    }
    fetchData();

    return () => {
      clearTimeout(timeout);
    };
  }, [authUser]);

  useEffect(() => {
    return () => {
      dispatch({
        type: DELETE_CINEMA_DATA,
      });
    };
  }, []);

  return (
    <div className={classes.root}>
      {render ? (
        <>
          <AppBar ref={headerRef} style={{ zIndex: 1000 }}>
            <Toolbar className={classes.toolbar}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={() => props.history.push("/")}
              >
                <img src={HomeIcon} alt="icon" />
              </IconButton>
              <Typography
                align="center"
                component="h1"
                variant="h4"
                className={classes.title}
              >
                {title}
              </Typography>
              <Tooltip title="Logout" placement="bottom">
                <IconButton color="inherit" onClick={alertLogOut}>
                  <ExitToAppIcon />
                </IconButton>
              </Tooltip>
            </Toolbar>
          </AppBar>
          <Box
            className={`${classes.drawerPaper} ${
              tabletScreen ? (openMenu ? "openMenu" : null) : null
            }`}
            ref={menuRef}
          >
            <div className={classes.appBarSpacer}></div>
            <Divider />
            <List>
              <MenuDashboard changeMenu={setMenuSelected} setTitle={setTitle} />
              {tabletScreen ? (
                <Box className={classes.btnOpenMenu} onClick={handleMenu}>
                  <UnarchiveIcon />
                </Box>
              ) : null}
            </List>
          </Box>
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
              {renderContent()}
            </Container>
          </main>
        </>
      ) : null}
    </div>
  );
};

export default Dashboard;
