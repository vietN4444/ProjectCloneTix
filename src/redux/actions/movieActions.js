import connector from "../../config/restConnector";
import { GET_MOVIE_LIST, GET_PAGES, SET_MOVIE_SEARCH } from "./actionContants";
import { getMoviePageDashBoard } from "./managementActions";

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

export const getMovieListByPage = (id) => {
  return (dispatch) => {
    connector({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP03&soTrang=${id}&soPhanTuTrenTrang=8`,
      method: "GET",
    })
      .then((res) => {
        // console.log(res.data);
        dispatch({
          type: GET_MOVIE_LIST,
          payload: res.data,
        });
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
        console.log(err);
      });
  };
};

export const updateMovie = (movieUpdate, id, num) => {
  return (dispatch) => {
    connector({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhimUpload",
      method: "POST",
      data: movieUpdate,
    })
      .then((res) => {
        console.log(res.data);
        console.log("Thanh cong");
        dispatch(getMoviePageDashBoard(id, num));
      })
      .catch((err) => {
        console.log(err);
        console.log("That bai");
      });
  };
};

export const updateMovieNochangeImg = (movieUpdate) => {
  return (dispatch) => {
    connector({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhim",
      method: "POST",
      data: movieUpdate,
    })
      .then((res) => {
        console.log(res.data);
        console.log("Thanh cong");
      })
      .catch((err) => {
        console.log(err);
        console.log("That bai");
      });
  };
};

export const deleteMovie = (maPhim) => {
  return (dispatch) => {
    connector({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
      method: "DELETE",
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err, "Phim đã xếp lịch chiếu không thể xóa");
      });
  };
};
