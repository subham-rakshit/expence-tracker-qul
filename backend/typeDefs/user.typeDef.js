const userTypeDef = `#graphql
 type User {
  _id: ID! # ID! means it is required
  username: String!
  name: String!
  password: String!
  profilePicture: String
  gender: String!
 }

 type Query {
  authUser: User # if user authenticated then return user else return null. so we don't use !

  user(userId: ID!): User
 }

 type Mutation {
  signUp(input: SignUpInput!): User
  login(input: LoginInput!): User
  logout: LogoutResponse
 }

 input SignUpInput {
  username: String!
  name: String!
  password: String!
  gender: String!
 }

 input LoginInput {
  username: String!
  password: String!
 }

 type LogoutResponse {
  message: String!
 }

`;

export default userTypeDef;
