import React, { useMemo } from "react";
import { useState } from "react";
import PostList from "./PostList/PostList";
import PostForm from "./PostForm/PostForm";
import "./App.css";
import PostFilter from "./PostFilter/PostFilter";

function App() {
  const [posts, setPosts] = useState([
    { id: "1", title: "Python", body: "Programming language Python" },
    { id: "2", title: "JavaScript", body: "Programming language JavaScript" },
    { id: "3", title: "С#", body: "Programming language С#" },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPosts]);

  return (
    <div className="App">
      <PostForm create={createPost} />
      <div className="wrap">
        <PostFilter filter={filter} setFilter={setFilter} />
      </div>
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Posts about JavaScript"
      />
    </div>
  );
}

export default App;
