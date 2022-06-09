import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type BlogPostLayoutProps = {
  children: React.ReactNode
}

const BlogPostsLayout = ({ children }: BlogPostLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.blogPosts()} className="rw-link">
            BlogPosts
          </Link>
        </h1>
        <Link to={routes.newBlogPost()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New BlogPost
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default BlogPostsLayout
