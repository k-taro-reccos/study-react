import Link from "next/link";
import {  useUsers } from "src/hooks/useUsers";

export const UserList = () => {
  const { users, usersError, isLoading, isEmpty } = useUsers();

  if (isLoading) {
    return <div>ローディング中です</div>;
  }

  if (usersError) {
    return <div>{error.message}</div>;
  }

  if (isEmpty) {
    return <div>データは空です。</div>;
  }

  return (
    <ol>
      {users.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.id}`}>
            <a>{`${user.name} (${user.email})`}</a>
          </Link>
        </li>
      ))}
    </ol>
  );
};
