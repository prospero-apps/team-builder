import { Inter } from 'next/font/google'
import { signIn, signOut, useSession } from 'next-auth/react'

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
