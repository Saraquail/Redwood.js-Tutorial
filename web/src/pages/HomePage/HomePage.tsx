import { MetaTags } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'
import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  const { currentUser, isAuthenticated } = useAuth()

  return (
    <>
      <MetaTags title="Home" description="Home page" />
      {isAuthenticated ? (
        <div>
          <span>
            Hello {currentUser.firstName && currentUser.firstName}{' '}
            {currentUser.lastName && currentUser.lastName}
          </span>{' '}
        </div>
      ) : (
        ''
      )}
      <ArticlesCell />
    </>
  )
}

export default HomePage
