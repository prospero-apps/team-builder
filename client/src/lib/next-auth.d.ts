import 'next-auth'

declare module 'next-auth' {
  // These interfaces will be merged with the default Session and User interfaces.
  
  interface User {
    id: string
    username: string
    country: string
    city: string
  }

  // Use the User type defined above instead of the default one.
  interface Session {
    user: User
  }
}