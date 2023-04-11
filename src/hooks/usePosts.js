import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    console.log("Getsorted");
    if (sort) {
      return [...posts].sort((a, b) => {
        if (typeof a[sort] === "string" && typeof b[sort] === "string")
          return a[sort].localeCompare(b[sort]);
          
        else if (typeof a[sort] === "number" && typeof b[sort] === "number")
          return Number(a[sort]) - Number(b[sort]);
      });
    }
    return posts;
  }, [sort, posts]);

  return sortedPosts;
};

export const usePosts = (posts, sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort);

  const sortedAndSearched = useMemo(() => {
    return sortedPosts.filter((post) => {
      return (
        post.title.toLowerCase().includes(query.toLocaleLowerCase()) ||
        post.body.toLowerCase().includes(query.toLocaleLowerCase())
      );
    });
  }, [query, sortedPosts]);

  return sortedAndSearched;
};
