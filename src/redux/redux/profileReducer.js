import { GET_USER_DETAIL } from "../actions/actionContants";

let initialState = {
  userDetail: {},
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_DETAIL: {
      return {
        ...state,
        userDetail: payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
