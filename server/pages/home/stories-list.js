import React from "react";

function StoriesList(props) {
  const { stories } = props;
  return (
    <div className="stories-list">
      <ul className="stories-list--wrapper">
        {stories.map((story) => {
          return (
            <li className="stories-list--item" key={story.objectID}>
              <StoryListItem story={story} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function StoryListItem(props) {
  const { story } = props;
  const { num_comments, points, title, url, author, created_at_i } = story;
  return (
    <>
      <span className="story-comment-count">{num_comments}</span>
      <span className="story-upvotes">{points}</span>
      <span className="story-upvote-btn"></span>
      <span className="story-title">{title}</span>
      <span className="story-link">({url})</span>
      <span className="story-author">by {author}</span>
      <span className="story-created-at">posted at {created_at_i}</span>
      <span className="story-hide-btn">[hide]</span>
    </>
  );
}

export default StoriesList;
