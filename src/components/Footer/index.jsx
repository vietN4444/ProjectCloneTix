import { Box, Container, Grid, Link, Typography } from "@material-ui/core";
import React, { memo, useEffect, useState } from "react";
import Style from "../Footer/style";
import appleLogo from "../../assets/imgs/apple-logo.png";
import apkLogo from "../../assets/imgs/android-logo.png";
import facebookLogo from "../../assets/imgs/facebook-logo.png";
import zaloLogo from "../../assets/imgs/zalo-logo.png";
import zionLogo from "../../assets/imgs/zion-logo.jpg";
import confirmedLogo from "../../assets/imgs/confirm.png";

function FooterComponent(props) {
  const classes = Style(props);
  const [gutter, setGutter] = useState(true);
  const [logoContainer, setLogoContainer] = useState(true);

  const changeRes = () => {
    if (window.innerWidth <= 1000) {
      setGutter(false);
    } else {
      setGutter(true);
    }
    if (window.innerWidth <= 600) {
      setLogoContainer(false);
    } else {
      setLogoContainer(true);
    }
  };

  window.addEventListener("resize", changeRes);

  useEffect(() => {
    changeRes();
  }, []);

  return (
    <>
      <Box className={classes.footer}>
        <Container maxWidth="md" disableGutters={gutter}>
          <Box>
            <Grid container className={classes.footerContainerTop} spacing={2}>
              <Grid className={classes.footerTopContent} item md={4} sm={3}>
                <Typography className={classes.footerTitle} component="p">
                  TIX
                </Typography>
                <Box className={classes.footerTopContentTxt}>
                  <Link href="#">FAQ</Link>
                  <Link href="#">Brand Guidelines</Link>
                </Box>
                <Box className={classes.footerTopContentTxt}>
                  <Link href="#">Thỏa thuận sử dụng</Link>
                  <Link href="#">Chính sách bảo mật</Link>
                </Box>
              </Grid>
              {logoContainer ? (
                <Grid className={classes.footerTopContent} item md={4} sm={6}>
                  <Typography className={classes.footerTitle} component="p">
                    ĐỐI TÁC
                  </Typography>
                  <Box className={classes.footerTopContentLogo}>
                    <Link
                      href="https://www.cgv.vn/"
                      target="_blank"
                      title="CGV"
                    >
                      <img src="https://i.ibb.co/qdFj9dC/cgv.png" alt="logo" />
                    </Link>
                    <Link
                      href="https://www.bhdstar.vn/"
                      target="_blank"
                      title="BHD"
                    >
                      <img src="https://i.ibb.co/0Fr9MgB/bhd.png" alt="logo" />
                    </Link>
                    <Link
                      href="https://www.galaxycine.vn/"
                      target="_blank"
                      title="Galaxy"
                    >
                      <img
                        src="https://i.ibb.co/qDbGdBX/galaxycine.png"
                        alt="logo"
                      />
                    </Link>
                    <Link
                      href="http://cinestar.com.vn/"
                      target="_blank"
                      title="Cinestar"
                    >
                      <img
                        src="https://i.ibb.co/cwmKXYS/cinestar.png"
                        alt="logo"
                      />
                    </Link>
                    <Link
                      href="http://lottecinemavn.com/LCHS/index.aspx"
                      target="_blank"
                      title="Lotte"
                    >
                      <img
                        src="https://i.ibb.co/hRDFsvL/lotte.png"
                        alt="logo"
                      />
                    </Link>
                  </Box>
                  <Box className={classes.footerTopContentLogo}>
                    <Link
                      href="https://www.megagscinemas.vn/"
                      target="_blank"
                      title="Megags"
                    >
                      <img
                        id="Megags"
                        src="https://i.ibb.co/JzFt1TK/megags.png"
                        alt="logo"
                      />
                    </Link>
                    <Link
                      href="https://www.betacineplex.vn/"
                      target="_blank"
                      title="Beta"
                    >
                      <img src="https://i.ibb.co/dmwqNLN/bt.jpg" alt="logo" />
                    </Link>
                    <Link
                      href="http://ddcinema.vn/"
                      target="_blank"
                      title="DDC"
                    >
                      <img
                        src="https://i.ibb.co/M8bQP1D/dongdacinema.png"
                        alt="logo"
                      />
                    </Link>
                    <Link
                      href="https://touchcinema.com/"
                      target="_blank"
                      title="Touch Cinema"
                    >
                      <img
                        id="touchcinema"
                        src="https://i.ibb.co/KDS2fJS/TOUCH.png"
                        alt="logo"
                      />
                    </Link>
                    <Link
                      href="https://cinemaxvn.com/"
                      target="_blank"
                      title="Cinemax"
                    >
                      <img src="https://i.ibb.co/mCFM7CQ/cnx.jpg" alt="logo" />
                    </Link>
                  </Box>
                  <Box className={classes.footerTopContentLogo}>
                    <Link
                      href="https://starlight.vn/"
                      target="_blank"
                      title="Starlight"
                    >
                      <img
                        src="https://i.ibb.co/z7R48VW/STARLIGHT.png"
                        alt="logo"
                      />
                    </Link>
                    <Link
                      href="https://www.dcine.vn/"
                      target="_blank"
                      title="Dcine"
                    >
                      <img
                        src="https://i.ibb.co/QQRSvht/dcine.png"
                        alt="logo"
                      />
                    </Link>
                    <Link
                      href="https://zalopay.vn/"
                      target="_blank"
                      title="ZaloPay"
                    >
                      <img
                        src="https://i.ibb.co/mJCB5jQ/zalopay-icon.png"
                        alt="logo"
                      />
                    </Link>
                    <Link
                      href="https://www.payoo.vn/"
                      target="_blank"
                      title="Payoo"
                    >
                      <img
                        src="https://i.ibb.co/m4KjWCb/payoo.jpg"
                        alt="logo"
                      />
                    </Link>
                    <Link
                      href="https://portal.vietcombank.com.vn/Pages/Home.aspx"
                      target="_blank"
                      title="Vietcombank"
                    >
                      <img src="https://i.ibb.co/r3nPSyr/VCB.png" alt="logo" />
                    </Link>
                  </Box>
                  <Box className={classes.footerTopContentLogo}>
                    <Link
                      href="https://www.agribank.com.vn/"
                      target="_blank"
                      title="Agribank"
                    >
                      <img
                        src="https://i.ibb.co/CmLW0Pm/AGRIBANK.png"
                        alt="logo"
                      />
                    </Link>
                    <Link
                      href="https://www.vietinbank.vn/web/home/vn/index.html"
                      target="_blank"
                      title="Vietinbank"
                    >
                      <img
                        src="https://i.ibb.co/cx8DVwB/VIETTINBANK.png"
                        alt="logo"
                      />
                    </Link>
                    <Link
                      href="https://www.indovinabank.com.vn/"
                      target="_blank"
                      title="IVB"
                    >
                      <img src="https://i.ibb.co/x5QtPkL/IVB.png" alt="logo" />
                    </Link>
                    <Link
                      href="https://webv3.123go.vn/"
                      target="_blank"
                      title="123Go"
                    >
                      <img
                        src="https://i.ibb.co/k9VvcZf/123go.png"
                        alt="logo"
                      />
                    </Link>
                    <Link
                      href="https://zingnews.vn/"
                      target="_blank"
                      title="Zingnews"
                    >
                      <img
                        src="https://static-znews.zadn.vn/images/logo-zing-home.svg"
                        alt="logo"
                      />
                    </Link>
                  </Box>
                </Grid>
              ) : null}
              <Grid
                className={`${classes.footerTopContent} ${classes.footerSocial}`}
                item
                md={4}
                sm={3}
              >
                <Grid item md={6} className={classes.footerTopContentSocial}>
                  <Typography className={classes.footerTitle} component="p">
                    MOBILE APP
                  </Typography>
                  <Link
                    href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197"
                    target="_blank"
                    title="Apple App"
                  >
                    <img src={appleLogo} alt="logo" />
                  </Link>
                  <Link
                    href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                    target="_blank"
                    title="Android App"
                  >
                    <img src={apkLogo} alt="logo" />
                  </Link>
                </Grid>
                <Grid item md={6} className={classes.footerTopContentSocial}>
                  <Typography className={classes.footerTitle} component="p">
                    SOCIAL
                  </Typography>
                  <Link
                    href="https://www.facebook.com/tix.vn/"
                    target="_blank"
                    title="Facebook social"
                  >
                    <img src={facebookLogo} alt="logo" />
                  </Link>
                  <Link
                    href="https://zalo.me/tixdatve"
                    target="_blank"
                    title="Zalo social"
                  >
                    <img src={zaloLogo} alt="logo" />
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid container className={classes.footerContainerBottom}>
              <Grid item md={10} sm={9} className={classes.footerBottomContent}>
                <Box className={classes.footerBottomContentLogo}>
                  <img src={zionLogo} alt="logo" />
                </Box>
                <Box className={classes.footerBottomContentTxt}>
                  <Typography component="h6" className={classes.footerTitle}>
                    TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION
                  </Typography>
                  <Typography variant="body2" component="p">
                    Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp.
                    Hồ Chí Minh, Việt Nam.
                  </Typography>
                  <Typography variant="body2" component="p">
                    Giấy chứng nhận đăng ký kinh doanh số: 0101659783,
                    <br />
                    đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở
                    kế hoạch và đầu tư Thành phố Hồ Chí Minh
                  </Typography>
                  <Typography variant="body2" component="p">
                    Số Điện Thoại (Hotline): 1900 545 436 <br />
                    Email: <Link href="#">support@tix.vn</Link>
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={2} sm={3} className={classes.footerBottomLogo}>
                <Link href="#">
                  <img src={confirmedLogo} alt="logo" />
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default memo(FooterComponent);
