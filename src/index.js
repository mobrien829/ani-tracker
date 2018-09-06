import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import manageShows from "./reducers/manageShows";
import registerServiceWorker from "./registerServiceWorker";

import createHistory from "history/createBrowserHistory";
import "semantic-ui-css/semantic.min.css";
const history = createHistory();

const store = createStore(
  manageShows,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log("state", store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
