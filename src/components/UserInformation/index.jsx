import {
  Avatar,
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";

import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import LockIcon from "@material-ui/icons/Lock";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PersonIcon from "@material-ui/icons/Person";

import { SubMenuItemsProfile } from "../MenuProfile";
import Style from "./style";

const UserInformation = (props) => {
  const classes = Style(props);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={3}>
          <Paper elevation={3}>
            <SubMenuItemsProfile />
          </Paper>
        </Grid>
        <Grid item md={9}>
          <Paper elevation={3}>
            <List>
              <ListItem>
                <ListItemText
                  primary="Thông tin tài khoản"
                  className={classes.headTitle}
                />
              </ListItem>
              <Divider variant="middle" component="li" />
              <ListItem className={classes.listItem}>
                <ListItemAvatar>
                  <Avatar>
                    <PermContactCalendarIcon />
                  </Avatar>
                </ListItemAvatar>
                <Box className={classes.listItemText}>
                  <Typography component="h1">Tên khách hàng</Typography>
                  <Typography component="p">
                    Họ và tên chủ tài khoản, cũng là tên của tài khoản hiển thị
                    trên website. Bạn có thể thay đổi ở phần thay đổi thông tin
                    cá nhân
                  </Typography>
                </Box>
              </ListItem>
              <Divider variant="middle" component="li" />
              <ListItem className={classes.listItem}>
                <ListItemAvatar>
                  <Avatar>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <Box className={classes.listItemText}>
                  <Typography component="h1">Tài khoản</Typography>
                  <Typography component="p">
                    Là tên tài khoản (username) để đăng nhập tài khoản.
                  </Typography>
                </Box>
              </ListItem>
              <Divider variant="middle" component="li" />
              <ListItem className={classes.listItem}>
                <ListItemAvatar>
                  <Avatar>
                    <LockIcon />
                  </Avatar>
                </ListItemAvatar>
                <Box className={classes.listItemText}>
                  <Typography component="h1">Mật khẩu</Typography>
                  <Typography component="p">
                    Mật khẩu cần được kết hợp bởi nhiều chữ cái, số và ký tự đặc
                    biệt để bảo mật tài khoản.
                  </Typography>
                </Box>
              </ListItem>
              <Divider variant="middle" component="li" />
              <ListItem className={classes.listItem}>
                <ListItemAvatar>
                  <Avatar>
                    <PhoneIphoneIcon />
                  </Avatar>
                </ListItemAvatar>
                <Box className={classes.listItemText}>
                  <Typography component="h1">Số điện thoại</Typography>
                  <Typography component="p">
                    Số điện thoại dùng để đăng kí tài khoản. Thông tin này có
                    thể được dùng để xác minh bạn là chủ sở hữu tài khoản nhằm
                    thiết lập lại mật khẩu
                  </Typography>
                </Box>
              </ListItem>
              <Divider variant="middle" component="li" />
              <ListItem className={classes.listItem}>
                <ListItemAvatar>
                  <Avatar>
                    <MailOutlineIcon />
                  </Avatar>
                </ListItemAvatar>
                <Box className={classes.listItemText}>
                  <Typography component="h1">Email</Typography>
                  <Typography component="p">
                    Email có thể được sử dụng để thay đổi mật khẩu khi không có
                    công cụ bảo mật nào khác được bật. Cũng như nhận các tin tức
                    hoạt động của tài khoản.
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default UserInformation;
