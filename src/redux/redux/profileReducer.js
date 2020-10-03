import { SET_TITLE_PROFILE } from "../actions/actionContants";

let initialState = { title: "Thông tin cá nhân" };

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TITLE_PROFILE: {
      return { ...state, title: payload };
    }
    default:
      return state;
  }
};

export default reducer;
