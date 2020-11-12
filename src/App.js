import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/Signup";
import DetailPages from "./pages/Detail";
import { SET_TOKEN } from "./redux/actions/actionContants";
import CheckOut from "./pages/CheckOut";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("accessToken"))) {
      dispatch({
        type: SET_TOKEN,
        payload: JSON.parse(localStorage.getItem("accessToken")),
      });
    }
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/profile" component={Profile} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/checkout" component={CheckOut} />
        <Route path="/detail/:id" component={DetailPages} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
