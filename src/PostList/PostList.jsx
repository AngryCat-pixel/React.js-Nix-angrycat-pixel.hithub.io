import React from "react";
import PostItem from "../PostItem/PostItem";
import "./PostList.css";

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <div className="not__posts">Посты не найдены!</div>;
  }
  return (
    <div>
      <h1>{title}</h1>
      {posts.map((post, index) => (
        <PostItem
          remove={remove}
          number={index + 1}
          post={post}
          key={post.id}
        />
      ))}
    </div>
  );
};

export default PostList;
