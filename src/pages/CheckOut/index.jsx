import {
  Avatar,
  Box,
  Button,
  FormControlLabel,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";

import WeekendIcon from "@material-ui/icons/Weekend";
import ErrorIcon from "@material-ui/icons/Error";
import ComboImg from "../../assets/imgs/popcorn.png";
import AvaCinema from "../../assets/imgs/cinema1.png";
import Screen from "../../assets/imgs/screen.png";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import LocalMoviesIcon from "@material-ui/icons/LocalMovies";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import MethodPayAtm from "../../assets/imgs/methodPayAtm.png";
import MethodPayCC from "../../assets/imgs/methodPaycc.png";
import MethodPayoo from "../../assets/imgs/methodPayoo.png";
import MethodZalo from "../../assets/imgs/methodZalo.jpg";

import Style from "./style";
import { useDispatch, useSelector } from "react-redux";
import { getCinemaCheckout } from "../../redux/actions/cinemaActions";
import { ModalCombo } from "../../components/ModalPopup";
import { SET_MODAL_COMBO } from "../../redux/actions/actionContants";
import SeatItem from "../../components/SeatItem";
import ComboItem from "../../components/ComboItem";
import { useHistory, useParams } from "react-router-dom";

const arrMethodPay = [
  { value: "atm", label: "Thanh toán qua ZaloPay", img: MethodZalo },
  { value: "paycc", label: "Visa, Master, JCB", img: MethodPayCC },
  { value: "payoo", label: "Thẻ ATM nội địa", img: MethodPayAtm },
  {
    value: "zalo",
    label: "Thanh toán tại cửa hàng tiện ích",
    img: MethodPayoo,
  },
];

const domainImg = "https://ui-avatars.com/api/?name=";
const domainImgTwo = "https://i.pravatar.cc/150?u=";

const CheckOut = (props) => {
  const classes = Style(props);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const data = useSelector((state) => state.cinema.cinemaCheckoutInfo);
  const seatList = useSelector((state) => state.cinema.cinemaCheckoutSeat);
  const modalCombo = useSelector((state) => state.status.modalCombo);
  const dataCombo = useSelector((state) => state.combo.combo);
  // const ticketBooking = useSelector(
  //   (state) => state.cinema.cinemaCheckoutBookingTicket
  // );
  const priceSeat = useSelector((state) => state.cinema.cinemaPriceTicket);
  const seatBooking = useSelector((state) => state.cinema.cinemaSeatBooking);
  const user = useSelector((state) => state.auth);

  const [imgAvatar, setImgAvatar] = useState(domainImgTwo);
  const [ticketTotal, setTicketTotal] = useState(0);
  const [priceCombo, setPriceCombo] = useState(0);
  const [methodPay, setMethodPay] = useState(false);
  const [totalSeconds, setTotalSeconds] = useState(300);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(5);
  const [value, setValue] = useState("atm");
  const [btnSuccess, setBtnSuccess] = useState(true);
  const [btnCoupon, setBtnCoupon] = useState(true);
  const [coupon, setCoupon] = useState("");
  const [stepTwo, setStepTwo] = useState(true);

  const handleChange = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  const renderScreenSeatVip = useCallback(() => {
    const seatListVip = seatList.filter((seat) => seat.loaiGhe === "Vip");

    return seatListVip.map((seat, index) => {
      return (
        <Grid key={index} item md={1} sm={1}>
          <SeatItem
            seat={seat}
            funcBtn={setBtnSuccess}
            funcMethodPay={setMethodPay}
          />
        </Grid>
      );
    });
  }, [seatList]);

  const timeOut = useCallback(() => {
    return Swal.fire({
      icon: "error",
      confirmButtonText: "Đặt vé lại",
      title: "Opps...",
      text:
        "Đã hết thời gian giữ ghế. Vui lòng thực hiện đơn hàng trong thời hạn 5 phút.",
      confirmButtonColor: "#fb4226",
      onClose: () => {
        history.go(0);
      },
    });
  }, []);

  const renderScreenSeatNormalBehind = useCallback(() => {
    const seatListNormal = seatList.filter((seat) => seat.loaiGhe === "Thuong");

    return seatListNormal.slice(48).map((seat, index) => {
      return (
        <Grid key={index} item md={1} sm={1}>
          <SeatItem
            seat={seat}
            funcBtn={setBtnSuccess}
            funcMethodPay={setMethodPay}
          />
        </Grid>
      );
    });
  }, [seatList]);

  const renderScreenSeatNormalFront = useCallback(() => {
    const seatListNormal = seatList.filter((seat) => seat.loaiGhe === "Thuong");

    return seatListNormal.slice(0, 48).map((seat, index) => {
      return (
        <Grid key={index} item md={1} sm={1}>
          <SeatItem
            seat={seat}
            funcBtn={setBtnSuccess}
            funcMethodPay={setMethodPay}
          />
        </Grid>
      );
    });
  }, [seatList]);

  const renderTimeCinema = useCallback(
    (type = 1) => {
      const dateNow = new Date();
      const dateDay = dateNow.getDate();
      const dateMonth = dateNow.getMonth();
      const dateYear = dateNow.getUTCFullYear();
      if (type) {
        return (
          <Typography>
            {dateDay}/{dateMonth}/{dateYear} - {data.gioChieu} - {data.tenRap}
          </Typography>
        );
      } else {
        return (
          <Typography component="span">
            {dateDay}/{dateMonth}/{dateYear} - {data.gioChieu}
          </Typography>
        );
      }
    },
    [data]
  );

  const contdown = useCallback(() => {
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    setMinutes(minutes);
    setSeconds(seconds);

    setTotalSeconds(totalSeconds - 1);
  }, [totalSeconds]);

  const renderTimeContdown = useCallback(() => {
    if (seconds >= 10) {
      return (
        <Typography>
          {minutes}:{seconds}
        </Typography>
      );
    }
    return (
      <Typography>
        {minutes}:0{seconds}
      </Typography>
    );
  }, [seconds, minutes]);

  const handleCombo = useCallback(() => {
    dispatch({
      type: SET_MODAL_COMBO,
    });
  }, [modalCombo]);

  const renderMethodPayRadio = useCallback(() => {
    return arrMethodPay.map((ele, index) => {
      if (index === 0) {
        return (
          <FormControlLabel
            className={classes.label}
            key={index}
            value={ele.value}
            control={<Radio />}
            label={
              <Box className={classes.methodPayLabel}>
                <img src={ele.img} alt="methodPay" />
                <Typography>
                  {ele.label}
                  <Typography component="span">
                    x3 vé CGV 79k/vé cho tất cả khách hàng
                  </Typography>
                </Typography>
              </Box>
            }
          />
        );
      }
      return (
        <FormControlLabel
          className={classes.label}
          key={index}
          value={ele.value}
          control={<Radio />}
          label={
            <Box className={classes.methodPayLabel}>
              <img src={ele.img} alt="methodPay" />
              <Typography>{ele.label}</Typography>
            </Box>
          }
        />
      );
    });
  }, []);

  const renderCombo = useCallback(() => {
    return dataCombo.map((combo, index) => {
      return (
        <Box key={index} className={classes.comboContent}>
          <Box className={classes.comboHeaderTitle}>
            <Typography>{combo.title}</Typography>
          </Box>
          {combo.listItem.map((item, index2) => {
            return (
              <ComboItem
                key={index2}
                item={item}
                count={item.count}
                priceCombo={priceCombo}
                funcPriceCombo={setPriceCombo}
              />
            );
          })}
        </Box>
      );
    });
  }, [dataCombo, priceCombo]);

  const renderSeatBooking = useCallback(() => {
    return seatBooking?.map((seat, index) => {
      if (index === 0) {
        return ": " + seat;
      }
      return ", " + seat;
    });
  }, [seatBooking]);

  const handleCoupon = useCallback(
    (e) => {
      const value = e.target.value;
      setCoupon(value);
      if (value === "") {
        setBtnCoupon(true);
      }
    },
    [coupon]
  );

  const handleBtnCoupon = useCallback(() => {
    if (coupon === "") {
      return;
    }
    setBtnCoupon(false);
  }, [coupon]);

  const renderSeatResult = useCallback(() => {
    return seatBooking.map((seat, index) => {
      return (
        <Grid key={index} item md={2}>
          <Typography className={classes.seatResult}>{seat}</Typography>
        </Grid>
      );
    });
  }, [seatBooking]);

  useEffect(() => {
    if (seatBooking.length === 0) {
      setBtnSuccess(true);
      setMethodPay(false);
    }
  }, [seatBooking]);

  useEffect(() => {
    const priceTotal = priceSeat + priceCombo;
    setTicketTotal(priceTotal);
  }, [priceSeat, priceCombo]);

  useEffect(() => {
    dispatch(getCinemaCheckout(id));
  }, []);

  useEffect(() => {
    if (totalSeconds >= 0) {
      setTimeout(contdown, 1000);
    } else {
      clearTimeout(contdown);
      timeOut();
    }
  }, [totalSeconds]);

  return (
    <Box className={classes.checkOut}>
      <Box className={classes.header}>
        <Box className={classes.headerContainer}>
          <Box className={classes.headerWrapper}>
            <Box className={classes.containerLeft}>
              <Typography className={stepTwo ? "active" : null}>
                <Typography component="span">01</Typography>
                {"CHỌN GHẾ & THANH TOÁN"}
              </Typography>
              <Typography className={stepTwo ? null : "active"}>
                <Typography component="span">02</Typography>
                KẾT QUẢ ĐẶT VÉ
              </Typography>
            </Box>
            <Box className={classes.containerRight}>
              <Avatar
                alt="ava"
                src={`${imgAvatar}${user.userName}`}
                onError={() => setImgAvatar(domainImg)}
              />
              <Typography component="span">{user.userName}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className={classes.checkOutContainer}>
        <Box className={classes.checkOutLeft}>
          <Box className={classes.checkOutLeftContainer}>
            <Box className={classes.checkOutLeftModal}></Box>
            <Box className={classes.checkOutLeftContent}>
              {stepTwo ? (
                <Box className={classes.checkOutLeftGrid}>
                  <Box>
                    <Box className={classes.checkOutLeftHeader}>
                      <Box className={classes.headerLeft}>
                        <img src={AvaCinema} alt="cinema" />
                        <Box className={classes.headerLeftDetailCinema}>
                          <Typography>
                            <Typography component="span">CGV</Typography> -
                            Crescent Mall
                          </Typography>
                          <Typography>
                            <Typography component="span">
                              - {data.gioChieu} - {data.tenRap}
                            </Typography>
                          </Typography>
                        </Box>
                      </Box>
                      <Box className={classes.headerRight}>
                        <Typography component="span">
                          thời gian giữ ghế
                        </Typography>
                        {renderTimeContdown()}
                      </Box>
                    </Box>
                    <Box className={classes.checkOutLeftBody}>
                      <Box className={classes.bodyContainer}>
                        <img src={Screen} alt="screen" />
                        <Box className={classes.checkoutScreen}>
                          <Grid
                            container
                            className={classes.checkoutScreenSeatList}
                          >
                            {renderScreenSeatNormalFront()}
                            {renderScreenSeatVip()}
                            {renderScreenSeatNormalBehind()}
                          </Grid>
                          <Box className={classes.checkoutScreenNote}>
                            <Box className={classes.checkoutScreenNoteItem}>
                              <Box className={`${classes.seatNote} seatN`}>
                                <WeekendIcon />
                                <div></div>
                              </Box>
                              <Typography>Thường</Typography>
                            </Box>
                            <Box className={classes.checkoutScreenNoteItem}>
                              <Box className={`${classes.seatNote} seatVip`}>
                                <WeekendIcon />
                                <div></div>
                              </Box>
                              <Typography>VIP</Typography>
                            </Box>
                            <Box className={classes.checkoutScreenNoteItem}>
                              <Box
                                className={`${classes.seatNote} seatChoosing`}
                              >
                                <WeekendIcon />
                                <div></div>
                              </Box>
                              <Typography>Ghế đang chọn</Typography>
                            </Box>
                            <Box className={classes.checkoutScreenNoteItem}>
                              <Box className={`${classes.seatNote} seatBooked`}>
                                <WeekendIcon />
                                <div></div>
                              </Box>
                              <Typography>Ghế đã có người chọn</Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ) : (
                <Box className={classes.checkOutLeftResultContainer}>
                  <Box className={classes.resultContent}>
                    <Box className={classes.headerResult}>
                      <Typography>Đặt vé thành công</Typography>
                    </Box>
                    <Box className={classes.bodyResult}>
                      <List>
                        <ListItem>
                          <ListItemAvatar className="resultAvatar">
                            <Avatar>
                              <LocalMoviesIcon />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            className="resultDetailsMovie resultItem"
                            primary={
                              <Typography>
                                Tên phim:
                                <Typography component="span">
                                  {data.tenPhim}
                                </Typography>
                              </Typography>
                            }
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemAvatar className="resultAvatar">
                            <Avatar>
                              <LocationCityIcon />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            className="resultCinema resultItem"
                            primary={
                              <>
                                <Typography>
                                  Rạp:
                                  <Typography component="span">
                                    {`${data.tenCumRap} - ${data.tenRap}`}
                                  </Typography>
                                </Typography>
                                <Typography>
                                  Thời gian chiếu:
                                  {renderTimeCinema(0)}
                                </Typography>
                              </>
                            }
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemAvatar className="resultAvatar">
                            <Avatar>
                              <WeekendIcon />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            className="resultSeat resultItem"
                            primary={
                              <>
                                <Typography>Danh sách ghế:</Typography>
                                <Grid container spacing={1}>
                                  {renderSeatResult()}
                                </Grid>
                              </>
                            }
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemAvatar className="resultAvatar">
                            <Avatar>
                              <LocalAtmIcon />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            className="resultPrice resultItem"
                            primary={
                              <Typography>
                                Tổng tiền:
                                <Typography component="span">
                                  {ticketTotal
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                                  đ
                                </Typography>
                              </Typography>
                            }
                          />
                        </ListItem>
                      </List>
                    </Box>
                    <Box className={classes.btnGroupResult}>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => history.replace("/")}
                      >
                        Về trang chủ
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => history.go(0)}
                      >
                        Đặt vé mới
                      </Button>
                    </Box>
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
        <Box className={classes.checkOutRight}>
          <Box className={classes.checkOutRightContainer}>
            <Box className={classes.checkOutRightContent}>
              <Box
                className={`${classes.checkOutRightItem} ${classes.checkOutRightPrice}`}
              >
                <Typography>
                  {ticketTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                  đ
                </Typography>
              </Box>

              <Box
                className={`${classes.checkOutRightItem} ${classes.checkOutRightDetail}`}
              >
                <Box className="detailName">
                  <Typography component="span" className="nameTag">
                    C18
                  </Typography>
                  <Typography component="span">{data.tenPhim}</Typography>
                </Box>
                <Typography>{data.tenCumRap}</Typography>
                {renderTimeCinema()}
              </Box>

              <Box
                className={`${classes.checkOutRightItem} ${classes.checkOutRightChair}`}
              >
                <Typography component="span">
                  Ghế{renderSeatBooking()}
                </Typography>
                <Typography component="span">
                  {priceSeat.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ
                </Typography>
              </Box>

              <Box
                className={`${classes.checkOutRightItem} ${classes.checkOutRightCombo}`}
                onClick={handleCombo}
              >
                <Typography component="span">
                  <img src={ComboImg} alt="combo" />
                  Chọn combo
                </Typography>
                <Typography component="span">
                  {priceCombo.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                  đ
                </Typography>
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
                  type="search"
                  onChange={handleCoupon}
                />
                {btnCoupon ? (
                  <Button disabled={btnSuccess} onClick={handleBtnCoupon}>
                    Áp dụng
                  </Button>
                ) : (
                  <CheckCircleOutlineIcon />
                )}
              </Box>

              <Box
                className={`${classes.checkOutRightItem} ${classes.checkOutmethodPay}`}
              >
                <Typography>Hình thức thanh toán</Typography>
                <Box className={classes.methodPayContent}>
                  {methodPay ? (
                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      value={value}
                      onChange={handleChange}
                    >
                      {renderMethodPayRadio()}
                    </RadioGroup>
                  ) : (
                    <Typography component="span">
                      Vui lòng chọn ghế để hiển thị phương thức thanh toán phù
                      hợp.
                    </Typography>
                  )}
                </Box>
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
              <Button variant="contained" disabled={btnSuccess}>
                Đặt Vé
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        className={`${classes.comboWrapper} ${modalCombo ? "showCombo" : null}`}
      >
        {modalCombo ? <ModalCombo /> : null}
        <Box className={classes.comboContainer}>{renderCombo()}</Box>
      </Box>

      {/* Alert Timeout */}
      {/* <MySwal
        show={alertTimeout}
        title="Opps..."
        confirmButtonText="Đặt vé lại"
        text="Đã hết thời gian giữ ghế. Vui lòng thực hiện đơn hàng trong thời hạn 5 phút."
        confirmButtonColor="#fb4226"
      /> */}
    </Box>
  );
};

export default CheckOut;
