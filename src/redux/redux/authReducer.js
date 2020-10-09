import { REMOVE_TOKEN, SET_TOKEN } from "../actions/actionContants";

let initialState = {
  token: "",
  userName: "",
  UAC: "",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TOKEN: {
      return {
        ...state,
        token: payload.accessToken,
        userName: payload.taiKhoan,
        UAC: payload.maLoaiNguoiDung,
      };
    }
    case REMOVE_TOKEN: {
      return { ...state, token: "", userName: "", UAC: "" };
    }
    default:
      return state;
  }
};

export default reducer;
