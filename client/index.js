import React from "react";
import ReactDOM from "react-dom";
import StoriesList from "./components/stories-list";

import "./index.scss";
import "./components/stories-list.scss";
import processStories from "./components/process-stories";

function loadHomePage() {
  const { stories } = window.__INITIAL__DATA__;
  const filteredList = processStories(stories);
  return ReactDOM.hydrate(
    <StoriesList stories={filteredList} />,
    document.getElementById("root")
  );
}

loadHomePage();
