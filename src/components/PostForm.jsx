import React, { useState } from "react";
import Mybutton from "./ui/button/Mybutton";
import Myinput from "./ui/input/Myinput";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = { ...post, id: Date.now() };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      <Myinput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Post name"
      />

      <Myinput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Post desc"
      />

      <Mybutton onClick={addNewPost}>Create post</Mybutton>
    </form>
  );
};

export default PostForm;
