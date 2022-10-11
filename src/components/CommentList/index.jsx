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
    <ul className="space-y-2">
      {data.map((comment) => (
        <li key={comment.id} className="border-b pb-2">
          <Link href={`/comments/${comment.id}`} prefetch={false}>
            <a className="block hover:text-blue-500">{comment.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
