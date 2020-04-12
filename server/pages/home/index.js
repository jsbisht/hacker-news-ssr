import React from "react";
import ReactDOMServer from "react-dom/server";
import StoriesList from "../../../client/components/stories-list";
import getStories from "../../services/home/stories-list";

async function getHomePage() {
  const stories = await getStories();
  return ReactDOMServer.renderToString(<StoriesList stories={stories.hits} />);
}

export default getHomePage;
