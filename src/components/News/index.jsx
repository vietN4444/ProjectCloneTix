import { Box, Container, Grid, Typography, Link } from "@material-ui/core";
import React, { useCallback, useState } from "react";

import NewItem from "../NewsItem";
import Style from "./style";

const arrNews = [
  {
    img:
      "https://znews-photo.zadn.vn/w480/Uploaded/aobovhp/2020_10_13/79332148_1279114445594121_7816999534243872768_n.jpg",
    link:
      "https://zingnews.vn/thang-duy-dong-phim-moi-cua-dao-dien-co-hau-gai-post1141317.html",
    name: "Thang Duy đóng phim mới của đạo diễn ‘Cô hầu gái’",
    description:
      "“Decision to Leave” - dự án điện ảnh mới của đạo diễn Park Chan Wook - sẽ khởi quay trong cuối tháng 10 với Thang Duy và Park Hae Il đóng chính.",
    imgLogo: "https://static-znews.zadn.vn/images/logo-zing-home.svg",
  },
  {
    img:
      "https://znews-photo.zadn.vn/w480/Uploaded/ngogtn/2020_10_14/spidey3_image05.jpg",
    link:
      "https://zingnews.vn/10-bo-ba-phim-that-bai-o-phan-cuoi-post1141853.html",
    name: "10 bộ ba phim thất bại ở phần cuối",
    description:
      "“Lời nguyền phần phim thứ ba” là điều phổ biến tại Hollywood khi các trilogy thành công rực rỡ trong hai phần đầu rồi đột ngột sụt giảm về chất lượng ở tập cuối.",
    imgLogo: "https://static-znews.zadn.vn/images/logo-zing-home.svg",
  },
  {
    img:
      "https://znews-photo.zadn.vn/w480/Uploaded/ngogtn/2020_10_20/sinister_baguul.jpg",
    link:
      "https://zingnews.vn/bo-phim-kinh-di-dang-so-nhat-moi-thoi-dai-post1143992.html",
    name: "Bộ phim kinh dị đáng sợ nhất mọi thời đại",
    description:
      "Nghiên cứu khoa học chỉ ra bộ phim kinh dị siêu nhiên “Sinister” (2012) của đạo diễn Scott Derrickson là tác phẩm đáng sợ nhất mọi thời đại.",
    imgLogo: "https://static-znews.zadn.vn/images/logo-zing-home.svg",
  },
  {
    img:
      "https://znews-photo.zadn.vn/w480/Uploaded/ngogtn/2020_10_21/perfect3.jpeg",
    link:
      "https://zingnews.vn/vi-sao-dien-anh-can-nhung-bo-phim-lam-lai-post1144480.html",
    name: "Vì sao điện ảnh cần những bộ phim làm lại?",
    description:
      "Bên cạnh chuyển thể, làm lại các tác phẩm cũ là lựa chọn ưa thích của Hollywood nói riêng và điện ảnh, truyền hình nói chung trong sứ mệnh sản xuất nội dung phục vụ khán giả.",
    imgLogo: "https://static-znews.zadn.vn/images/logo-zing-home.svg",
  },
  {
    img:
      "https://znews-photo.zadn.vn/w480/Uploaded/bzwvopcg/2020_10_20/bvu8jj2gt1941.jpg",
    name: "Tài tử Jeff Bridges bị ung thư hạch",
    link:
      "https://zingnews.vn/tai-tu-jeff-bridges-bi-ung-thu-hach-post1143860.html",
  },
  {
    img: "https://znews-photo.zadn.vn/w480/Uploaded/aobovhp/2020_10_11/m6.jpg",
    name: "10 mẹo diễn xuất của các ngôi sao điện ảnh",
    link:
      "https://zingnews.vn/10-meo-dien-xuat-cua-cac-ngoi-sao-dien-anh-post1140588.html",
  },
  {
    img:
      "https://znews-photo.zadn.vn/w480/Uploaded/neg_yslewlx/2020_10_21/34659802_8863303_image_a_41_1603281202936_2__1.jpg",
    name: "Lily James bị chê diễn xuất vô hồn trong phim mới",
    link:
      "https://zingnews.vn/lily-james-bi-che-dien-xuat-vo-hon-trong-phim-moi-post1144537.html",
  },
  {
    img:
      "https://znews-photo.zadn.vn/w480/Uploaded/aobovhp/2020_10_20/thomas_1.jpg",
    name: "Dylan O’Brien bị ám ảnh vì tai nạn trường quay",
    link:
      "https://zingnews.vn/dylan-o-brien-bi-am-anh-vi-tai-nan-truong-quay-post1143874.html",
  },
];
const arrReview = [
  {
    img:
      "https://ghienreview.com/wp-content/uploads/2020/10/Ghien-review-Tiec-trang-mau-01-min-900x475.jpg",
    link: "https://ghienreview.com/review-phim-tiec-trang-mau-duong-qua-cang/",
    name: "Review phim Tiệc trăng máu: Dương quá căng",
    description:
      "Lý do mà Ghiền review dành ba từ Dương quá căng cho bộ phim mới nhất của đạo diễn Nguyễn Quang Dũng là bởi vì có tình tiết lái máy bay hạng nặng trong phim và phim có nhiều thứ rất “căng”",
    imgLogo:
      "https://ghienreview.com/wp-content/uploads/elementor/thumbs/logo-oopzlmt61n6ouwosohv5plbwskepw0t2tuq3o0wt66.png",
  },
  {
    img:
      "https://ghienreview.com/wp-content/uploads/2020/10/Ghien-review-Sputnik-Quai-vat-san-dem-06-1-900x475.jpg",
    link:
      "https://ghienreview.com/review-phim-sputnik-quai-vat-san-dem-chin-chu-va-dang-xem/",
    name: "Review phim Sputnik – Quái vật săn đêm: Chỉn chu và đáng xem",
    description:
      "Bộ phim đến từ xứ sở Bạch Dương này được các nhà phê bình đánh giá rất cao nhưng thực sự xem trailer xong thì Ghiền review cảm thấy Sputnik chưa đủ sức hút lắm.",
    imgLogo:
      "https://ghienreview.com/wp-content/uploads/elementor/thumbs/logo-oopzlmt61n6ouwosohv5plbwskepw0t2tuq3o0wt66.png",
  },
  {
    img:
      "https://ghienreview.com/wp-content/uploads/2020/10/Ghien-review-Honest-thief-Phi-vu-hoan-luong-06-900x475.jpg",
    link:
      "https://ghienreview.com/review-phim-phi-vu-hoan-luong-xem-de-giai-tri-tot/",
    name: "Review phim Phi vụ hoàn lương: Xem để giải trí tốt",
    description:
      "Đây là một bộ phim có kinh phí thấp nhưng kịch bản phim lại được xây dựng rất chuẩn chỉnh và đậm chất giải trí nên cực kỳ phù hợp cho chúng ta ra rạp thưởng thức vào cuối tuần. Nào, hãy cùng Ghiền review phim xem có gì thú vị và hấp dẫn các bạn nhé!",
    imgLogo:
      "https://ghienreview.com/wp-content/uploads/elementor/thumbs/logo-oopzlmt61n6ouwosohv5plbwskepw0t2tuq3o0wt66.png",
  },
  {
    img:
      "https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_900/https://ghienreview.com/wp-content/uploads/2020/10/Ghien-review-Cuc-no-hoa-cuc-cung-01-900x475.jpg",
    link:
      "https://ghienreview.com/review-phim-cuc-no-hoa-cuc-cung-de-thuong-va-vietsub-qua-chat/",
    name: "Review phim Cục nợ hóa Cục cưng: Dễ thương và vietsub quá chất",
    description:
      "Tuần này, khán giả sẽ tiếp tục được chiêu đãi một tác phẩm hài cảm động mang tên Cục nợ hóa Cục cưng với nhiều lời khen về khả năng làm ngập rạp của phim. Nào, hãy cùng Ghiền review phim và kiểm chứng những nhận xét trên có chính xác không nhé.",
    imgLogo:
      "https://ghienreview.com/wp-content/uploads/elementor/thumbs/logo-oopzlmt61n6ouwosohv5plbwskepw0t2tuq3o0wt66.png",
  },
  {
    img:
      "https://ghienreview.com/wp-content/uploads/2020/10/Ghien-review-Upgrade-Nang-cap-03-900x475.jpg",
    link:
      "https://ghienreview.com/review-phim-upgrade-nang-cap-2018-cau-chuyen-cu-nhung-giai-tri-tot/",
    name:
      "Review phim Upgrade – Nâng cấp (2018): Câu chuyện cũ nhưng giải trí tốt",
  },
  {
    img:
      "https://ghienreview.com/wp-content/uploads/2020/10/Ghien-review-American-Murder-An-mang-nuoc-My-01-900x475.jpg",
    link:
      "https://ghienreview.com/review-phim-an-mang-nuoc-my-gia-dinh-hang-xom/",
    name: "Review phim Án mạng nước Mỹ: Gia đình hàng xóm",
  },
  {
    img:
      "https://ghienreview.com/wp-content/uploads/2020/10/Ghien-review-The-School-Nurse-Files-02-900x475.jpg",
    link:
      "https://ghienreview.com/review-phim-the-school-nurse-files-nu-y-ta-can-truong/",
    name: "Review phim The School Nurse Files – Nữ y tá can trường",
  },
  {
    img:
      "https://ghienreview.com/wp-content/uploads/2020/09/Ghien-review-Rom-05-900x475.jpg",
    link:
      "https://ghienreview.com/review-phim-rom-tran-trui-chan-that-nhung-khong-hay/",
    name: "Review phim Ròm – Trần trụi, chân thật nhưng KHÔNG hay",
  },
];
const arrSale = [
  {
    img:
      "https://s3img.vcdn.vn/123phim/2020/10/tix-1k-ve-ngai-chi-gia-ve-16021272027001.png",
    name: "TIX 1K/VÉ NGẠI CHI GIÁ VÉ",
    link: "https://tix.vn/khuyen-mai/7955-tix-1k-ve-ngai-chi-gia-ve",
    description:
      "Đồng giá 1k/vé cả tuần tất cả các rạp trên TIX + Nhận thêm 02 voucher thanh toán ZaloPay thả ga",
  },
  {
    img:
      "https://s3img.vcdn.vn/123phim/2020/09/dong-gia-1k-ve-khi-mua-ve-qua-tix-16010092946804.png",
    name: "ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX",
    link: "https://tix.vn/khuyen-mai/7954-dong-gia-1k-ve-khi-mua-ve-qua-tix",
    description:
      "ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX. Hành trình tìm Ròm và Phúc chỉ với 1k cả tuần + nhận thêm 02 voucher khi đặt vé qua TIX.",
  },
  {
    img:
      "https://s3img.vcdn.vn/123phim/2020/07/bhd-star-ve-chi-59-000d-ca-tuan-15937622264546.jpg",
    name: "BHD STAR VÉ CHỈ 59.000Đ CẢ TUẦN!",
    link: "https://tix.vn/khuyen-mai/7919-bhd-star-ve-chi-59-000d-ca-tuan",
    description:
      "Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên TIX và thanh toán bằng ZaloPay hoặc Mục Vé Phim trên ZaloPay.",
  },
  {
    img:
      "https://s3img.vcdn.vn/123phim/2020/05/beta-cineplex-tro-lai-voi-hang-loat-uu-dai-lon-15889409277632.png",
    name: "Beta Cineplex trở lại với hàng loạt ưu đãi lớn",
    link:
      "https://tix.vn/khuyen-mai/7908-beta-cineplex-tro-lai-voi-hang-loat-uu-dai-lon",
    description:
      "Từ thứ 7 tuần này (9/5), toàn bộ các rạp Beta Cinemas trên toàn quốc sẽ mở cửa trở lại. Mừng ngày trở lại, hàng loạt khuyến mại KHỦNG đổ bộ ",
  },
  {
    img:
      "https://s3img.vcdn.vn/123phim/2019/11/123phim-thu-6-khong-den-toi-uu-dai-huy-diet-11k-ve-anh-trai-yeu-quai-15746757294099.jpg",
    name:
      "[123Phim] Thứ 6 Không Đen Tối - Ưu đãi huỷ diệt 11k/vé Anh Trai Yêu Quái",
    link:
      "https://tix.vn/khuyen-mai/7806-123phim-thu-6-khong-den-toi-uu-dai-huy-diet-11k-ve-anh-trai-yeu-quai",
  },
  {
    img:
      "https://s3img.vcdn.vn/123phim/2019/11/123phim-nhap-ma-psm30k-giam-ngay-30k-khi-dat-ve-phap-su-mu-ai-chet-gio-tay-15729439018211.jpg",
    name:
      "[123Phim] NHẬP MÃ 'PSM30K' - Giảm ngay 30k khi đặt vé Pháp Sư Mù: Ai Chết Giơ Tay",
    link:
      "https://tix.vn/khuyen-mai/7801-123phim-nhap-ma-psm30k-giam-ngay-30k-khi-dat-ve-phap-su-mu-ai-chet-gio-tay",
  },
  {
    img:
      "https://s3img.vcdn.vn/123phim/2019/10/mega-gs-mot-doa-hoa-thay-ngan-loi-yeu-15713106082164.jpg",
    name: "[Mega GS] Một đoá hoa thay ngàn lời yêu",
    link:
      "https://tix.vn/khuyen-mai/7792-mega-gs-mot-doa-hoa-thay-ngan-loi-yeu",
  },
  {
    img:
      "https://s3img.vcdn.vn/123phim/2019/10/123phim-nhap-ma-bkt-giam-ngay-20k-khi-dat-ve-bac-kim-thang-15712976629297.jpg",
    name: "[123Phim] NHẬP MÃ 'BKT' - Giảm ngay 20k khi đặt vé Bắc Kim Thang",
    link:
      "https://tix.vn/khuyen-mai/7790-123phim-nhap-ma-bkt-giam-ngay-20k-khi-dat-ve-bac-kim-thang",
  },
];
const arrLinkPage = [
  "https://zingnews.vn/phim-chieu-rap.html",
  "https://ghienreview.com/category/review-phim/",
];

const News = (props) => {
  const classes = Style(props);
  const [tab, setTab] = useState(0);
  const [arrData, setArrData] = useState(arrNews);
  const [linkPage, setLinkPage] = useState(arrLinkPage[0]);

  const handleSetTab = useCallback(
    (num) => {
      setTab(num);
      switch (num) {
        case 0: {
          setArrData(arrNews);
          setLinkPage(arrLinkPage[num]);
          break;
        }
        case 1: {
          setArrData(arrReview);
          setLinkPage(arrLinkPage[num]);
          break;
        }
        case 2: {
          setArrData(arrSale);
          break;
        }
        default: {
          return;
        }
      }
    },
    [setTab]
  );

  const renderNews = (arr) => {
    return arr?.slice(0, 5).map((e, i) => {
      if (i === 0 || i === 1) {
        return (
          <Grid item md={6} sm={6} key={i}>
            <NewItem data={e} />
          </Grid>
        );
      }
      if (i === 2 || i === 3) {
        return (
          <Grid item md={4} sm={4} key={i}>
            <NewItem data={e} />
          </Grid>
        );
      }
      if (i === 4) {
        return (
          <Grid
            key={i}
            item
            md={4}
            sm={4}
            className={classes.newsItemListContainer}
          >
            {arr?.slice(4, 8).map((e2, i2) => {
              return (
                <Box key={i2} className={classes.newsItemList}>
                  <Link href={e2.link} target="_blank">
                    <img src={e2.img} alt="news" />
                  </Link>
                  <Link href={e2.link} target="_blank">
                    <Typography component="p">{e2.name}</Typography>
                  </Link>
                </Box>
              );
            })}
          </Grid>
        );
      }
      return null;
    });
  };

  return (
    <Container disableGutters maxWidth="md" className={classes.newsContainer}>
      <Box className={classes.boxTitle} mb={2}>
        <Box
          className={tab === 0 ? classes.title : classes.subTitle}
          onClick={() => handleSetTab(0)}
        >
          <Typography variant="h4" component="h4">
            Tin tức
          </Typography>
        </Box>
        <Box
          className={tab === 1 ? classes.title : classes.subTitle}
          onClick={() => handleSetTab(1)}
        >
          <Typography variant="h4" component="h4">
            Review
          </Typography>
        </Box>
        <Box
          className={tab === 2 ? classes.title : classes.subTitle}
          onClick={() => handleSetTab(2)}
        >
          <Typography variant="h4" component="h4">
            Khuyến mãi
          </Typography>
        </Box>
      </Box>
      <Box>
        <Grid container spacing={2}>
          {renderNews(arrData)}
        </Grid>
        {tab === 2 ? (
          <Box mt={8}></Box>
        ) : (
          <Box className={classes.btnViewMore}>
            <Link href={linkPage} target="_blank">
              XEM THÊM
            </Link>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default News;
