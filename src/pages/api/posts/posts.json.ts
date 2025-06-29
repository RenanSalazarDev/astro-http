

import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content';

export const prerender = false;
export const GET: APIRoute = async ({ params, request }) => {




  const url = new URL(request.url);
  const slug = url.searchParams.get('slug');

  const blogPosts = await getCollection('blog');
  const myPost = blogPosts.find((post) => post.id === slug)
  
  //console.log(request);

  // const posts = blogPosts.map(post => ({
  //   title: post.data.title,
  //   description: post.data.description,
  //   pubDate: post.data.pubDate,
  //   updatedDate: post.data.updatedDate,
  //   heroImage: post.data.heroImage
  // }));

  //console.log(posts);

  return new Response(JSON.stringify(myPost), {
     status: 200,
     headers: {
       'Content-Type': 'application/json'
     }
  })
}