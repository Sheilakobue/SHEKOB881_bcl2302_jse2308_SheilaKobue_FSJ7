// function that fetches all featured post,a single post
import React from 'react';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

const postDirectory=path.join(process.cwd(), 'posts');

function getPostData(fileName){
    const filePath=path.join(postDirectory,fileName);
    const fileContent=fs.readfileSync(filePath, 'utf-8');
    const {data, content} = matter(fileContent);

    const postSlug = fileName.replace (/\.md&/,"");
    const postData = {
        slug:postSlug,
        ...data,
        content,
    }
}

export default function GetAllPosts() {
   const postFiles= fs.readdirSync(postDirectory);

   const allPosts = postFiles.map(postFile=>{
    return getPostData(postFile);
   })

       
   const sortedPots= allPosts.sort((postA, postB)=>postA.date>postB.date? -1 :1);
   return sortedPots;
}

export function getFeaturedPosts(){
    const allPosts = GetAllPosts();
    const featuredPosts= allPosts.filter(post =>post.isFeatured);

    return featuredPosts;

}
