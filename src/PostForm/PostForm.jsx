import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./PostForm.css";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });
  const addNewPost = (event) => {
    event.preventDefault();
    const newPost = {
      ...post,
      id: uuidv4(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };
  return (
    <form>
      <input
        value={post.title}
        onChange={(event) => setPost({ ...post, title: event.target.value })}
        type="text"
        placeholder="Enter title post"
      />
      <input
        value={post.body}
        onChange={(event) => setPost({ ...post, body: event.target.value })}
        type="text"
        placeholder="Enter description post"
      />
      <button onClick={addNewPost}>Add post</button>
    </form>
  );
};

export default PostForm;
