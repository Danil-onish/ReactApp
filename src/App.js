import React, { useEffect, useMemo, useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import Mybutton from "./components/ui/button/Mybutton";
import PostForm from "./components/PostForm";
import PostsFilter from "./components/PostsFilter";
import MyModal from "./components/ui/MyModal/MyModal";
import { usePosts } from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/ui/Loader/Loader";
import { useFetching } from "./hooks/useFetching";
import { getPageCount } from "./utils/pages";
import PagesNav from "./components/ui/PagesNav/PagesNav";
import { usePagination } from "./hooks/usePagination";

function App() {
  const [posts, setPosts] = useState([]);
  const sortOptions = [ 
    { value: "title", name: "Sort by name" },
    { value: "body", name: "Sort by desc" },
    { value: "id", name: "Sort by id" },
  ];
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState({
    sort: sortOptions[0].value,
    query: "",
  });

  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setpage] = useState(1);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.GetAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  const sortedAndSearched = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
    console.log("added post");
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
    console.log("post removed");
  };

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const pagesArr = usePagination(totalPages, posts);

  return (
    <div className="App">
      <Mybutton onClick={() => setModal(true)} style={{ marginBottom: "20px" }}>
        Create post
      </Mybutton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <PostsFilter
        filter={filter}
        setFilter={setFilter}
        options={sortOptions}
      />
      {postError && (
        <h1 style={{ textAlign: "center", margin: "50px 0" }}>{postError}</h1>
      )}
      {isPostsLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearched}
          title="Post list"
        />
      )}
      <PagesNav pagesArr={pagesArr} currentPage={page} setpage={setpage} />
    </div>
  );
}

export default App;
