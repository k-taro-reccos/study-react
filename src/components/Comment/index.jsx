import Head from "next/head";
import { PostByUserId } from "src/components/Posts/PostsByUserId";
import { UserById } from "src/components/User/UserById";
import { useComment } from "src/hooks/useComment";

export const Comment = () => {
  const { data, error, isLoading } = useComment();

  if (isLoading) {
    return <div>ローディング中です</div>;
  }

  if (error) {
    return <div>{commnetError.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{data.name}</title>
      </Head>
      <h1>{data.name}</h1>
      <p>{data.body}</p>
      <UserById id={data.id} />
      <PostByUserId id={data.id} />
    </div>
  );
};
