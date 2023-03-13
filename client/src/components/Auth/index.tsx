import { Button, Center, Image, Input, Stack, Text } from "@chakra-ui/react";
import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import { useState } from "react";

interface IAuthProps {
  // null if the user is signed out
  session: Session | null

  // used to refetch the user from the database after username, country and city are created
  reloadSession: () => void
}

const Auth: React.FC<IAuthProps> = ({ session, reloadSession }) => {
  const [username, setUsername] = useState('')
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')

  const handleSubmit = async () => {
    // We'll create a GraphQL mutation here to update the user.
  }
  
  return (
    <Center height='100vh'>
      <Stack>
        {session ? (
          <>
            <Text fontSize='3xl'>Username:</Text>
            <Input 
              backgroundColor='#1C4532'
              color='#F0FFF4'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <Text fontSize='3xl'>Country:</Text>
            <Input 
              backgroundColor='#1C4532'
              color='#F0FFF4'
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />

            <Text fontSize='3xl'>City:</Text>
            <Input 
              backgroundColor='#1C4532'
              color='#F0FFF4'
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <Button 
              backgroundColor='#EDF2F7'
              fontSize='3xl'
              onClick={handleSubmit}
            >
              Save
            </Button>
          </>
        ) : (
          <>
            <Text fontSize='5xl' fontWeight='bold'>Team Builder</Text>
            <Button 
              backgroundColor='#EDF2F7'
              onClick={() => signIn('google')}
              leftIcon={<Image src='/images/googlelogo.png' height='20px' />}
            >
              Sign In with Google
            </Button>
          </>
        )}
      </Stack>
    </Center>
  )
};

export default Auth;
