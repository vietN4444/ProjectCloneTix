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
  alertFullTicket: false,
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
    case "REMOVE_TICKET_BOOKINGG": {
      const cloneArr = [...state.cinemaCheckoutBookingTicket];
      const seatArr = [...state.cinemaSeatBooking];
      const arrTwo = seatArr.pop();
      const pricePop = cloneArr.pop();

      let price = state.cinemaPriceTicket - pricePop.giaVe;
      return {
        ...state,
        cinemaCheckoutBookingTicket: cloneArr,
        cinemaPriceTicket: price,
        cinemaSeatBooking: seatArr,
        alertFullTicket: false,
      };
    }
    case "REMOVE_TICKET_BOOKING": {
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
      }
      if (indexSeat !== -1) {
        seatArr.splice(index, 1);
      }
      return {
        ...state,
        cinemaCheckoutBookingTicket: cloneArr,
        cinemaPriceTicket: price,
        cinemaSeatBooking: seatArr,
      };
    }
    case SET_TICKET_BOOKING: {
      const cloneArr = [...state.cinemaCheckoutBookingTicket];
      const seatArr = [...state.cinemaSeatBooking];
      let price = state.cinemaPriceTicket;
      let auth = false;
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

      if (cloneArr.length > 6 && seatArr.length > 6) {
        auth = true;
      }
      return {
        ...state,
        cinemaCheckoutBookingTicket: cloneArr,
        cinemaPriceTicket: price,
        cinemaSeatBooking: seatArr,
        alertFullTicket: auth,
      };
    }
    default:
      return state;
  }
};

export default reducer;
