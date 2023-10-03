import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// defines the directory where the posts are stored
const postsDirectory = path.join(process.cwd(), 'posts');

//function to get a list of file names in the 'post' directory
export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}

// getting the data for a specific post given its identifier(file name)
export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ""); // removes the file extension
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  // Creating an object with post data including slug, metadata, and content

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}


// Function to get data for all posts, sorted by date in descending order
export function getAllPosts() {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map(postFile => {
    return getPostData(postFile);
  });

  //sort date
  const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1);

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter(post => post.isFeatured);

  return featuredPosts;
}