import React from "react";
import ReactDOM from "react-dom";
import StoriesList from "./components/stories-list";
import getStories from "../server/services/home/stories-list";

import "./index.scss";

async function getHomePage() {
  const stories = await getStories();
  return ReactDOM.hydrate(
    <StoriesList stories={stories.hits} />,
    document.getElementById("root")
  );
}

export default getHomePage;
