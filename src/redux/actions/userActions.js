import connector from "../../config/restConnector";
import {
  SET_TOKEN,
  GET_USER_DETAIL,
  CHANGE_USER_INFORMATION,
} from "./actionContants";

export const signIn = (user, history, funcAlertError) => {
  return (dispatch) => {
    connector({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: user,
    })
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: SET_TOKEN,
          payload: res.data,
        });
        localStorage.setItem(
          "accessToken",
          JSON.stringify({
            taiKhoan: res.data.taiKhoan,
            accessToken: res.data.accessToken,
            maLoaiNguoiDung: res.data.maLoaiNguoiDung,
          })
        );
        history.replace("/");
      })
      .catch((err) => {
        funcAlertError(err.response.data);
        console.log(err);
      });
  };
};

export const signUp = (user, funcAlertSubmit, funcAlertError) => {
  return (dispatch) => {
    connector({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      method: "POST",
      data: user,
    })
      .then((res) => {
        funcAlertSubmit();
        console.log(res.data);
      })
      .catch((err) => {
        funcAlertError(err.response.data);
        console.log(err.response);
      });
  };
};

export const userDetail = (userName) => {
  return (dispatch) => {
    connector({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
      method: "POST",
      data: userName,
    })
      .then((res) => {
        dispatch({
          type: GET_USER_DETAIL,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const changeUserInformation = (user) => {
  return (dispatch) => {
    connector({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      method: "PUT",
      data: user,
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
