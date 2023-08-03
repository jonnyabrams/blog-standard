import { useQuery } from "@tanstack/react-query";

import client from "../api/client";
import { PostType } from "../typings";

let pageNumber = 0;
const POST_LIMIT = 9;

const Home = () => {
  const {
    isLoading,
    error,
    data: posts,
  } = useQuery(["posts", pageNumber, POST_LIMIT], () =>
    client
      .get(`/posts/latest-posts?pageNumber=${pageNumber}&limit=${POST_LIMIT}`)
      .then((res) => {
        return res.data;
      })
  );

  return (
    <div>
      {error
        ? "Something went wrong"
        : isLoading
        ? "Loading..."
        : posts.map((post: PostType) => <div>{post.title}</div>)}
    </div>
  );
};

export default Home;
