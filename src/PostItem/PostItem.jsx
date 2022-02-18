import React from "react";
import "./PostItem.css";

const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post__content">
        <h2>
          {props.number}. {props.post.title}
        </h2>
        <div className="description__post">{props.post.body}</div>
      </div>
      <div className="post__btn"></div>
      <button onClick={() => props.remove(props.post)}>Delete</button>
    </div>
  );
};

export default PostItem;
