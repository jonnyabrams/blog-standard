import { PostType } from "../typings";

interface IPostCard {
  post: PostType;
}

const PostCard = ({ post }: IPostCard) => {
  if (!post) return null;
  const { title, thumbnail, tags, meta, createdAt, slug } = post;

  return (
    <div>
      <img src={thumbnail?.url || 'default.jpeg'} alt={title} />
      <h1>{title}</h1>
    </div>
  );
};

export default PostCard;
