const { gql } = require('apollo-server')

module.exports = gql`
  type Post {
    id: ID!
    body: String!
    username: String!
    commentCount: Int!
    comments: [Comment]!
    likeCount: Int!
    likes: [Like]!
    createdAt: String!
  }
  type Comment {
    id: ID
    username: String
    body: String
    createdAt: String
  }
  type Like {
    id: ID!
    username: String
    createdAt: String
  }
  type User {
    id: ID!
    username: String!
    email: String!
    token: String!
    createdAt: String!
  }
  input RegisterInput {
    username: String!
    email: String!
    password: String!
    confirmPassword: String!
  }
  type Query {
    getPosts: [Post]
    getPost(postId: ID!): Post
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createPost(body: String!): Post!
    deletePost(postId: ID!): String!
    createComment(postId: ID!, body: String!): Post!
    deleteComment(postId: ID!, commentId: ID!): Post!
    likePost(postId: ID!): Post!
  }
  type Subscription {
    newPost: Post!
  }
`
