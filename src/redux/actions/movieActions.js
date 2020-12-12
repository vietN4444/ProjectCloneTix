import connector from "../../config/restConnector";
import {
  GET_MOVIE_BOXBOOKING,
  GET_MOVIE_INCOMING,
  GET_MOVIE_LIST,
  GET_PAGES,
  SET_MOVIE_SEARCH,
} from "./actionContants";

import {
  getMovieByNameDashBoard,
  getMoviePageDashBoard,
} from "./managementActions";

const textAlert = {
  delete: [
    "Phim đã xoá khỏi hệ thống",
    "Phim không thể xoá vì đã lên lịch chiếu",
  ],
  changeInfo: [
    "Phim đã update thông tin mới",
    "Phim không thể update thông tin, vui lòng thêm hình ảnh",
  ],
};

export const getMovieList = () => {
  return (dispatch) => {
    connector({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03",
      method: "GET",
    })
      .then((res) => {
        // console.log(res.data);
        dispatch({
          type: GET_MOVIE_BOXBOOKING,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getMovieListCount = (num, page, dispatchType = 0) => {
  return (dispatch) => {
    return connector({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP03&soTrang=${page}&soPhanTuTrenTrang=${num}`,
      method: "GET",
    })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getPages = (id) => {
  return (dispatch) => {
    connector({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP03&soTrang=${id}&soPhanTuTrenTrang=8`,
      method: "GET",
    })
      .then((res) => {
        // console.log(res.data);
        dispatch({
          type: GET_PAGES,
          payload: res.data.totalPages,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getMovieListByPage = (id, dispatchType = 0) => {
  return (dispatch) => {
    connector({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP03&soTrang=${id}&soPhanTuTrenTrang=8`,
      method: "GET",
    })
      .then((res) => {
        if (dispatchType === 0) {
          dispatch({
            type: GET_MOVIE_LIST,
            payload: res.data,
          });
        }
        if (dispatchType !== 0) {
          // console.log(res.data);
          dispatch({
            type: GET_MOVIE_INCOMING,
            payload: res.data,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getMovieByName = (name) => {
  return (dispatch) => {
    connector({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03&tenPhim=${name}`,
      method: "GET",
    })
      .then((res) => {
        dispatch({
          type: SET_MOVIE_SEARCH,
          payload: res.data,
        });
      })
      .catch((err) => {
        // console.log(err);
      });
  };
};

export const updateMovie = (
  movieUpdate,
  id,
  num,
  movieSearched,
  alertSuccess,
  alertError
) => {
  return (dispatch) => {
    connector({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhimUpload",
      method: "POST",
      data: movieUpdate,
    })
      .then((res) => {
        dispatch(getMoviePageDashBoard(id, num));
        dispatch(getMovieByNameDashBoard(id, num, movieSearched));
        alertSuccess(textAlert.changeInfo[0], 1);
      })
      .catch((err) => {
        alertError(err.response.data);
        // console.log(err.response);
      });
  };
};

export const updateMovieNochangeImg = (
  movieUpdate,
  id,
  num,
  movieSearched,
  alertSuccess,
  alertError
) => {
  return (dispatch) => {
    connector({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhim",
      method: "POST",
      data: movieUpdate,
    })
      .then((res) => {
        // console.log(res.data);
        // console.log("Thanh cong");
        dispatch(getMoviePageDashBoard(id, num));
        dispatch(getMovieByNameDashBoard(id, num, movieSearched));
        alertSuccess(textAlert.changeInfo[0], 1);
      })
      .catch((err) => {
        alertError(err.response.data);
        // console.log(err.response.data);
      });
  };
};

export const deleteMovie = (
  maPhim,
  alertMovieDeleteSuccess,
  alertMovieDeleteError
) => {
  return (dispatch) => {
    connector({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
      method: "DELETE",
    })
      .then((res) => {
        alertMovieDeleteSuccess(textAlert.delete[0]);
      })
      .catch((err) => {
        alertMovieDeleteError(textAlert.delete[1]);
      });
  };
};

export const getDetailMovie = (maPhim) => {
  return (dispatch) => {
    return connector({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
      method: "GET",
    })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addMovie = (fromData, alertSuccess, alertError, resetForm) => {
  return (dispatch) => {
    connector({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh",
      method: "POST",
      data: fromData,
    })
      .then((res) => {
        alertSuccess();
        resetForm();
      })
      .catch((err) => {
        alertError(err.response.data);
        // console.log(err);
        // console.log(err.response.data);
        // console.log(err.response.config.data);
      });
  };
};

export const addSchedules = (schedules, alertSuccess) => {
  return (dispatch) => {
    connector({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/TaoLichChieu",
      method: "POST",
      data: schedules,
    })
      .then((res) => {
        // console.log(res);
        alertSuccess(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
};
