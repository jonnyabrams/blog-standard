import dateFormat from "dateformat";

import { PostType } from "../typings";

interface IPostCard {
  post: PostType;
}

const PostCard = ({ post }: IPostCard) => {
  if (!post) return null;
  const { title, thumbnail, tags, meta, createdAt, slug } = post;

  return (
    <div className="bg-white shadow-sm rounded">
      <img className="rounded-t" src={thumbnail?.url || "default.jpeg"} alt={title} />
      <div className="p-2">
        <h1 className="text-lg font-semibold text-gray-700">{title}</h1>
        <p className="text-gray-500">{meta}</p>
        <div className="flex flex-col md:flex-row justify-between">
          <p className="text-gray-500 text-sm">
            {dateFormat(createdAt, "mediumDate")}
          </p>
          <p className="text-gray-500 text-sm">{tags.join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
