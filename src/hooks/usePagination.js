import { useMemo } from "react";

export const usePagination = (totalPages, posts) => {
  let pagesArr = useMemo(() => {
    console.log("Pagination");
    let res = [];
    for (let i = 0; i < totalPages; i++) {
      res.push(i + 1);
    }
    return res;
  }, [posts]);
  return pagesArr;
};
