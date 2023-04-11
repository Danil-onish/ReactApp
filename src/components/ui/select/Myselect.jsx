import React from "react";
import classes from "./Myselect.module.css";

const Myselect = ({ options, value, onChange }) => {
  return (
    
    <select className={classes.mySelect} value={value} onChange={(e) => onChange(e.target.value)}>
      {options.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        );
      })}
    </select>

  //    <ul className={classes.mySelect}>
  //    {options.map((option, index) => {
  //      return (
  //        // <option key={option.value} value={option.value}>
  //        //   {option.name}
  //        // </option>
  //        <li key={option.value}>
  //          <input
  //            type={"radio"}
  //            name="sort"
  //            id={"sort_" + index}
  //          />
  //          <label
  //            onClick={(e) => onChange(option.value)}
  //            htmlFor={"sort_" + index}
  //          >
  //            {option.name}
  //          </label>
  //        </li>
  //      );
  //    })}
  //  </ul>
  );
};

export default Myselect;
