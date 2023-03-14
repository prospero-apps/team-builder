import gql from 'graphql-tag'; 

const typeDefs = gql`
  type User {
    id: String
    username: String
    country: String
    city: String
  }

  type CreateUserDataResponse {
    success: Boolean
    error: String
  }

  type Query {
    searchUsers(username: String): [User]
  }

  type Mutation {
    createUserData(
      username: String,
      country: String,
      city: String
    ): CreateUserDataResponse
  }
`

export default typeDefs