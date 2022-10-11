import Head from "next/head";
import { PostList } from "src/components/Post/PostList";

const Posts = () => {
  return (
    <div>
      <Head>
        <title>Index Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <PostList />
    </div>
  );
};

export default Posts;
