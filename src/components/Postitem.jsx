import React from "react";
import Mybutton from "./ui/button/Mybutton";

const Postitem = (props) => {
  const { id, title, body } = props.post;

  return (
    <li className="PostItem">
      <div className="post__content">
        <strong className="post__title">
          {id}. {title}
        </strong>
        <div className="post__desc">{body}</div>
      </div>
      <div className="post__buttons">
        <Mybutton
          onClick={(id) => props.remove(props.post)}
          className="post_delete_button"
        >Delete</Mybutton> 
      </div>
    </li>
  );
};

export default Postitem;
