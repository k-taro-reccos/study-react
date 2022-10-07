import Head from "next/head"
import { Header } from "src/components/Header"
import { UserList } from "src/components/UserList"

const Users = () => {
  
  return (
    <div>
      <Head>
        <title>Users Page</title>
      </Head>
      <Header />
      <UserList />
    </div>
  )
} 

export default Users