import React from "react";
import Myinput from "./ui/input/Myinput";
import Myselect from "./ui/select/Myselect";

const PostsFilter = ({ filter, setFilter, options }) => {
  return (
    <div>
      <Myinput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Search"
      />
      <Myselect
        // value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue={options[0].value}
        options={options}
      />
    </div>
  );
};

export default PostsFilter;
