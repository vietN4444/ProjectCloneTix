import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import movieReducer from "./redux/movieReducer";
import statusReducer from "./redux/statusReducer";
import dashboardReducer from "./redux/dashboardReducer";
import profileReducer from "./redux/profileReducer";
import authReducer from "./redux/authReducer";
import cinemaReducer from "./redux/cinemaReducer";
import commentsReducer from "./redux/commentsReducer";

const rootReducer = combineReducers({
  //State
  movie: movieReducer,
  status: statusReducer,
  dashboard: dashboardReducer,
  profile: profileReducer,
  auth: authReducer,
  cinema: cinemaReducer,
  comments: commentsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
