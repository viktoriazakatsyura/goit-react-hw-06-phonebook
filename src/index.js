import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import phonebookStore from "./redux/phonebook/pnonebook-store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={phonebookStore.store}>
      <PersistGate loading={null} persistor={phonebookStore.persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
