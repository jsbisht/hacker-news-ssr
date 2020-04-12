import React from "react";
import getDomainName from "../../utility/url";
import getDateStr from "../../utility/date";

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
      <span className="story-upvote-btn">&#x25B2;</span>
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
      <span className="story-hide-btn">
        <span className="light-grey">[</span>
        <span className="text">hide</span>
        <span className="light-grey">]</span>
      </span>
    </>
  );
}

export default StoriesList;
