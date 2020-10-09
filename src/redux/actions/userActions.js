import connector from "../../config/restConnector";
import { SET_TOKEN } from "./actionContants";

export const signIn = (user, history) => {
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
        history.replace("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
