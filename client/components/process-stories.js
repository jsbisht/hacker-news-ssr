import { HIDDEN_ITEM_KEY, UPVOTE_ITEM_KEY } from "../utility/constants";

export default function processStories(stories) {
  const hiddenStories = localStorage.getItem(HIDDEN_ITEM_KEY);
  const upvotedStories = localStorage.getItem(UPVOTE_ITEM_KEY);
  let list = stories.hits;

  if (hiddenStories) {
    list = list.filter(
      (story) => hiddenStories.split(",").indexOf(story.objectID) < 0
    );
  }
  if (upvotedStories) {
    list = list.map((story) =>
      upvotedStories.split(",").indexOf(story.objectID)
        ? { ...story, points: story.points + 1 }
        : story
    );
  }
  return list;
}
