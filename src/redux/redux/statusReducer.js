import {
  SET_MODAL_TRAILER,
  SET_MODAL_COMMENTS,
  SET_MODAL_COMBO,
} from "../actions/actionContants";

let initialState = {
  modalTrailer: false,
  modalComments: false,
  modalCombo: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_MODAL_TRAILER: {
      return { ...state, modalTrailer: !state.modalTrailer };
    }
    case SET_MODAL_COMMENTS: {
      return { ...state, modalComments: !state.modalComments };
    }
    case SET_MODAL_COMBO: {
      return { ...state, modalCombo: !state.modalCombo };
    }
    default:
      return state;
  }
};

export default reducer;
