import { useRouter } from "next/router";
import {  PostListByUserId } from "src/components/Post/PostListByUserId";
import { useFetch } from "src/hooks/useFetch";
import { API_URL } from "src/utils/const";

export const UserDetail = () => {
  const router = useRouter()
  const { data, error, isLoading } = useFetch(router.query.id ? `${API_URL}/users/${router.query.id}` : null);

  if (isLoading) {
    return <div>ローディング中です</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">{data.name}</h1>
      <h2 className="text-xl font-bold mt-10">詳細</h2>
      <ul className="list-inside list-disc mt-2 text-xl">
        <li>メール: {data.username}</li>
        <li>アカウント名: {data.email}</li>
        <li>住所: {data.address.city}</li>
        <li>電話番号: {data.phone}</li>
        <li>webサイト: {data.website}</li>
        <li>勤務先: {data.company.name}</li>
      </ul>
      <h2 className="text-xl font-bold mt-10">投稿</h2>
      <div className="mt-2">
        <PostListByUserId id={data.id} />
      </div>
    </div>
  );
};
