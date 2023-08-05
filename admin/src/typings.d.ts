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

export type UserType = {
  username: string;
  email: string;
  password: string;
  _id: string;
  profilePic?: string;
  coverPic?: string;
  bio?: string;
};

export type PageType = {
  posts: PostType[];
  postCount: number;
};

type LoginType = {
  email: string;
  password: string;
};

type AuthContextType = {
  currentUser: {user: UserType, token: string} | null;
  login: (inputs: LoginType) => Promise<void>;
  logout: () => void;
  setCurrentUser: React.Dispatch<SetStateAction<UserType>>;
};

type AuthContextProviderType = {
  children: JSX.Element | JSX.Element[];
};