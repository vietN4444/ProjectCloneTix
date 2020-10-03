import { Box, Container, Link, Typography } from "@material-ui/core";
import WebLogo from "../../assets/imgs/web-logo.png";
import Avatar from "../../assets/imgs/avatar.png";
import Location from "../../assets/imgs/location.png";
import React from "react";
import Style from "./style";

const navBar = ["Lịch Chiếu", "Cụm Rạp", "Tin Tức", "Ứng dụng"];

function HeaderComponent(props) {
  const classes = Style(props);
  return (
    <>
      <Box className={classes.header}>
        <Container disableGutters bgcolor="primary.light">
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
            <Box display="flex" ml="auto">
              <Box className={classes.headerUserLogin}>
                <Link
                  href="#"
                  variant="subtitle1"
                  underline="none"
                  className={classes.headerTxt}
                >
                  <img src={Avatar} alt="avatar" />
                  <Typography variant="body1" component="span">
                    Đăng Nhập
                  </Typography>
                </Link>
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
          </Box>
        </Container>
      </Box>
      {/* <header className="header">
        <div className="header__container">
          <div className="header__content">
            <div className="header__content__logo">
              <a href="#">
                <img src="../imgs/web-logo.png" alt="logo" />
              </a>
            </div>
            <div className="header__content__nav">
              <ul>
                <li>
                  <a href="#">Lịch Chiếu</a>
                </li>
                <li>
                  <a href="#">Cụm Rạp</a>
                </li>
                <li>
                  <a href="#">Tin Tức</a>
                </li>
                <li>
                  <a href="#">Lịch Chiếu</a>
                </li>
              </ul>
            </div>
            <div className="header__content__user">
              <div className="header__content__user-login">
                <a className="header__content__user-txt" href="#">
                  <img src="../imgs/avatar.png" alt="ava" />
                  <span>Đăng Nhập</span>
                </a>
              </div>
              <div className="header__content__user-location">
                <a className="header__content__user-txt">
                  <img src="../imgs/location.png" alt="location" />
                  <span id="txt_location">Hồ Chí Minh</span>
                  <img src="../imgs/dropdown-icon.png" />
                </a>
                <div className="header__user__location-dropdown">
                  <ul>
                    <li>
                      <a href="#">Hồ Chí Minh</a>
                    </li>
                    <li>
                      <a href="#">Hà Nội</a>
                    </li>
                    <li>
                      <a href="#">Đà Nẵng</a>
                    </li>
                    <li>
                      <a href="#">Hải Phòng</a>
                    </li>
                    <li>
                      <a href="#">Biên Hoà</a>
                    </li>
                    <li>
                      <a href="#">Nha Trang</a>
                    </li>
                    <li>
                      <a href="#">Bình Dương</a>
                    </li>
                    <li>
                      <a href="#">Phan Thiết</a>
                    </li>
                    <li>
                      <a href="#">Hạ Long</a>
                    </li>
                    <li>
                      <a href="#">Cần Thơ</a>
                    </li>
                    <li>
                      <a href="#">Vũng Tàu</a>
                    </li>
                    <li>
                      <a href="#">Quy Nhơn</a>
                    </li>
                    <li>
                      <a href="#">Huế</a>
                    </li>
                    <li>
                      <a href="#">Long Xuyên</a>
                    </li>
                    <li>
                      <a href="#">Thái Nguyên</a>
                    </li>
                    <li>
                      <a href="#">Buôn Ma Thuột</a>
                    </li>
                    <li>
                      <a href="#">Bắc Giang</a>
                    </li>
                    <li>
                      <a href="#">Bến Tre</a>
                    </li>
                    <li>
                      <a href="#">Việt Trì</a>
                    </li>
                    <li>
                      <a href="#">Hưng Yên</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="header__content__mobile">
              <div className="header__content__mobile-logo">
                <img src="../imgs/menu-options.png" />
              </div>
              <div className="header__content__mobile-contain">
                <div className="header__content__mobile-contain-overplay" />
                <div className="header__content__mobile-contain-body">
                  <div className="header__mobile__contain">
                    <div className="header__mobile__contain-header">
                      <a href="#">
                        <img src="../imgs/avatar.png" />
                        <span>Đăng Nhập</span>
                      </a>
                      <p>
                        <img src="../imgs/next-session.png" />
                      </p>
                    </div>
                    <a href="#">Lịch Chiếu</a>
                    <a href="#">Cụm Rạp</a>
                    <a href="#">Tin Tức</a>
                    <a href="#">Ứng Dụng</a>
                    <a href="#">Hồ Chí Minh</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header> */}
    </>
  );
}

export default HeaderComponent;
