import { useQuery } from "@tanstack/react-query";
import client from "../api/client";

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

  console.log(posts);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
