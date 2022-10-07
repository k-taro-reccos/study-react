import Link from "next/link";
import {  usePostsByUserId } from "src/hooks/useFetchArray";

export const PostByUserId = (props) => {
  const { id } = props;
  const { data, error, isLoading, isEmpty } = usePostsByUserId(id);

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
      {data.map((post) => (
        <li key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ol>
  );
};
