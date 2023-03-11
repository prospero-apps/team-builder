import { Inter } from 'next/font/google'
import { signIn, useSession } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data } = useSession()  

  return (
    <div>
      <button onClick={() => signIn('google')}>Sign in with Google</button>
      {data?.user?.name}
    </div>
  )
}
