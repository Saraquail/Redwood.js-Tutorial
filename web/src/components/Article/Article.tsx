import { Link, routes } from '@redwoodjs/router'

import type { BlogPost } from 'types/graphql'

interface Props {
  article: BlogPost
}

const Article = ({ article }: Props) => {
  return (
    <article>
      <header>
        <h2>
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
      </header>
      <div>{article.body}</div>
      <div>Posted at: {article.createdAt}</div>
    </article>
  )
}

export default Article
