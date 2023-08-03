import { useQuery } from "@tanstack/react-query";

import client from "../api/client";
import { PostType } from "../typings";
import PostCard from "../components/PostCard";
import { getPaginationCount } from "../utils/getPaginationCount";

let pageNumber = 0;
const POST_LIMIT = 9;

const Home = () => {
  const { isLoading, error, data, refetch } = useQuery(
    ["posts", pageNumber, POST_LIMIT],
    () =>
      client
        .get(`/posts/latest-posts?pageNumber=${pageNumber}&limit=${POST_LIMIT}`)
        .then((res) => {
          return res.data;
        })
  );

  // have to give default values otherwise there's an error when they're initially undefined
  const { posts, postCount } = data || { posts: [], postCount: 0 };

  const totalPagesNeeded = getPaginationCount(postCount, POST_LIMIT);

  // totalPagesNeed arg provides the array length
  // .fill(' ') fills each element with an empty space
  const paginationArr = new Array(totalPagesNeeded).fill(" ");

  const fetchMorePosts = (index: number) => {
    pageNumber = index;
    refetch()
  };

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {error
          ? "Something went wrong"
          : isLoading
          ? "Loading..."
          : posts.map((post: PostType) => (
              <PostCard post={post} key={post._id} />
            ))}
      </div>
      <div className="py-5 flex justify-center items-center space-x-3">
        {/* _ arg as placeholder - only need index
       index + 1 as it's zero-indexed */}
        {paginationArr.map((_: any, index: number) => {
          return (
            <button
              onClick={() => fetchMorePosts(index)}
              key={index}
              className={
                index === pageNumber
                  ? "text-blue-500 border-b-2 border-b-blue-500"
                  : "text-gray-500"
              }
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
