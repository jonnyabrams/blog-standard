import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

import client from "../api/client";
import { useEffect, useState } from "react";

import { PageType, PostType } from "../typings";
import PostCard from "../components/PostCard";

const POST_LIMIT = 12;

const fetchPosts = async (page: number) => {
  const response = await client.get(
    `/posts/latest-posts?pageNumber=${page}&limit=${POST_LIMIT}`
  );
  return response.data;
};

const HomeInfinite = () => {
  const { data, error, isLoading, isSuccess, hasNextPage, fetchNextPage } =
    useInfiniteQuery(
      ["infinitePosts"],
      ({ pageParam = 1 }) => fetchPosts(pageParam),
      {
        getNextPageParam: (lastPage, allPages) => {
          // if lastPage post count is less than limit, it should be last one
          if (lastPage.posts.length < POST_LIMIT) return undefined;
          const nextPage = allPages.length + 1;
          return nextPage;
        },
      }
    );

  useEffect(() => {
    let fetching = false;
    const handleScroll = async (e: Event) => {
      const scrollingElement = (e.target as Document).documentElement;
      if (scrollingElement) {
        const { scrollTop, scrollHeight, clientHeight } = scrollingElement;
        // if this then means you're at the bottom, with the added buffer of 1.5
        if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.5) {
          fetching = true;
          if (hasNextPage) await fetchNextPage();
          fetching = false;
        }
      }
    };
    document.addEventListener("scroll", handleScroll);

    // cleanup
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [fetchNextPage, hasNextPage]);

  console.log(data);

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {error
          ? "Something went wrong"
          : isLoading
          ? "Loading..."
          : isSuccess &&
            data?.pages.map((page: PageType) => {
              return page.posts.map((post: PostType) => (
                <PostCard post={post} key={post._id} />
              ));
            })}
      </div>
    </div>
  );
};

export default HomeInfinite;
