import Head from "next/head";
import { CommentsByPostId } from "src/components/CommentList/CommentsByPostId";
import { PostByUserId } from "src/components/Posts/PostsByUserId";
import { useUser } from "src/hooks/useUser";

export const User = () => {
  const { data, error, isLoading } = useUser();

  if (isLoading) {
    return <div>ローディング中です</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{data.name}</title>
      </Head>
      <h2>詳細</h2>
      <p>{data.name}</p>
      <ul>
        <li>{data.username}</li>
        <li>{data.email}</li>
        <li>{data.address.city}</li>
        <li>{data.phone}</li>
        <li>{data.website}</li>
        <li>{data.company.name}</li>
      </ul>
      <h2>投稿</h2>
      <PostByUserId id={data.id} />
    </div>
  );
};
