import { REMOVE_TOKEN, SET_TOKEN } from "../actions/actionContants";

let initialState = {
  token: "",
  userName: "",
  userAC: "",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TOKEN: {
      return {
        ...state,
        token: payload.accessToken,
        userName: payload.taiKhoan,
        userAC: payload.maLoaiNguoiDung,
      };
    }
    case REMOVE_TOKEN: {
      return { ...state, token: "", userName: "", userAC: "" };
    }

    default:
      return state;
  }
};

export default reducer;
