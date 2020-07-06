import "boxicons";
import React from "react";
import ReactDOM from "react-dom";

import { App } from "./containers/pages/App/App";
import { Providers } from "./providers/Providers";
import * as serviceWorker from "./serviceWorker";

import "boxicons/css/boxicons.min.css";
import "./index.css";

const root = document.getElementById("root") as HTMLElement;

ReactDOM.unstable_createRoot(root).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
