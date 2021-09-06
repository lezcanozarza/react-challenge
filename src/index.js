import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Theme } from "./services/Theme.js";
import { GlobalStyle } from "./styles/styled_global_style.js";

ReactDOM.render(
  <React.StrictMode>
    <Theme>
      <GlobalStyle />
      <App />
    </Theme>
  </React.StrictMode>,
  document.getElementById("root")
);
