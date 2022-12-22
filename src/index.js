import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Apxor from "apxor";
import CE from "apxor-qe";
import ApxorRTM from "apxor-rtm";
import { BrowserRouter } from "react-router-dom";

Apxor.init(
  "cfd1eb74-b691-4971-96a3-113d77df9dc5",
  {
    plugins: ["ApxorRTM"],
    deps: [ApxorRTM, CE],
    version: "0.1",
  },
  (e) => console.log("Successfully Initialized Apxor SDK:", e),
  (e) => console.log("Apxor SDK Initialization failed:", e)
); //Initializing Apxor

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
