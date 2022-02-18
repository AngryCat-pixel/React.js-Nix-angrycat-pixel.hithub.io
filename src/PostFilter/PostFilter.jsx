import React from "react";
import PostSelect from "../PostSelect/PostSelect";
import "./PostFilter.css";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <input
        value={filter.query}
        onChange={(event) =>
          setFilter({ ...filter, query: event.target.value })
        }
        placeholder="Find..."
      />
      <PostSelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Sort:"
        options={[
          {
            value: "title",
            name: "By title",
          },
          {
            value: "body",
            name: "By decriptions",
          },
        ]}
      />
    </div>
  );
};

export default PostFilter;
