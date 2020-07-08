import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./../../redux/store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Nav from "./../includes/nav.component";
import { getScores } from "../../redux/actions/authActions";
import "./App.css";

const App = () => {
  useEffect(() => {
    store.dispatch(getScores('year_2014', 'month_10', 'day_29'));
  });
  return (
    <Provider store={store}>
      <Nav />
    </Provider>
  );
};
export default App;
