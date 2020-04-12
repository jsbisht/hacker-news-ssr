import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../../../client/App";

export const template = `<div id="root">${ReactDOMServer.renderToString(
  <App />
)}</div>`;
