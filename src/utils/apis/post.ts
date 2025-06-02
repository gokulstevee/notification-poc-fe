import { objectToQueryString } from "@utils/main";
import { axiosInstance } from "src/http/interceptor";

export const createPost = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return axiosInstance.post(`/api/v1/posts`, {
    title,
    content,
  });
};

export const getAllPosts = ({
  pageNumber,
  pageSize,
}: {
  pageNumber: number;
  pageSize: number;
}) => {
  const query = objectToQueryString({ pageNumber, pageSize });

  return axiosInstance.get(`/api/v1/posts?${query}`);
};

export const postsLike = ({ postId }: { postId: string }) => {
  return axiosInstance.post(`/api/v1/posts-like`, {
    postId,
  });
};
