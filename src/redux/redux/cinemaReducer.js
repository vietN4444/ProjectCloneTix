import {
  DELETE_CINEMA_DATA,
  GET_CINEMA_BOXBOOKING,
  GET_CINEMA_CHECKOUT,
  GET_INFORMATION_CINEMA,
  GET_SCHEDULES_CINEMA,
  SET_TICKET_BOOKING,
} from "../actions/actionContants";

let initialState = {
  cinemaList: [],
  cinemaSchedules: [],
  cinemaBooking: [],
  cinemaCheckoutInfo: [],
  cinemaCheckoutSeat: [],
  cinemaCheckoutBookingTicket: [],
  cinemaSeatBooking: [],
  cinemaPriceTicket: 0,
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
    case GET_CINEMA_CHECKOUT: {
      return {
        ...state,
        cinemaCheckoutInfo: payload.thongTinPhim,
        cinemaCheckoutSeat: payload.danhSachGhe,
      };
    }
    case SET_TICKET_BOOKING: {
      const cloneArr = [...state.cinemaCheckoutBookingTicket];
      const seatArr = [...state.cinemaSeatBooking];
      let price = state.cinemaPriceTicket;
      const index = cloneArr.findIndex(
        (ele) => ele.maGhe === payload.arr.maGhe
      );
      const indexSeat = seatArr.findIndex((ele) => ele === payload.tenGhe);
      if (index !== -1) {
        cloneArr.splice(index, 1);
        price -= payload.arr.giaVe;
      } else {
        cloneArr.push(payload.arr);
        price += payload.arr.giaVe;
      }
      if (indexSeat !== -1) {
        seatArr.splice(index, 1);
      } else {
        seatArr.push(payload.tenGhe);
      }
      return {
        ...state,
        cinemaCheckoutBookingTicket: cloneArr,
        cinemaPriceTicket: price,
        cinemaSeatBooking: seatArr,
      };
    }
    default:
      return state;
  }
};

export default reducer;
