import Link from "next/link";
import {  useUsersById } from "src/hooks/useFetchArray";

export const UserById = (props) => {
  const { id } = props;
  const { data, error, isLoading, isEmpty } = useUsersById(id);

  if (isLoading) {
    return <div>ローディング中です</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isEmpty) {
    return <div>No users found.</div>;
  }

  return (
    <ol>
      {data.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.id}`}>
            <a>{user.name}</a>
          </Link>
        </li>
      ))}
    </ol>
  );
};
