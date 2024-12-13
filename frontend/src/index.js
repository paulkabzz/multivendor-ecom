import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import Store from "./redux/store";
import NextProvider from "./NextProvider";

// Replace ReactDOM.render with createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render your app inside the root
root.render(
  <NextProvider>
    <Provider store={Store}>
      <App />
    </Provider>
  </NextProvider>,
);

reportWebVitals();
