import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header";
import classes from './post-content.module.css'

const DUMMY_POSTS = {
  slug: "getting-started-with-nextjs1",
  title: "Getting Started with NextJS",
  image: "getting-started-nextjs.png",
  date: "2023-09-20",
  content: "# This is a first post",
};

export default function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POSTS.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POSTS.content}</ReactMarkdown>
    </article>
  );
}
