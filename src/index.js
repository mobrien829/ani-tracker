import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import manageShows from "./reducers/manageShows";
import registerServiceWorker from "./registerServiceWorker";
import "semantic-ui-css/semantic.min.css";

const store = createStore(manageShows);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
