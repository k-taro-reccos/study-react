import Link from "next/link";
import { useComments } from "src/hooks/useComments";

export const CommentList = () => {
  const { comments, commentsError, isLoading, isEmpty } = useComments();

  if (isLoading) {
    return <div>ローディング中です</div>;
  }

  if (commentsError) {
    return <div>{error.message}</div>;
  }

  if (isEmpty) {
    return <div>データは空です。</div>;
  }

  return (
    <ol>
      {comments.map((comment) => (
        <li key={comment.id}>
          <Link href={`/comments/${comment.id}`}>
            <a>{comment.name}</a>
          </Link>
        </li>
      ))}
    </ol>
  );
};
