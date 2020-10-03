import { SET_MODAL_STATUS } from "../actions/actionContants";

let initialState = {
  modal: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_MODAL_STATUS: {
      return { ...state, modal: !state.modal };
    }
    default:
      return state;
  }
};

export default reducer;
