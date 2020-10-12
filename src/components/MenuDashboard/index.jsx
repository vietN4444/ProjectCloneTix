import React, { memo, useCallback, useEffect, useState } from "react";
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

import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import MovieIcon from "@material-ui/icons/Movie";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

import Style from "./style";

const MenuDashboard = ({ setTitle, changeMenu, ...props }) => {
  const dispatch = useDispatch();
  const classes = Style(props);
  const nameUser = useSelector((state) => state.auth.userName);
  const userAC = useSelector((state) => state.auth.UAC);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handldeChangeIndex = useCallback(
    (event, index) => {
      const { myValue } = event.currentTarget.dataset;
      setSelectedIndex(index);
      setTitle(myValue);
      changeMenu(index);
    },
    [setSelectedIndex, dispatch, changeMenu]
  );

  return (
    <MenuList className={classes.menuList}>
      <Box className={classes.boxAvatar}>
        <Avatar
          alt="Remy Sharp"
          src={"https://api.adorable.io/avatars/100/" + nameUser}
          className={classes.avatarLarge}
        />
        <Typography component="p" variant="subtitle2">
          {nameUser}
        </Typography>
        <Typography component="span" variant="body2">
          {userAC}
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

export default memo(MenuDashboard);
