import type { FindBlogPosts } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import BlogPosts from 'src/components/BlogPost/BlogPosts'

export const QUERY = gql`
  query FindBlogPosts {
    blogPosts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No blogPosts yet. '}
      <Link to={routes.newBlogPost()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ blogPosts }: CellSuccessProps<FindBlogPosts>) => {
  return <BlogPosts blogPosts={blogPosts} />
}
