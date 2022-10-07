import Head from "next/head"
import { Header } from "src/components/Header"
import { CommentList } from "src/components/CommentList"

const Comments = () => {
  return (
    <div>
      <Head>
        <title>Comments Page</title>
      </Head>
      <Header />
      <CommentList />
    </div>
  )
} 

export default Comments