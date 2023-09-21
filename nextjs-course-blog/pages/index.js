import React, { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from '../components/home-page/featured-posts'

export default function HomePage() {
  //hero section to present yourselves
  //featured posts
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS}/>
    </Fragment>
  );
}
