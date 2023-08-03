export type PostType = {
  _id: string;
  authorId: string;
  content: string;
  createdAt: Date;
  meta: string;
  slug: string;
  tags: string[];
  thumbnail?: { public_id: string; url: string };
  title: string;
  updatedAt: Date;
};
