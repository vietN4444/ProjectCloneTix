import React, { memo, useCallback, useState } from "react";
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
import { useSelector } from "react-redux";

import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import MovieIcon from "@material-ui/icons/Movie";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

import Style from "./style";

const domainImg = "https://ui-avatars.com/api/?name=";
const domainImgTwo = "https://i.pravatar.cc/150?u=";

const MenuDashboard = ({ setTitle, changeMenu, ...props }) => {
  const classes = Style(props);
  const nameUser = useSelector((state) => state.auth.userName);
  const userAC = useSelector((state) => state.auth.userAC);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [imgAvatar, setImgAvatar] = useState(domainImgTwo);

  const handldeChangeIndex = useCallback(
    (event, index) => {
      const { myValue } = event.currentTarget.dataset;
      setSelectedIndex(index);
      setTitle(myValue);
      changeMenu(index);
    },
    [setSelectedIndex, changeMenu, setTitle]
  );

  return (
    <MenuList className={classes.menuList}>
      <Box className={classes.boxAvatar}>
        <Avatar
          src={`${imgAvatar}${nameUser}`}
          alt="avatar"
          onError={() => setImgAvatar(domainImg)}
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
      <MenuItem
        data-my-value={"Thêm phim"}
        classes={{ root: classes.listItem, selected: classes.listItemSelected }}
        selected={selectedIndex === 2}
        onClick={(event) => handldeChangeIndex(event, 2)}
      >
        <ListItemIcon className={classes.iconMenuItem}>
          <PlaylistAddIcon />
        </ListItemIcon>
        <ListItemText primary="Thêm phim" />
      </MenuItem>
      <MenuItem
        data-my-value={"Thêm tài khoản"}
        classes={{ root: classes.listItem, selected: classes.listItemSelected }}
        selected={selectedIndex === 3}
        onClick={(event) => handldeChangeIndex(event, 3)}
      >
        <ListItemIcon className={classes.iconMenuItem}>
          <PersonAddIcon />
        </ListItemIcon>
        <ListItemText primary="Thêm tài khoản" />
      </MenuItem>
    </MenuList>
  );
};

export default memo(MenuDashboard);
