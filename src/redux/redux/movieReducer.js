import {
  GET_MOVIE_LIST,
  GET_PAGES,
  SET_MOVIE_SEARCH,
  SET_TRAILER,
} from "../actions/actionContants";

let initialState = {
  pages: "",
  movieList: [],
  movieSearch: [],
  trailer: "",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PAGES: {
      return { ...state, pages: payload };
    }
    case GET_MOVIE_LIST: {
      const newMovieList = [...state.movieList, payload];
      return { ...state, movieList: newMovieList };
    }
    case SET_TRAILER: {
      return { ...state, trailer: payload };
    }
    case SET_MOVIE_SEARCH: {
      return { ...state, movieSearch: payload };
    }
    default:
      return state;
  }
};

export default reducer;
