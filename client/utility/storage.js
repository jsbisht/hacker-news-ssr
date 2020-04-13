import { UPVOTE_ITEM_KEY, HIDDEN_ITEM_KEY } from "./constants";

export function onUpVote(story) {
  if (localStorage) {
    const upvotedItems = localStorage.getItem(UPVOTE_ITEM_KEY);
    localStorage.setItem(
      UPVOTE_ITEM_KEY,
      upvotedItems
        ? [upvotedItems.split(","), story.objectID]
        : [story.objectID]
    );
  }
}

export function onStoryHide(story) {
  if (localStorage) {
    const hiddenItems = localStorage.getItem(HIDDEN_ITEM_KEY);
    localStorage.setItem(
      HIDDEN_ITEM_KEY,
      hiddenItems ? [hiddenItems.split(","), story.objectID] : [story.objectID]
    );
  }
}
