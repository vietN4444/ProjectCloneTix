import {
  CLEAR_MOVIE_LIST,
  GET_MOVIE_BOXBOOKING,
  GET_MOVIE_INCOMING,
  GET_MOVIE_LIST,
  GET_PAGES,
  SET_MOVIE_SEARCH,
  SET_TRAILER,
} from "../actions/actionContants";

let initialState = {
  pages: 0,
  // movieList: [],
  movieSearch: [],
  trailer: "",
  movieListIncoming: [],
  movieBoxBooking: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PAGES: {
      return { ...state, pages: payload };
    }

    // case GET_MOVIE_LIST: {
    //   const newMovieList = [...state.movieList, payload];
    //   return { ...state, movieList: newMovieList };
    // }
    case SET_TRAILER: {
      return { ...state, trailer: payload };
    }
    case SET_MOVIE_SEARCH: {
      return { ...state, movieSearch: payload };
    }
    case GET_MOVIE_INCOMING: {
      const newMovieList = [...state.movieListIncoming, payload];
      return { ...state, movieListIncoming: newMovieList };
    }
    case CLEAR_MOVIE_LIST: {
      return { ...state, movieList: [] };
    }
    case GET_MOVIE_BOXBOOKING: {
      return { ...state, movieBoxBooking: payload };
    }
    default:
      return state;
  }
};

export default reducer;
