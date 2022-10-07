import Link from "next/link";
import { useCommentsByPostsId } from "src/hooks/useFetchArray";

export const CommentsByPostId = (props) => {
  const {id} = props
  const { data, error, isLoading, isEmpty } = useCommentsByPostsId(id);

  if (isLoading) {
    return <div>ローディング中です</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isEmpty) {
    return <div>No comments found.</div>
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
