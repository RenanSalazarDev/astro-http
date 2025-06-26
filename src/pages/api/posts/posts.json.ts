

import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content';

export const prerender = true;
export const GET: APIRoute = async ({ params, request }) => {


  const blogPosts = await getCollection('blog');
  
  console.log(request);

  // const posts = blogPosts.map(post => ({
  //   title: post.data.title,
  //   description: post.data.description,
  //   pubDate: post.data.pubDate,
  //   updatedDate: post.data.updatedDate,
  //   heroImage: post.data.heroImage
  // }));

  return new Response(JSON.stringify(blogPosts), {
     status: 200,
     headers: {
       'Content-Type': 'application/json'
     }
  })
}