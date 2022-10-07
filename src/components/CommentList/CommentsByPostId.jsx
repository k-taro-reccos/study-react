import Head from "next/head";
import Link from "next/link";
import { useCommentsByPostId } from "src/hooks/useFetchArray";

export const CommentsByPostId = (props) => {
  const { id } = props;
  const { data, error, isLoading, isEmpty } = useCommentsByPostId(id);

  if (isLoading) {
    return <div>ローディング中です</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isEmpty) {
    return <div>No comments found.</div>;
  }

  return (
    <div>
      <Head>
        <title>{data.title}</title>
      </Head>
      <ul className="space-y-2">
        {data.map((comment) => (
          <li key={comment.id} className="border-b pb-2">
            <Link href={`/comments/${comment.id}`}>
              <a className="block hover:text-blue-500">
                {comment.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
