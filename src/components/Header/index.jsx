import {
  Box,
  Container,
  Typography,
  MenuItem,
  Link,
  Button,
  MenuList,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Collapse,
} from "@material-ui/core";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import Avatar from "../../assets/imgs/avatar.png";
import Location from "../../assets/imgs/location.png";
import WebLogo from "../../assets/imgs/web-logo.png";
import Style from "./style";
import { REMOVE_TOKEN } from "../../redux/actions/actionContants";
import { MenuOpen, Close, ExpandLess, ExpandMore } from "@material-ui/icons";

const navBar = [
  { title: "Lịch Chiếu", id: "movieList" },
  { title: "Cụm Rạp", id: "schedules" },
  { title: "Tin Tức", id: "news" },
  { title: "Ứng dụng", id: "appintro" },
];

const domainImg = "https://ui-avatars.com/api/?name=";

function HeaderComponent(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const ref = useRef(0);
  const menuRef = useRef();
  const signInRef = useRef();

  const user = useSelector((state) => state.auth);

  const [openMenu, setOpenMenu] = useState(false);
  const [imgAvatar, setImgAvatar] = useState(domainImg);
  const [gutterContainer, setGutterContainer] = useState(true);
  const [displayHeaderNav, setDisplayHeaderNav] = useState(true);
  const [displayMobile, setDisplayMobile] = useState(false);
  const [authDrawer, setAuthDrawer] = useState(false);
  const [openCollapse, setOpenCollapse] = useState(true);

  useEffect(() => {
    if (!menuRef.current) return;
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setOpenMenu(false);
      }
    };
    changeRes();

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const scrollTo = useCallback((id) => {
    if (!document.getElementById(id)) return;
    if (id === "schedules" || id === "appintro") {
      const ele = document.getElementById(id)?.offsetTop - 60;
      window.scrollTo({ top: ele, behavior: "smooth" });
      return;
    }
    const ele = document.getElementById(id)?.offsetTop - 80;
    window.scrollTo({ top: ele, behavior: "smooth" });
  }, []);

  const scrollToMobile = useCallback((id) => {
    if (!document.getElementById(id)) {
      setAuthDrawer(false);
      history.push("/");
      setTimeout(() => {
        if (id === "schedules" || id === "appintro") {
          const ele = document.getElementById(id)?.offsetTop - 60;
          window.scrollTo({ top: ele, behavior: "smooth" });
          return;
        }
        const ele = document.getElementById(id)?.offsetTop - 80;
        window.scrollTo({ top: ele, behavior: "smooth" });
      }, 2000);
      return;
    }
    if (id === "schedules" || id === "appintro") {
      const ele = document.getElementById(id)?.offsetTop - 60;
      window.scrollTo({ top: ele, behavior: "smooth" });
      return;
    }
    const ele = document.getElementById(id)?.offsetTop - 80;
    window.scrollTo({ top: ele, behavior: "smooth" });
    setAuthDrawer(false);
  }, []);

  const changeRes = () => {
    if (window.innerWidth <= 1280) {
      setGutterContainer(false);
    } else {
      setGutterContainer(true);
    }
    if (window.innerWidth <= 768) {
      setDisplayHeaderNav(false);
    } else {
      setDisplayHeaderNav(true);
    }
    if (window.innerWidth <= 736) {
      setDisplayMobile(true);
    } else {
      setDisplayMobile(false);
    }
  };

  window.addEventListener("resize", changeRes);

  const signOut = () => {
    setOpenMenu(false);
    dispatch({
      type: REMOVE_TOKEN,
    });
    localStorage.removeItem("accessToken");
  };

  const handleClickCollapse = useCallback(() => {
    setOpenCollapse(!openCollapse);
  }, [openCollapse]);

  const classes = Style(props);
  return (
    <Box className={classes.topHeader}>
      <Box className={classes.header}>
        <Container disableGutters={gutterContainer} bgcolor="primary.light">
          <Box
            display="flex"
            alignItems="center"
            className={classes.headerContent}
          >
            <Box className={classes.headerLogo}>
              <NavLink to="/">
                <img src={WebLogo} alt="logo" />
              </NavLink>
            </Box>
            {displayHeaderNav ? (
              <Box className={classes.headerNav}>
                <ul>
                  {navBar.map((item, index) => {
                    return (
                      <li key={index}>
                        <Link
                          variant="subtitle1"
                          underline="none"
                          onClick={() => scrollTo(item.id)}
                        >
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </Box>
            ) : null}
            {!displayMobile ? (
              <Box display="flex" ml="auto">
                <Box className={classes.headerUserLogin}>
                  {!!user.token ? (
                    <Box className={classes.userMenu} ref={menuRef}>
                      <Button
                        className={classes.btnUserMenu}
                        onClick={() => setOpenMenu(!openMenu)}
                      >
                        <img
                          src={`${imgAvatar}${user.userName}`}
                          alt="avatar"
                          onError={() => setImgAvatar(Avatar)}
                        />
                        <Typography variant="body1" component="p">
                          {user.userName}
                        </Typography>
                      </Button>
                      {openMenu ? (
                        <MenuList className={classes.menuContent} ref={ref}>
                          <NavLink
                            className={classes.txtMenuItem}
                            to="/profile"
                            underline="none"
                          >
                            <MenuItem
                              onClick={() => setOpenMenu(false)}
                              className={classes.menuItem}
                            >
                              Thông tin tài khoản
                            </MenuItem>
                          </NavLink>
                          {user.UAC === "QuanTri" ? (
                            <NavLink
                              className={classes.txtMenuItem}
                              to="/dashboard"
                              underline="none"
                            >
                              <MenuItem
                                onClick={() => setOpenMenu(false)}
                                className={classes.menuItem}
                              >
                                Quản lý / Admin
                              </MenuItem>
                            </NavLink>
                          ) : null}
                          <MenuItem
                            onClick={signOut}
                            className={classes.menuItem}
                          >
                            Đăng xuất
                            <ExitToAppIcon />
                          </MenuItem>
                        </MenuList>
                      ) : null}
                    </Box>
                  ) : (
                    <NavLink
                      ref={signInRef}
                      to="/signin"
                      variant="subtitle1"
                      underline="none"
                      className={classes.headerTxt}
                    >
                      <img src={Avatar} alt="avatar" />
                      <Typography variant="body1" component="span">
                        Đăng Nhập
                      </Typography>
                    </NavLink>
                  )}
                </Box>
                <Box
                  className={classes.headerUserLocation}
                  display="flex"
                  alignItems="center"
                >
                  <Link href="#" underline="none" className={classes.headerTxt}>
                    <img src={Location} alt="location" />
                    <Typography variant="body1" component="span">
                      Hồ Chí Minh
                    </Typography>
                  </Link>
                </Box>
              </Box>
            ) : (
              <>
                <Box className={classes.btnMenu}>
                  <Button onClick={() => setAuthDrawer(true)}>
                    <MenuOpen />
                  </Button>
                </Box>
                <Drawer
                  anchor="right"
                  open={authDrawer}
                  onClose={() => setAuthDrawer(false)}
                  classes={{ paper: classes.drawerContainer }}
                >
                  <List>
                    <Box className={classes.mobileMenuHeader}>
                      <Box className={classes.nameUser}>
                        <img
                          src={`${imgAvatar}${user.userName}`}
                          alt="avatar"
                          onError={() => setImgAvatar(domainImg)}
                        />
                        <Typography variant="body1" component="p">
                          {user.userName}
                        </Typography>
                      </Box>
                      <Button onClick={() => setAuthDrawer(false)}>
                        <Close />
                      </Button>
                    </Box>
                    <Divider />
                    <ListItem
                      button
                      className={classes.navItem}
                      onClick={handleClickCollapse}
                    >
                      <ListItemText
                        primary="Thông tin tài khoản"
                        className={classes.txtNavItem}
                      />
                      {openCollapse ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse
                      in={openCollapse}
                      timeout="auto"
                      unmountOnExit
                      className={classes.userCollapseInfo}
                    >
                      <NavLink to="/profile" underline="none">
                        <ListItem>
                          <ListItemText
                            className={classes.collapseTxt}
                            primary="Thông tin chi tiết"
                          />
                        </ListItem>
                      </NavLink>
                      {user.UAC === "QuanTri" ? (
                        <NavLink to="/dashboard" underline="none">
                          <ListItem>
                            <ListItemText
                              className={classes.collapseTxt}
                              primary="Quản lý / Admin"
                            />
                          </ListItem>
                        </NavLink>
                      ) : null}
                      <ListItem button onClick={signOut}>
                        <ListItemText
                          className={classes.collapseTxt}
                          primary="Đăng xuất"
                        />
                        <ExitToAppIcon />
                      </ListItem>
                    </Collapse>
                    {navBar.map((navItem, index) => {
                      return (
                        <ListItem
                          button
                          key={index}
                          className={classes.navItem}
                          onClick={() => scrollToMobile(navItem.id)}
                        >
                          <ListItemText
                            primary={navItem.title}
                            className={classes.txtNavItem}
                          />
                        </ListItem>
                      );
                    })}
                  </List>
                </Drawer>
              </>
            )}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default HeaderComponent;
