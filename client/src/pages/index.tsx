import { Inter } from 'next/font/google'
import { getSession, signIn, signOut, useSession } from 'next-auth/react'
import { NextPageContext } from 'next'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data } = useSession()  

  return (
    <div>
      {data?.user ? (
        <button onClick={() => signOut()}>Sign Out</button>
      ) : (
        <button onClick={() => signIn('google')}>Sign In with Google</button>
      )}      
      
      {data?.user?.name}
    </div>
  )
}

export async function getServerSideProps(context: NextPageContext) {
  // fetch the session on the server side
  const session = await getSession(context)

  return {
    // This will be passed as props to the React component.
    props: {
      session,
    }
  }
}
