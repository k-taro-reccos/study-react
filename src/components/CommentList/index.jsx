import Link from "next/link";
import { useComments } from "src/hooks/useFetchArray";

export const CommentList = () => {
  const { data, error, isLoading, isEmpty } = useComments();

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
      {data.map((comment) => (
        <li key={comment.id}>
          <Link href={`/comments/${comment.id}`}>
            <a>{comment.name}</a>
          </Link>
        </li>
      ))}
    </ol>
  );
};
