import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const useComments = () => {
  const { data: comments, error: commentsError } = useSWR(
    "https://jsonplaceholder.typicode.com/comments",
    fetcher
  );

  return {
    comments,
    commentsError,
    isLoading: !commentsError && !comments,
    isEmpty: comments && comments.length === 0,
  };
};
