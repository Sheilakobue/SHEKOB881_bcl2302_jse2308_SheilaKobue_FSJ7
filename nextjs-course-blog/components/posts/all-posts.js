import React from 'react'
import classes from './all-posts.module.css';
import PostsGrid from './posts-grid'

export default function AllPosts(props) {
  return (
    <section className={classes.posts}>
      <h1>Al Posts</h1>
      <PostsGrid posts={props.posts}n/>
    </section>
  )
}
