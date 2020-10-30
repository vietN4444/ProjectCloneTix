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
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import Avatar from "../../assets/imgs/avatar.png";
import Location from "../../assets/imgs/location.png";
import WebLogo from "../../assets/imgs/web-logo.png";
import Style from "./style";
import { REMOVE_TOKEN } from "../../redux/actions/actionContants";
import { MenuOpen, Close, ExpandLess, ExpandMore } from "@material-ui/icons";

const navBar = ["Lịch Chiếu", "Cụm Rạp", "Tin Tức", "Ứng dụng"];
const domainImg = "https://ui-avatars.com/api/?name=";

function HeaderComponent(props) {
  const dispatch = useDispatch();
  const ref = useRef(0);
  const menuRef = useRef();
  const signInRef = useRef();

  const user = useSelector((state) => state.auth);

  const [openMenu, setOpenMenu] = useState(false);
  const [imgAvatar, setImgAvatar] = useState(
    "https://api.adorable.io/avatars/100/"
  );
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
              <Link href="#">
                <img src={WebLogo} alt="logo" />
              </Link>
            </Box>
            {displayHeaderNav ? (
              <Box className={classes.headerNav}>
                <ul>
                  {navBar.map((item, index) => {
                    return (
                      <li key={index}>
                        <Link href="#" variant="subtitle1" underline="none">
                          {item}
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
                          onError={() => setImgAvatar(domainImg)}
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
                        >
                          <ListItemText
                            primary={navItem}
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
