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
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import LocalMoviesIcon from "@material-ui/icons/LocalMovies";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import MethodPayAtm from "../../assets/imgs/methodPayAtm.png";
import MethodPayCC from "../../assets/imgs/methodPaycc.png";
import MethodPayoo from "../../assets/imgs/methodPayoo.png";
import MethodZalo from "../../assets/imgs/methodZalo.jpg";

import Style from "./style";
import { useDispatch, useSelector } from "react-redux";
import {
  bookedTicket,
  getCinemaCheckout,
} from "../../redux/actions/cinemaActions";
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
  const ticketBooking = useSelector(
    (state) => state.cinema.cinemaCheckoutBookingTicket
  );
  const priceSeat = useSelector((state) => state.cinema.cinemaPriceTicket);
  const seatBooking = useSelector((state) => state.cinema.cinemaSeatBooking);
  const authBooking = useSelector((state) => state.cinema.alertFullTicket);
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
  const [userTicket, setUserTicket] = useState({
    email: "",
    sdt: "",
  });
  const [tabletScreen, setTabletScreen] = useState(false);
  const [tabletScreenRightC, setTabletScreenRightC] = useState(false);
  const [stepTwoTablet, setStepTwoTablet] = useState(false);
  const [stepThirdTablet, setStepThirdTablet] = useState(false);
  const [screenMobile, setScreenMobile] = useState(false);

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
  }, [history]);

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
      const dateMonth = dateNow.getMonth() + 1;
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

  const countdown = useCallback(() => {
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
  }, [dispatch]);

  const renderMethodPayRadio = () => {
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
  };

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

  const handleCoupon = useCallback((e) => {
    const value = e.target.value;
    setCoupon(value);
    if (value === "") {
      setBtnCoupon(true);
    }
  }, []);

  const handleBtnCoupon = useCallback(() => {
    if (coupon === "") {
      return;
    }
    setBtnCoupon(false);
  }, [coupon]);

  const renderSeatResult = useCallback(() => {
    return seatBooking.map((seat, index) => {
      return (
        <Grid key={index} item md={2} sm={4} className={classes.gridSeatResult}>
          <Typography className={classes.seatResult}>{seat}</Typography>
        </Grid>
      );
    });
  }, [seatBooking]);

  const submitCheckout = useCallback(() => {
    const userBooking = {
      maLichChieu: id,
      danhSachVe: ticketBooking,
      taiKhoanNguoiDung: user.userName,
    };
    dispatch(bookedTicket(alertBookedSuccess, userBooking));
  }, [id, ticketBooking, user]);

  const submitCheckoutMobile = useCallback(() => {
    const userBooking = {
      maLichChieu: id,
      danhSachVe: ticketBooking,
      taiKhoanNguoiDung: user.userName,
    };
    dispatch(bookedTicket(alertBookedSuccessMobile, userBooking));
  }, [id, ticketBooking, user]);

  const handleInputText = useCallback(
    (e) => {
      const key = e.target.name;
      const value = e.target.value;
      setUserTicket({
        ...userTicket,
        [key]: value,
      });
    },
    [userTicket]
  );

  const alertBooking = useCallback(() => {
    return Swal.fire({
      icon: "error",
      confirmButtonText: "Ok",
      title: "Opps...",
      text: "Bạn không thể chọn quá 6 ghế",
      confirmButtonColor: "#fb4226",
      willClose: () => {
        dispatch({
          type: "REMOVE_TICKET_BOOKINGG",
        });
      },
    });
  }, [dispatch]);

  const alertBookedSuccess = useCallback(() => {
    return Swal.fire({
      icon: "success",
      title: "Đặt vé thành công",
      timer: 2000,
      showConfirmButton: false,
      willClose: () => {
        setStepTwo(false);
        setTotalSeconds(300);
      },
    });
  }, []);

  const alertBookedSuccessMobile = useCallback(() => {
    return Swal.fire({
      icon: "success",
      title: "Đặt vé thành công",
      timer: 2000,
      showConfirmButton: false,
      willClose: () => {
        setStepThirdTablet(true);
        setStepTwo(false);
        setTotalSeconds(300);
      },
    });
  }, []);

  const changeRes = () => {
    if (window.innerWidth <= 768) {
      setTabletScreen(true);
      setTabletScreenRightC(true);
    } else {
      setTabletScreen(false);
      setTabletScreenRightC(false);
    }
    if (window.innerWidth <= 425) {
      setScreenMobile(true);
    } else {
      setScreenMobile(false);
    }
  };

  const handleSubmitStepOne = useCallback(() => {
    setStepTwoTablet(true);
    setTabletScreenRightC(false);
  }, []);

  const backStepOne = useCallback(() => {
    setStepTwoTablet(false);
    setTabletScreenRightC(true);
  }, []);

  const alertSubmitCheckout = useCallback(() => {
    return Swal.fire({
      icon: "question",
      title: "Xác nhận?",
      text: "Bạn xác nhận muốn đặt vé, bạn có muốn đặt thêm gì hay không?",
      confirmButtonColor: "#44c020",
      cancelButtonColor: "#fb4226",
      confirmButtonText: "Xác nhận",
      cancelButtonText: "Ở lại",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        submitCheckout();
      }
    });
  }, []);

  const alertSubmitCheckoutMobile = useCallback(() => {
    return Swal.fire({
      icon: "question",
      title: "Xác nhận?",
      text: "Bạn xác nhận muốn đặt vé, bạn có muốn đặt thêm gì hay không?",
      confirmButtonColor: "#44c020",
      cancelButtonColor: "#fb4226",
      confirmButtonText: "Xác nhận",
      cancelButtonText: "Ở lại",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        submitCheckoutMobile();
      }
    });
  }, []);

  window.addEventListener("resize", changeRes);

  useEffect(() => {
    changeRes();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const getData = await dispatch(getCinemaCheckout(id));
    }

    fetchData();
  }, [dispatch, id]);

  useEffect(() => {
    if (authBooking) {
      alertBooking();
    }
  }, [authBooking, alertBooking]);

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
    const count = setTimeout(countdown, 1000);
    if (totalSeconds <= 0) {
      clearTimeout(count);
      timeOut();
    }

    return () => clearTimeout(count);
  }, [totalSeconds, countdown, timeOut]);

  return (
    <Box className={classes.checkOut}>
      <Box className={classes.header}>
        <Box className={classes.headerContainer}>
          <Box className={classes.headerWrapper}>
            {/* Chuyển screen header pc và mobile */}
            {tabletScreen ? (
              // Chuyển title header qua các step trên mobile
              <Box className={classes.containerLeft}>
                {!stepTwoTablet ? (
                  <Typography>
                    <Typography component="span">01.</Typography>
                    CHỌN GHẾ
                  </Typography>
                ) : !stepThirdTablet ? (
                  <Typography>
                    <Typography component="span">02.</Typography>
                    THANH TOÁN
                  </Typography>
                ) : (
                  <Typography>
                    <Typography component="span">03.</Typography>
                    KẾT QUẢ ĐẶT VÉ
                  </Typography>
                )}
              </Box>
            ) : (
              // Chuyển title header qua các step trên pc
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
            )}
            {/* Ẩn hiện nút back trên mobile */}
            {tabletScreen ? (
              stepTwoTablet ? (
                <Box className="iconback" onClick={backStepOne}>
                  <ArrowBackIosIcon />
                </Box>
              ) : null
            ) : null}

            <Box className={classes.containerRight}>
              <Avatar
                alt="ava"
                src={`${imgAvatar}${user.userName}`}
                onError={() => setImgAvatar(domainImg)}
              />
              {screenMobile ? null : (
                <Typography component="span">{user.userName}</Typography>
              )}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className={classes.checkOutContainer}>
        <Box
          className={`${classes.checkOutLeft} ${
            stepTwoTablet ? "dnone" : null
          }`}
        >
          <Box className={classes.checkOutLeftContainer}>
            {tabletScreen ? null : (
              <Box className={classes.checkOutLeftModal}></Box>
            )}
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
                        </Box>
                      </Box>
                    </Box>
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
                        <Box className={`${classes.seatNote} seatChoosing`}>
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
                              <AccountBoxIcon />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            className="resultCinema resultItem"
                            primary={
                              <>
                                <Typography>
                                  Tài khoản:
                                  <Typography component="span">
                                    {user.userName}
                                  </Typography>
                                </Typography>
                                <Typography>
                                  Email:
                                  <Typography component="span">
                                    {userTicket.email}
                                  </Typography>
                                </Typography>
                                <Typography>
                                  SDT:
                                  <Typography component="span">
                                    {userTicket.sdt}
                                  </Typography>
                                </Typography>
                              </>
                            }
                          />
                        </ListItem>
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
                                <Typography>Danh sách ghế được đặt:</Typography>
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

        {tabletScreenRightC ? null : stepThirdTablet ? null : (
          <Box className={classes.checkOutRight}>
            <Box
              className={`${classes.checkOutRightContainer} ${
                stepTwo ? null : "checkOutRightComfirm"
              }`}
            >
              <Box className={classes.checkOutRightContent}>
                <Box
                  className={`${classes.checkOutRightItem} ${classes.checkOutRightPrice}`}
                >
                  <Typography>
                    {ticketTotal
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
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
                    {priceSeat.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                    đ
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
                    {priceCombo
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                    đ
                  </Typography>
                </Box>

                <Box
                  className={`${classes.checkOutRightItem} ${classes.checkOutRightInput} checkOutEmail`}
                >
                  <TextField
                    label="E-Mail"
                    name="email"
                    className={classes.input}
                    placeholder="Example@xxx.com"
                    onChange={handleInputText}
                  />
                </Box>

                <Box
                  className={`${classes.checkOutRightItem} ${classes.checkOutRightInput} checkOutPhone`}
                >
                  <TextField
                    label="Phone"
                    name="sdt"
                    className={classes.input}
                    onChange={handleInputText}
                  />
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
                    <Typography component="span">ZMS</Typography> (tin nhắn
                    Zalo) và <Typography component="span">Email</Typography> đã
                    nhập.
                  </Typography>
                </Box>
              </Box>

              {stepTwoTablet ? null : (
                <Box className={classes.checkOutRightBtn}>
                  <Button
                    variant="contained"
                    disabled={btnSuccess}
                    onClick={alertSubmitCheckout}
                  >
                    Đặt Vé
                  </Button>
                </Box>
              )}
            </Box>
          </Box>
        )}

        {stepThirdTablet ? (
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
                        <AccountBoxIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      className="resultCinema resultUser resultItem"
                      primary={
                        <>
                          <Typography>
                            Tài khoản:
                            <Typography component="span">
                              {user.userName}
                            </Typography>
                          </Typography>
                          <Typography>
                            Email:
                            <Typography component="span">
                              {userTicket.email}
                            </Typography>
                          </Typography>
                          <Typography>
                            SDT:
                            <Typography component="span">
                              {userTicket.sdt}
                            </Typography>
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
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
                          <Typography>Danh sách ghế được đặt:</Typography>
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
        ) : null}
      </Box>

      <Box
        className={`${classes.comboWrapper} ${modalCombo ? "showCombo" : null}`}
      >
        {modalCombo ? <ModalCombo /> : null}
        <Box className={classes.comboContainer}>{renderCombo()}</Box>
        {modalCombo ? (
          <Box className={`${classes.btnBox} combo`}>
            <Grid container>
              <Grid
                item
                md={6}
                sm={6}
                className={`${classes.btnBoxItem} priceCombo`}
              >
                <Typography>{priceCombo / 1000}</Typography>
                <Box>
                  <Typography component="span">000</Typography>
                  <Typography component="span">VND</Typography>
                </Box>
              </Grid>
              <Grid item md={6} sm={6} className={classes.btnBoxItem}>
                <Box className="active" onClick={handleCombo}>
                  <Typography component="span">TIẾP TỤC</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        ) : null}
      </Box>

      {tabletScreen ? (
        stepThirdTablet ? null : (
          <Box className={classes.btnBoxFixed}>
            <Box className={classes.btnBox}>
              <Grid container>
                <Grid item md={6} sm={6} className={classes.btnBoxItem}>
                  <Box className="txtSeat">
                    {seatBooking.map((seat, index) => {
                      return (
                        <Typography key={index} component="span">
                          {seat}{" "}
                        </Typography>
                      );
                    })}
                  </Box>
                </Grid>
                <Grid item md={6} sm={6} className={classes.btnBoxItem}>
                  {stepTwoTablet ? null : (
                    <Box
                      className={btnSuccess ? null : "active"}
                      onClick={handleSubmitStepOne}
                    >
                      <Typography component="span">TIẾP TỤC</Typography>
                    </Box>
                  )}
                  {stepTwoTablet ? (
                    <Box className="active" onClick={alertSubmitCheckoutMobile}>
                      <Typography component="span">ĐẶT VÉ</Typography>
                    </Box>
                  ) : null}
                </Grid>
              </Grid>
            </Box>
          </Box>
        )
      ) : null}
    </Box>
  );
};

export default CheckOut;
