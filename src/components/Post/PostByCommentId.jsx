import Head from "next/head";
import Link from "next/link";
import { CommentsByPostId } from "src/components/CommentList/CommentsByPostId";
import { UserByUserId } from "src/components/User/UserByUserId";
import { usePost } from "src/hooks/usePost";

export const PostByCommentId = (props) => {
  const { id } = props;
  const { data, error, isLoading } = usePost(id);

  if (isLoading) {
    return <div>ローディング中です</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
      <Link href={`/posts/${data.id}`}>
        <a className="text-lg hover:text-blue-500">{data?.title}</a>
      </Link>
  );
};
