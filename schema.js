const {  gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type  Post {
    id: Int!
    title: String
    description: String
    author: String
    image: String
    likes: Int
    createdAt: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    posts: [Post]
  }

  type Mutation {
    addPost(title: String!, description: String!, image: String!, author: String!): Post
    deletePost(id: Int!): Boolean
    likePost(id: Int!): Boolean
  }
`;

module.exports = typeDefs;