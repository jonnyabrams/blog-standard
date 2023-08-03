import { useQuery } from "@tanstack/react-query";

import client from "../api/client";
import { PostType } from "../typings";
import PostCard from "../components/PostCard";

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
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {error
        ? "Something went wrong"
        : isLoading
        ? "Loading..."
        : posts.map((post: PostType) => (
            <PostCard post={post} key={post._id} />
          ))}
    </div>
  );
};

export default Home;
