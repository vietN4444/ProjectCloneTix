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
import { useDispatch } from "react-redux";

import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import MovieIcon from "@material-ui/icons/Movie";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

import Style from "./style";
import { SET_TITLE_DASHBOARD } from "../../redux/actions/actionContants";

const MenuListDashboard = (props) => {
  const dispatch = useDispatch();
  const classes = Style(props);
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
          src="https://api.adorable.io/avatars/100/abc"
          className={classes.avatarLarge}
        />
        <Typography component="p" variant="subtitle2">
          NameUser
        </Typography>
        <Typography component="span" variant="body2">
          Admin
        </Typography>
      </Box>

      <Divider />
      <Box className={`${classes.menuTitle} ${classes.menuTitleAdmin}`}>
        <VerifiedUserIcon color="secondary" />
        <Typography component="h1" variant="h5" color="secondary">
          Thông tin dữ liệu
        </Typography>
      </Box>
      <Divider />
      <MenuItem
        data-my-value={"Quản lý Movie"}
        classes={{
          root: classes.listItem,
          selected: classes.listItemSelected,
        }}
        selected={selectedIndex === 0}
        onClick={(event) => handldeChangeIndex(event, 0)}
      >
        <ListItemIcon className={classes.iconMenuItem}>
          <MovieIcon />
        </ListItemIcon>
        <ListItemText primary="Quản lý Movie" />
      </MenuItem>
      <Divider />
      <MenuItem
        data-my-value={"Quản lý User"}
        classes={{ root: classes.listItem, selected: classes.listItemSelected }}
        selected={selectedIndex === 1}
        onClick={(event) => handldeChangeIndex(event, 1)}
      >
        <ListItemIcon className={classes.iconMenuItem}>
          <SupervisedUserCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Quản lý User" />
      </MenuItem>
      <Divider />
    </MenuList>
  );
};

export default MenuListDashboard;
