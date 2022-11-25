import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Apxor from "apxor";
import CE from "apxor-qe";
import ApxorRTM from "apxor-rtm";
import { BrowserRouter } from "react-router-dom";

Apxor.init("b0bf1fc7-b104-4e92-9cc5-590fcb685c29", {
  plugins: ["ApxorRTM"],
  deps: [ApxorRTM, CE],
  version: "0.1",
}); //Initializing Apxor

Apxor.logEvent("APP_STARTED", {
  timestamp: Date.now(),
});
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
