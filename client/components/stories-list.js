import React, { useState } from "react";
import getDomainName from "../utility/url";
import getDateStr from "../utility/date";
import { onStoryHide, onUpVote } from "../utility/storage";

function StoriesList(props) {
  const { stories } = props;
  return (
    <div className="stories-list">
      <ul className="stories-list--wrapper">
        {stories.map((story) => {
          return <StoryListItem story={story} />;
        })}
        {<StoryListItem story={null} />}
      </ul>
    </div>
  );
}

function StoryListItem(props) {
  /* Use props update instead of setting local state to story state */
  const [isHidden, setIsHidden] = useState(false);
  const [isUpvoted, setIsUpvoted] = useState(false);

  if (!isHidden && props.story) {
    const story = props.story;
    const { num_comments, points, title, url, author, created_at_i } = story;
    return (
      <li className="stories-list--item" key={story.objectID}>
        <span className="story-comment-count">{num_comments}</span>
        <span className="story-upvotes">{isUpvoted ? points + 1 : points}</span>
        <span
          className={`story-upvote-btn ${isUpvoted ? "upvoted" : ""}`}
          onClick={() => {
            onUpVote(story);
            setIsUpvoted(true);
          }}
        >
          &#x25B2;
        </span>
        <span className="story-title">{title}</span>
        <span className="story-link">
          <a href={url} target="_blank">
            <span className="light-grey">(</span>
            {getDomainName(url)}
            <span className="light-grey">)</span>
          </a>
        </span>
        <span className="story-author">
          <span className="light-grey">by</span> {author}
        </span>
        <span className="story-created-at">{getDateStr(created_at_i)}</span>
        <span
          className="story-hide-btn"
          onClick={() => {
            onStoryHide(story);
            setIsHidden(true);
          }}
        >
          <span className="light-grey">[</span>
          <span className="text">hide</span>
          <span className="light-grey">]</span>
        </span>
      </li>
    );
  }
  if (props.story === null) {
    return (
      <li className="stories-list--item" key={12345}>
        <span className="story-comment-count"></span>
        <span className="story-upvotes"></span>
        <span className="story-upvote-btn hidden">&#x25B2;</span>
        <span className="story-title more-text">More</span>
      </li>
    );
  }
  return null;
}

export default StoriesList;
