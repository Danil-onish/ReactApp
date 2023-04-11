import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Postitem from "./Postitem";

const PostList = ({ posts, title, remove }) => { 
  if (posts.length)
    {console.log("List");
      return (
      <div className="PostListBlock">
        <h1 className="postList__title">{title}</h1>
        <TransitionGroup className="PostList">
          {posts.map((post, index) => (
            <CSSTransition
              key={post.id}
              // nodeRef={nodeRef}
              timeout={300}
              classNames="post"
            >
              <Postitem remove={remove} number={index + 1} post={post} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    );}
  return <h1 style={{ textAlign: "center" }}>No posts!</h1>;
};

export default PostList;
