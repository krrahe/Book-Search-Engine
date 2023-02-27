const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    _id: ID
    title: String
    authors: [String]
    description: String
  }

  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Query {
    me: User
  }

  type Auth {
    token: ID!
    user: User
  }

  input BookInput {
    title: String!
    authors: [String!]!
    description: String!
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(book: BookInput!): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDef;