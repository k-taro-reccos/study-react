import { useFetch } from "src/hooks/useFetch";
import { API_URL } from "src/utils/const";

export const UserNameByUserId = (props) => {
  const {id} = props
  const { data, error, isLoading } = useFetch(
    id 
      ? `${API_URL}/users/${id}`
      : null,
  );

  if (isLoading) {
    return <div>ローディング中</div>
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="text-lg">Created by {data.name}</div> 
  );
};
