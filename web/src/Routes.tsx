// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Private, Router, Route, Set } from '@redwoodjs/router'
import BlogPostsLayout from 'src/layouts/BlogPostsLayout'
import TutorialLayout from './layouts/TutorialLayout/TutorialLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Private unauthenticated="home">
        <Set wrap={BlogPostsLayout}>
          <Route path="/admin/blog-posts/new" page={BlogPostNewBlogPostPage} name="newBlogPost" />
          <Route path="/admin/blog-posts/{id:Int}/edit" page={BlogPostEditBlogPostPage} name="editBlogPost" />
          <Route path="/admin/blog-posts/{id:Int}" page={BlogPostBlogPostPage} name="blogPost" />
          <Route path="/admin/blog-posts" page={BlogPostBlogPostsPage} name="blogPosts" />
        </Set>
      </Private>
      <Set wrap={TutorialLayout}>
        <Route path="/article/{id:Int}" page={ArticlePage} name="article" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
