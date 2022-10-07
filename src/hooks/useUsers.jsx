import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const useUsers = () => {
  const { data: users, error: usersError } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );

  return {
    users,
    usersError,
    isLoading: !usersError && !users,
    isEmpty: users && users.length === 0,
  };
};
