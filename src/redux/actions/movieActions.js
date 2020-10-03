import connector from "../../config/restConnector";
import { GET_MOVIE_LIST, GET_PAGES, SET_MOVIE_SEARCH } from "./actionContants";

export const getPages = (id) => {
  return (dispatch) => {
    connector({
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP03&soTrang=${id}&soPhanTuTrenTrang=8`,
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
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP03&soTrang=${id}&soPhanTuTrenTrang=8`,
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
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP03&tenPhim=${name}&soTrang=1&soPhanTuTrenTrang=8`,
      method: "GET",
    })
      .then((res) => {
        dispatch({
          type: SET_MOVIE_SEARCH,
          payload: res.data.items,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
