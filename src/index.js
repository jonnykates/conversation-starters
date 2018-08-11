import React from "react";
import ReactDOM from "react-dom";
import Router from "./Router";
import registerServiceWorker from "./registerServiceWorker";
import "./styles/main.css";

ReactDOM.render(<Router />, document.getElementById("root"));
registerServiceWorker();
