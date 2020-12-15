import connector from "../../config/restConnector";
import { SET_TOKEN, GET_USER_DETAIL } from "./actionContants";
import { getUserList, getUserListByName } from "./managementActions";

const textAlert = {
  delete: ["Tài khoản đã xoá khỏi hệ thống", "Tài khoản không thể xoá."],
  changeInfo: [
    "Tài khoản đã update thông tin mới",
    "Tài khoản không thể update thông tin, vui lòng thêm hình ảnh",
  ],
};

export const signIn = (user, history, funcAlertError) => {
  return (dispatch) => {
    connector({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: user,
    })
      .then((res) => {
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
        history.push("/");
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
        // console.log(res.data);
      })
      .catch((err) => {
        funcAlertError(err.response.data);
        // console.log(err.response);
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

export const changeUserInformation = (user, alertChangeInfo, alertError) => {
  console.log(user);
  return (dispatch) => {
    connector({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      method: "PUT",
      data: user,
    })
      .then((res) => {
        alertChangeInfo();
        // console.log(res.data);
      })
      .catch((err) => {
        alertError(err.response.data);
        // console.log(err);
        // console.log(err.response.data);
      });
  };
};

export const deleteUser = (idUser, alertSuccess, alertError) => {
  return (dispatch) => {
    connector({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${idUser}`,
      method: "DELETE",
    })
      .then((res) => {
        // console.log(res.data);
        alertSuccess(textAlert.delete[0]);
      })
      .catch((err) => {
        console.log(err.response.data);
        alertError(textAlert.delete[1]);
      });
  };
};

export const updateUser = (
  user,
  id,
  num,
  userName,
  alertSuccess,
  alertError
) => {
  return (dispatch) => {
    connector({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      method: "PUT",
      data: user,
    })
      .then((res) => {
        dispatch(getUserListByName(id, num, userName));
        dispatch(getUserList(id, num));
        alertSuccess(textAlert.changeInfo[0], 1);
      })
      .catch((err) => {
        alertError(textAlert.changeInfo[1]);
      });
  };
};

export const addUser = (user, alertSuccess, alertError, resetForm) => {
  return (dispatch) => {
    connector({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
      method: "POST",
      data: user,
    })
      .then((res) => {
        alertSuccess();
        resetForm();
      })
      .catch((err) => {
        alertError(err.response.data);
      });
  };
};
