import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducer from "../../reducers";
import App from "../App/App";

const store = createStore(reducer, compose(applyMiddleware(thunk)));

function Index() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default Index;
