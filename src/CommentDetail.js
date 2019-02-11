import React from 'react';

const CommentDetail = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          Taylor
        </a>
        <div className="metadata">
          <span className="date">Today at 6:49PM</span>
        </div>
        <div className="text">Love it!</div>
      </div>
    </div>
  );
};