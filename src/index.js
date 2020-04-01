import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import HttpsRedirect from "react-https-redirect";
import * as serverWorker from "./serviceWorker";

ReactDOM.render(
  <HttpsRedirect>
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </HttpsRedirect>,
  document.getElementById("root")
);

serverWorker.register();
