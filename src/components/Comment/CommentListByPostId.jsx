import Head from "next/head";
import Link from "next/link";
import { useFetchArray } from "src/hooks/useFetchArray";
import { API_URL } from "src/utils/const";

export const CommentListByPostId = (props) => {
  const { id } = props;
  const { data, error, isLoading, isEmpty } = useFetchArray(
    id ? `${API_URL}/posts/${id}/comments` : null
  );

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
              <a className="block hover:text-blue-500">{comment.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
