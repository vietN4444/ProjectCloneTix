import {
  GET_MOVIE_DASHBOARD,
  GET_MOVIE_SEARCH_DASHBOARD,
  GET_USER_LIST_DASHBOARD,
  SET_TITLE_DASHBOARD,
  GET_USER_SEARCH_DASHBOARD,
} from "../actions/actionContants";

let initialState = {
  title: "Quản lý Movie",
  totalCount: 0,
  movieList: [],
  movieSearchList: [],
  userList: [],
  userSearchList: [],
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
    case GET_USER_LIST_DASHBOARD: {
      return {
        ...state,
        totalCount: payload.totalCount,
        userList: payload.items,
      };
    }
    case GET_USER_SEARCH_DASHBOARD: {
      return {
        ...state,
        totalCount: payload.totalCount,
        userSearchList: payload.items,
      };
    }
    default:
      return state;
  }
};

export default reducer;
