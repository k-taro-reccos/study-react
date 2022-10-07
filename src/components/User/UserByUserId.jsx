import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const UserByUserId = (props) => {
  const {id} = props
  const { data, error } = useSWR(
    id 
      ? `https://jsonplaceholder.typicode.com/users/${id}`
      : null,
    fetcher
  );

  if (!data && !error) {
    return <div>ローディング中</div>
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="text-lg">Created by {data.name}</div> 
  );
};
