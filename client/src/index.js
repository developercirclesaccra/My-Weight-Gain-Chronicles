import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Match, Miss } from "react-router";
import "./index.css";
// import App from './App';
import registerServiceWorker from "./registerServiceWorker";
import Foods from "./components/Foods";
import App from "./App";
import Jumbotron from "./components/Jumbotron";

const Root = () => {
  return (
    <BrowserRouter>
      <Match exactly pattern="/" component={App} />
    </BrowserRouter>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
