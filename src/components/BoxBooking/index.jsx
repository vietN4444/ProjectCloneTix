import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import DropdownIcon from "../../assets/imgs/dropdown-icon.png";
import React from "react";
import Style from "./style";

const BoxBooking = (props) => {
  const classes = Style(props);
  return (
    <>
      <Box className={classes.booking}>
        <Container
          disableGutters
          maxWidth="md"
          className={classes.bookingWrapper}
        >
          <Grid container className={classes.bookingContainer}>
            <Grid
              item
              md={4}
              className={`${classes.bookingItem} ${classes.selecteMovie}`}
            >
              <Box className={classes.bookingLabel}>
                <Typography component="p" variant="subtitle2">
                  Phim
                </Typography>
                <img src={DropdownIcon} alt="icon" />
              </Box>
              <Box className={classes.bookingDropdownList} id="selecteMovie">
                <ul>
                  <li className="booking__dropdownItem">
                    Bán Đảo - Peninsula - (C18)
                  </li>
                  <li className="booking__dropdownItem">
                    Bằng Chứng Vô Hình - (C18)
                  </li>
                  <li className="booking__dropdownItem">
                    Đỉnh Mù Sương - Foggy Mountain - (C18)
                  </li>
                  <li className="booking__dropdownItem">
                    Tàn Tích Quỷ Ám - Relic - (C18)
                  </li>
                  <li className="booking__dropdownItem">
                    Hậu Duệ Thần Sấm - Mortal - (C16)
                  </li>
                  <li className="booking__dropdownItem">
                    Bán Đảo - Peninsula - (C18)
                  </li>
                  <li className="booking__dropdownItem">
                    Bằng Chứng Vô Hình - (C18)
                  </li>
                  <li className="booking__dropdownItem">
                    Đỉnh Mù Sương - Foggy Mountain - (C18)
                  </li>
                  <li className="booking__dropdownItem">
                    Tàn Tích Quỷ Ám - Relic - (C18)
                  </li>
                  <li className="booking__dropdownItem">
                    Hậu Duệ Thần Sấm - Mortal - (C16)
                  </li>
                  <li className="booking__dropdownItem">
                    Bán Đảo - Peninsula - (C18)
                  </li>
                  <li className="booking__dropdownItem">
                    Bằng Chứng Vô Hình - (C18)
                  </li>
                  <li className="booking__dropdownItem">
                    Đỉnh Mù Sương - Foggy Mountain - (C18)
                  </li>
                  <li className="booking__dropdownItem">
                    Tàn Tích Quỷ Ám - Relic - (C18)
                  </li>
                  <li className="booking__dropdownItem">
                    Hậu Duệ Thần Sấm - Mortal - (C16)
                  </li>
                </ul>
              </Box>
            </Grid>
            <Grid item md={3} className={classes.bookingItem}>
              <Box className={classes.bookingLabel}>
                <Typography component="p" variant="subtitle2">
                  Rạp
                </Typography>
                <img src={DropdownIcon} alt="icon" />
              </Box>
              <Box className={classes.bookingDropdownList}>
                <ul>
                  <li className="booking__dropdownItem">Vui lòng chọn phim</li>
                </ul>
              </Box>
            </Grid>
            <Grid item md={3} className={classes.bookingItem}>
              <Box className={classes.bookingLabel}>
                <Typography component="p" variant="subtitle2">
                  Ngày giờ suất chiếu
                </Typography>
                <img src={DropdownIcon} alt="icon" />
              </Box>
              <Box className={classes.bookingDropdownList}>
                <ul>
                  <li className="booking__dropdownItem">
                    Vui lòng chọn phim và rạp
                  </li>
                </ul>
              </Box>
            </Grid>
            <Grid
              item
              md={2}
              className={`${classes.bookingItem} ${classes.bookingButton}`}
            >
              <Button disabled size="large" fullWidth={true}>
                Mua Vé Ngay
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default BoxBooking;
