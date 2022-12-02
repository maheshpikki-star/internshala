import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Apxor from "apxor";
import CE from "apxor-qe";
import ApxorRTM from "apxor-rtm";
import { BrowserRouter } from "react-router-dom";

Apxor.init("cfd1eb74-b691-4971-96a3-113d77df9dc5", {
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
