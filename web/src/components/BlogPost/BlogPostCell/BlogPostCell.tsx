import type { FindBlogPostById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import BlogPost from 'src/components/BlogPost/BlogPost'

export const QUERY = gql`
  query FindBlogPostById($id: Int!) {
    blogPost: blogPost(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Blog Post not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ blogPost }: CellSuccessProps<FindBlogPostById>) => {
  return <BlogPost blogPost={blogPost} />
}
