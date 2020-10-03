import {
  GET_MOVIE_DASHBOARD,
  GET_MOVIE_SEARCH_DASHBOARD,
  SET_TITLE_DASHBOARD,
} from "../actions/actionContants";

let initialState = {
  title: "Quản lý Movie",
  totalCount: 0,
  movieList: [],
  movieSearchList: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TITLE_DASHBOARD: {
      return { ...state, title: payload };
    }
    case GET_MOVIE_DASHBOARD: {
      return {
        ...state,
        totalCount: payload.totalCount,
        movieList: payload.items,
      };
    }
    case GET_MOVIE_SEARCH_DASHBOARD: {
      return {
        ...state,
        totalCount: payload.totalCount,
        movieSearchList: payload.items,
      };
    }
    default:
      return state;
  }
};

export default reducer;
