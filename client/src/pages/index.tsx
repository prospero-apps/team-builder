import { Inter } from 'next/font/google'
import { getSession, signIn, signOut, useSession } from 'next-auth/react'
import { NextPageContext } from 'next'
import { Box } from '@chakra-ui/react'
import Panel from '@/components/Panel'
import Auth from '@/components/Auth'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: session } = useSession()  

  const reloadSession = () => {}

  return (
    <Box>
      {(session?.user.username && session?.user.country && session?.user.city) 
      ? <Panel /> 
      : <Auth session={session} reloadSession={reloadSession} />}
    </Box>
  )  
}

export async function getServerSideProps(context: NextPageContext) {  
  const session = await getSession(context)

  return {
    props: {
      session,
    }
  }
}
