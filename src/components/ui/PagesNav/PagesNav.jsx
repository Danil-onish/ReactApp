import React from "react";
import Mybutton from "../button/Mybutton";
import cl from "./PagesNav.module.css";

const PagesNav = ({ pagesArr, currentPage, setpage}) => {
  console.log("Page nav");
  return (
    <ul className={cl.pagesNav}>
      {pagesArr.map((page, index) => (
        <li
          className={currentPage === page ? "page currentPage" : "page"}
          key={index}
          onClick={(e) => {
            if (currentPage !== page) {
              setpage(index + 1);
            }
          }}
        >
          {page}
        </li>
      ))}
    </ul>
  );
};

export default PagesNav;
