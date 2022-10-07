import Head from "next/head";
import { useComment } from "src/hooks/useComment";

export const Comment = () => {
  const { comment, commnetError, isLoading } = useComment();

  if (isLoading) {
    return <div>ローディング中です</div>;
  }

  if (commnetError) {
    return <div>{commnetError.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{comment.name}</title>
      </Head>
      <h1>{comment.name}</h1>
      <p>{comment.body}</p>
    </div>
  );
};
