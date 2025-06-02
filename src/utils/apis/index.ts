import { loginUser, registerUser } from "./auth";
import { createPost, getAllPosts, postsLike } from "./post";
import { notificationListener } from "./sse";

export const api = {
  user: { registerUser, loginUser },
  post: {
    createPost,
    getAllPosts,
    postsLike,
    notificationListener,
  },
};
