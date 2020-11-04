import {
  DELETE_CINEMA_DATA,
  GET_CINEMA_BOXBOOKING,
  GET_INFORMATION_CINEMA,
  GET_SCHEDULES_CINEMA,
} from "../actions/actionContants";

let initialState = {
  cinemaList: [],
  cinemaSchedules: [],
  cinemaBooking: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_INFORMATION_CINEMA: {
      return { ...state, cinemaList: payload };
    }
    case GET_SCHEDULES_CINEMA: {
      const cloneArr = [...state.cinemaSchedules];
      cloneArr.push(payload);
      return { ...state, cinemaSchedules: cloneArr };
    }
    case GET_CINEMA_BOXBOOKING: {
      return { ...state, cinemaBooking: payload };
    }
    case DELETE_CINEMA_DATA: {
      return { ...state, cinemaList: [], cinemaSchedules: [] };
    }
    default:
      return state;
  }
};

export default reducer;
