import Link from "next/link";
import { useUsers } from "src/hooks/useFetchArray";

export const UserList = () => {
  const { data, error, isLoading, isEmpty } = useUsers();

  if (isLoading) {
    return <div>ローディング中です</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isEmpty) {
    return <div>データは空です。</div>;
  }

  return (
    <ol>
      {data.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.id}`}>
            <a>{`${user.name} (${user.email})`}</a>
          </Link>
        </li>
      ))}
    </ol>
  );
};
