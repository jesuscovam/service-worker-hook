import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { wrap } from "comlink";

function takeLongTimeToDoSomething() {
  const worker = new Worker("./my-first-worker", {
    name: "my-first-worker",
    type: "module",
  });
  const workerAPI = wrap<import("./my-first-worker").MyFirstWorker>(worker);
  workerAPI.takeLongTimeToDoSomething();
}

console.log("Do something");
takeLongTimeToDoSomething();
console.log("Do another thing");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
