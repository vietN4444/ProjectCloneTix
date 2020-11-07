import {
  SET_MODAL_TRAILER,
  SET_MODAL_COMMENTS,
} from "../actions/actionContants";

let initialState = {
  modalTrailer: false,
  modalComments: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_MODAL_TRAILER: {
      return { ...state, modalTrailer: !state.modalTrailer };
    }
    case SET_MODAL_COMMENTS: {
      return { ...state, modalComments: !state.modalComments };
    }
    default:
      return state;
  }
};

export default reducer;
