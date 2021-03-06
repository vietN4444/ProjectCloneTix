import connector from "../../config/restConnector";
import {
  GET_MOVIE_DASHBOARD,
  GET_MOVIE_SEARCH_DASHBOARD,
  GET_USER_LIST_DASHBOARD,
  GET_USER_SEARCH_DASHBOARD,
} from "./actionContants";

export const getMoviePageDashBoard = (id, num) => {
  return (dispatch) => {
    connector({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP03&soTrang=${id}&soPhanTuTrenTrang=${num}`,
      method: "GET",
    })
      .then((res) => {
        dispatch({
          type: GET_MOVIE_DASHBOARD,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getMovieByNameDashBoard = (id, num, name) => {
  return (dispatch) => {
    connector({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP03&tenPhim=${name}&soTrang=${id}&soPhanTuTrenTrang=${num}`,
      method: "GET",
    })
      .then((res) => {
        dispatch({
          type: GET_MOVIE_SEARCH_DASHBOARD,
          payload: res.data,
        });
      })
      .catch((err) => {
        // console.log(err);
      });
  };
};

export const getUserList = (id, num) => {
  return (dispatch) => {
    connector({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP03&soTrang=${id}&soPhanTuTrenTrang=${num}
`,
      method: "GET",
    })
      .then((res) => {
        // console.log(res.data);
        dispatch({
          type: GET_USER_LIST_DASHBOARD,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getUserListByName = (id, num, name) => {
  return (dispatch) => {
    connector({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP03&tuKhoa=${name}&soTrang=${id}&soPhanTuTrenTrang=${num}`,
      method: "GET",
    })
      .then((res) => {
        // console.log(res.data);
        dispatch({
          type: GET_USER_SEARCH_DASHBOARD,
          payload: res.data,
        });
      })
      .catch((err) => {
        // console.log(err);
      });
  };
};
