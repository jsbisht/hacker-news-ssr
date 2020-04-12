import fetch from "node-fetch";

import { STORIES_API } from "../../utility/constants";

async function getStories() {
  const response = await fetch(STORIES_API);
  const stories = await response.json();
  return stories;
}

export default getStories;
