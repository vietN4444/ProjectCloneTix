import connector from "../../config/restConnector";
import {
  GET_CINEMA_BOXBOOKING,
  GET_CINEMA_CHECKOUT,
  GET_INFORMATION_CINEMA,
  GET_SCHEDULES_CINEMA,
} from "./actionContants";

export const getCinemaInformation = () => {
  return (dispatch) => {
    connector({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
      method: "GET",
    })
      .then((res) => {
        // console.log(res.data);
        dispatch({
          type: GET_INFORMATION_CINEMA,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getCinemaSchedules = (name) => {
  return (dispatch) => {
    connector({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${name}&maNhom=GP03`,
      method: "GET",
    })
      .then((res) => {
        dispatch({
          type: GET_SCHEDULES_CINEMA,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getCinemaByMovie = (nameMovie) => {
  return (dispatch) => {
    connector({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${nameMovie}
`,
      method: "GET",
    })
      .then((res) => {
        let arrData = [];
        res.data.heThongRapChieu.forEach((ele, i) => {
          arrData = arrData.concat(ele.cumRapChieu);
        });
        dispatch({
          type: GET_CINEMA_BOXBOOKING,
          payload: arrData,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getCinemaCheckout = (id) => {
  return (dispatch) => {
    connector({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`,
      method: "GET",
    })
      .then((res) => {
        dispatch({
          type: GET_CINEMA_CHECKOUT,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const bookedTicket = (alert, dataTicket) => {
  return (dispatch) => {
    connector({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
      method: "POST",
      data: dataTicket,
    })
      .then((res) => {
        // console.log(res.data);
        alert();
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getCinemaInformationItem = (id) => {
  return (dispatch) => {
    return connector({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${id}`,
      method: "GET",
    })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
};
