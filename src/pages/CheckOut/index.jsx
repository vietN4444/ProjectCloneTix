import { Avatar, Box, Button, TextField, Typography } from "@material-ui/core";
import React from "react";
import { useState } from "react";

import ErrorIcon from "@material-ui/icons/Error";
import AvatarImg from "../../assets/imgs/avatar.png";
import ComboImg from "../../assets/imgs/popcorn.png";

import Style from "./style";

const CheckOut = (props) => {
  const classes = Style(props);
  const [ticketTotal, setTicketTotal] = useState({
    price: 0,
  });
  const [priceSeat, setPriceSet] = useState(0);
  const [priceCombo, setPriceCombo] = useState(0);

  return (
    <Box className={classes.checkOut}>
      <Box className={classes.header}>
        <Box className={classes.headerContainer}>
          <Box className={classes.headerWrapper}>
            <Box className={classes.containerLeft}>
              <Typography className={"active"}>
                <Typography component="span">01</Typography>
                {"CHỌN GHẾ & THANH TOÁN"}
              </Typography>
              <Typography>
                <Typography component="span">02</Typography>
                KẾT QUẢ ĐẶT VÉ
              </Typography>
            </Box>
            <Box className={classes.containerRight}>
              <Avatar alt="ava" src={AvatarImg} />
              <Typography component="span">Username 1</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className={classes.checkOutContainer}>
        <Box className={classes.checkOutLeft}></Box>
        <Box className={classes.checkOutRight}>
          <Box className={classes.checkOutRightContainer}>
            <Box className={classes.checkOutRightContent}>
              <Box
                className={`${classes.checkOutRightItem} ${classes.checkOutRightPrice}`}
              >
                <Typography>{ticketTotal.price} đ</Typography>
              </Box>

              <Box
                className={`${classes.checkOutRightItem} ${classes.checkOutRightDetail}`}
              >
                <Box className="detailName">
                  <Typography component="span" className="nameTag">
                    C18
                  </Typography>
                  <Typography component="span">Bằng chứng vô hình</Typography>
                </Box>
                <Typography>CGV - Crescent Mall</Typography>
                <Typography>03/08/2020 - 18:00 - Cinema 4</Typography>
              </Box>

              <Box
                className={`${classes.checkOutRightItem} ${classes.checkOutRightChair}`}
              >
                <Typography component="span">Ghế</Typography>
                <Typography component="span">{priceSeat} đ</Typography>
              </Box>

              <Box
                className={`${classes.checkOutRightItem} ${classes.checkOutRightCombo}`}
              >
                <Typography component="span">
                  <img src={ComboImg} alt="combo" />
                  Chọn combo
                </Typography>
                <Typography component="span">{priceCombo} đ</Typography>
              </Box>

              <Box
                className={`${classes.checkOutRightItem} ${classes.checkOutRightInput} checkOutEmail`}
              >
                <TextField
                  label="E-Mail"
                  className={classes.input}
                  placeholder="Example@xxx.com"
                />
              </Box>

              <Box
                className={`${classes.checkOutRightItem} ${classes.checkOutRightInput} checkOutPhone`}
              >
                <TextField label="Phone" className={classes.input} />
              </Box>

              <Box
                className={`${classes.checkOutRightItem} ${classes.checkOutRightInput} checkOutCoupon`}
              >
                <TextField
                  label="Mã giảm giá"
                  className={classes.input}
                  placeholder="Nhập tại đây..."
                />
                <Button variant="contained" disabled>
                  Áp dụng
                </Button>
              </Box>

              <Box className={classes.checkOutRightNotice}>
                <ErrorIcon />
                <Typography component="span">
                  Vé đã mua không thể đổi hoặc hoàn tiền
                </Typography>
                <br />
                <Typography component="span">
                  Mã vé sẽ được gửi qua tin nhắn{" "}
                  <Typography component="span">ZMS</Typography> (tin nhắn Zalo)
                  và <Typography component="span">Email</Typography> đã nhập.
                </Typography>
              </Box>
            </Box>
            <Box className={classes.checkOutRightBtn}>
              <Button variant="contained" disabled>
                Đặt Vé
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CheckOut;
