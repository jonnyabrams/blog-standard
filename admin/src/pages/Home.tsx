import { useEffect } from "react";
import { getPosts } from "../api/post";

let pageNumber = 0;
const POST_LIMIT = 9;

const Home = () => {
  const fetchPosts = async () => {
    const data = await getPosts(pageNumber, POST_LIMIT);


    console.log(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
