import React, { useState } from "react";
import {
  Box,
  Divider,
  MenuItem,
  MenuList,
  Typography,
  ListItemIcon,
  ListItemText,
  Avatar,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import ContactsIcon from "@material-ui/icons/Contacts";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import DnsIcon from "@material-ui/icons/Dns";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";

import Style from "./style";
import { SET_TITLE_DASHBOARD } from "../../redux/actions/actionContants";

export const MainMenuItemsProfile = (props) => {
  const dispatch = useDispatch();
  const classes = Style(props);
  const nameUser = useSelector((state) => state.auth.userName);
  const userAC = useSelector((state) => state.auth.UAC);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handldeChangeIndex = (event, index) => {
    const { myValue } = event.currentTarget.dataset;
    setSelectedIndex(index);
    dispatch({
      type: SET_TITLE_DASHBOARD,
      payload: myValue,
    });
  };

  return (
    <MenuList className={classes.menuList}>
      <Box className={classes.boxAvatar}>
        <Avatar
          alt="Remy Sharp"
          src={`"https://api.adorable.io/avatars/100/${userAC}"`}
          className={classes.avatarLarge}
        />
        <Typography component="p" variant="subtitle2">
          {nameUser}
        </Typography>
        <Typography component="span" variant="body2">
          {userAC}
        </Typography>
      </Box>
      <Box className={classes.menuTitle}>
        <DnsIcon color="secondary" />
        <Typography component="h1" variant="h5" color="secondary">
          Thông tin chung
        </Typography>
      </Box>
      <Divider />
      <MenuItem
        data-my-value={"Thông tin cá nhân"}
        classes={{
          root: classes.listItem,
          selected: classes.listItemSelected,
        }}
        selected={selectedIndex === 0}
        onClick={(event) => handldeChangeIndex(event, 0)}
      >
        <ListItemIcon className={classes.iconMenuItem}>
          <ContactsIcon />
        </ListItemIcon>
        <ListItemText primary="Thông tin cá nhân" />
      </MenuItem>
      <Divider />
      <MenuItem
        data-my-value={"Vé đã đặt"}
        classes={{ root: classes.listItem, selected: classes.listItemSelected }}
        selected={selectedIndex === 1}
        onClick={(event) => handldeChangeIndex(event, 1)}
      >
        <ListItemIcon className={classes.iconMenuItem}>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Vé đã đặt" />
      </MenuItem>
    </MenuList>
  );
};

export const SubMenuItemsProfile = (props) => {
  const classes = Style(props);
  return (
    <MenuList className={classes.subMenuItem}>
      <MenuItem data-my-value={"Thông tin tài khoản"}>
        <ListItemIcon className={classes.iconMenuItem}>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Thông tin tài khoản" />
      </MenuItem>
      <MenuItem data-my-value={"Thay đổi mật khẩu"}>
        <ListItemIcon className={classes.iconMenuItem}>
          <LockOpenIcon />
        </ListItemIcon>
        <ListItemText primary="Thay đổi mật khẩu" />
      </MenuItem>
      <MenuItem data-my-value={"Thay đổi thông tin cá nhân"}>
        <ListItemIcon className={classes.iconMenuItem}>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Thay đổi thông tin cá nhân" />
      </MenuItem>
    </MenuList>
  );
};
