import dateFormat from "dateformat";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { PostType } from "../typings";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import client from "../api/client";

interface IPostCard {
  post: PostType;
}

const PostCard = ({ post }: IPostCard) => {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation(
    (postId: string) => {
      return client.delete(`/posts/${postId}`);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["posts"]);
        queryClient.invalidateQueries(["infinitePosts"]);
      },
    }
  );

  const handleDelete = () => {
    let answer = window.confirm("Are you sure you want to delete this post?");

    if (answer) {
      deleteMutation.mutate(post._id);
      toast("Post successfully deleted!");
    }
  };

  if (!post) return null;
  const { title, thumbnail, tags, meta, createdAt, slug } = post;

  const iconClasses =
    "flex justify-center items-center text-white w-8 h-8 rounded-full";

  return (
    <div className="bg-white shadow-sm rounded flex flex-col">
      <img
        // aspect-video makes it landscape
        className="rounded-t aspect-video"
        src={thumbnail?.url || "default.jpeg"}
        alt={title}
      />
      <div className="p-2 flex-1 flex flex-col justify-between">
        <h1 className="text-lg font-semibold text-gray-700">{title}</h1>
        <p className="text-gray-500 line-clamp-2">{meta}</p>
        <div className="flex flex-col md:flex-row justify-between py-2">
          <p className="text-gray-500 text-sm">
            {dateFormat(createdAt, "mediumDate")}
          </p>
          <p className="text-gray-500 text-sm">{tags.join(", ")}</p>
        </div>
      </div>
      <div className="flex space-x-3 ml-2 mb-2">
        <Link
          to={`/update-post/${slug}`}
          className={`${iconClasses} bg-blue-400 hover:bg-blue-600`}
        >
          <BsPencilSquare />
        </Link>
        <button
          className={`${iconClasses} text-white w-8 h-8 rounded-full bg-red-400 hover:bg-red-600`}
        >
          <BsTrash onClick={handleDelete} />
        </button>
      </div>
    </div>
  );
};

export default PostCard;
