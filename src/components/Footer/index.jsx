import { Box, Container, Grid, Link, Typography } from "@material-ui/core";
import React from "react";
import Style from "../Footer/style";
import appleLogo from "../../assets/imgs/apple-logo.png";
import apkLogo from "../../assets/imgs/android-logo.png";
import facebookLogo from "../../assets/imgs/facebook-logo.png";
import zaloLogo from "../../assets/imgs/zalo-logo.png";
import zionLogo from "../../assets/imgs/zion-logo.jpg";
import confirmedLogo from "../../assets/imgs/confirm.png";

function FooterComponent(props) {
  const classes = Style(props);
  return (
    <>
      <Box className={classes.footer}>
        <Container maxWidth="md" disableGutters>
          <Box>
            <Grid container className={classes.footerContainerTop} spacing={2}>
              <Grid className={classes.footerTopContent} item md={4}>
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
              <Grid className={classes.footerTopContent} item md={4}>
                <Typography className={classes.footerTitle} component="p">
                  ĐỐI TÁC
                </Typography>
                <Box className={classes.footerTopContentLogo}>
                  <Link href="https://www.cgv.vn/" target="_blank" title="CGV">
                    <img src="./imgs/cgv.png" alt="logo" />
                  </Link>
                  <Link
                    href="https://www.bhdstar.vn/"
                    target="_blank"
                    title="BHD"
                  >
                    <img src="./imgs/bhd.png" alt="logo" />
                  </Link>
                  <Link
                    href="https://www.galaxycine.vn/"
                    target="_blank"
                    title="Galaxy"
                  >
                    <img src="./imgs/galaxycine.png" alt="logo" />
                  </Link>
                  <Link
                    href="http://cinestar.com.vn/"
                    target="_blank"
                    title="Cinestar"
                  >
                    <img src="./imgs/cinestar.png" alt="logo" />
                  </Link>
                  <Link
                    href="http://lottecinemavn.com/LCHS/index.aspx"
                    target="_blank"
                    title="Lotte"
                  >
                    <img src="./imgs/lotte.png" alt="logo" />
                  </Link>
                </Box>
                <Box className={classes.footerTopContentLogo}>
                  <Link
                    href="https://www.megagscinemas.vn/"
                    target="_blank"
                    title="Megags"
                  >
                    <img id="Megags" src="./imgs/megags.png" alt="logo" />
                  </Link>
                  <Link
                    href="https://www.betacineplex.vn/"
                    target="_blank"
                    title="Beta"
                  >
                    <img src="./imgs/bt.jpg" alt="logo" />
                  </Link>
                  <Link href="http://ddcinema.vn/" target="_blank" title="DDC">
                    <img src="./imgs/dongdacinema.png" alt="logo" />
                  </Link>
                  <Link
                    href="https://touchcinema.com/"
                    target="_blank"
                    title="Touch Cinema"
                  >
                    <img id="touchcinema" src="./imgs/TOUCH.png" alt="logo" />
                  </Link>
                  <Link
                    href="https://cinemaxvn.com/"
                    target="_blank"
                    title="Cinemax"
                  >
                    <img src="./imgs/cnx.jpg" alt="logo" />
                  </Link>
                </Box>
                <Box className={classes.footerTopContentLogo}>
                  <Link
                    href="https://starlight.vn/"
                    target="_blank"
                    title="Starlight"
                  >
                    <img src="./imgs/STARLIGHT.png" alt="logo" />
                  </Link>
                  <Link
                    href="https://www.dcine.vn/"
                    target="_blank"
                    title="Dcine"
                  >
                    <img src="./imgs/dcine.png" alt="logo" />
                  </Link>
                  <Link
                    href="https://zalopay.vn/"
                    target="_blank"
                    title="ZaloPay"
                  >
                    <img src="./imgs/zalopay_icon.png" alt="logo" />
                  </Link>
                  <Link
                    href="https://www.payoo.vn/"
                    target="_blank"
                    title="Payoo"
                  >
                    <img src="./imgs/payoo.jpg" alt="logo" />
                  </Link>
                  <Link
                    href="https://portal.vietcombank.com.vn/Pages/Home.aspx"
                    target="_blank"
                    title="Vietcombank"
                  >
                    <img src="./imgs/VCB.png" alt="logo" />
                  </Link>
                </Box>
                <Box className={classes.footerTopContentLogo}>
                  <Link
                    href="https://www.agribank.com.vn/"
                    target="_blank"
                    title="Agribank"
                  >
                    <img src="./imgs/AGRIBANK.png" alt="logo" />
                  </Link>
                  <Link
                    href="https://www.vietinbank.vn/web/home/vn/index.html"
                    target="_blank"
                    title="Vietinbank"
                  >
                    <img src="./imgs/VIETTINBANK.png" alt="logo" />
                  </Link>
                  <Link
                    href="https://www.indovinabank.com.vn/"
                    target="_blank"
                    title="IVB"
                  >
                    <img src="./imgs/IVB.png" alt="logo" />
                  </Link>
                  <Link
                    href="https://webv3.123go.vn/"
                    target="_blank"
                    title="123Go"
                  >
                    <img src="./imgs/123go.png" alt="logo" />
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
              <Grid
                className={`${classes.footerTopContent} ${classes.footerSocial}`}
                item
                md={4}
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
              <Grid item md={10} className={classes.footerBottomContent}>
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
                    kế hoạch và đầu tư Thành phố Hồ Chí M
                  </Typography>
                  <Typography variant="body2" component="p">
                    Số Điện Thoại (Hotline): 1900 545 436 <br />
                    Email: <Link href="#">support@tix.vn</Link>
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={2} className={classes.footerBottomLogo}>
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

export default FooterComponent;
