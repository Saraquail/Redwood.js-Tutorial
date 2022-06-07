export const schema = gql`
  type BlogPost {
    id: Int!
    title: String!
    body: String!
    createdAt: DateTime!
  }

  type Query {
    blogPosts: [BlogPost!]! @requireAuth
    blogPost(id: Int!): BlogPost @requireAuth
  }

  input CreateBlogPostInput {
    title: String!
    body: String!
  }

  input UpdateBlogPostInput {
    title: String
    body: String
  }

  type Mutation {
    createBlogPost(input: CreateBlogPostInput!): BlogPost! @requireAuth
    updateBlogPost(id: Int!, input: UpdateBlogPostInput!): BlogPost!
      @requireAuth
    deleteBlogPost(id: Int!): BlogPost! @requireAuth
  }
`
