

import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ params }) => {

 const blogPosts = await getCollection('blog');

  const posts = blogPosts.map(post => ({
    title: post.data.title,
    description: post.data.description,
    pubDate: post.data.pubDate,
    updatedDate: post.data.updatedDate,
    heroImage: post.data.heroImage
  }));

  return new Response(JSON.stringify(posts), {
     status: 200,
     headers: {
       'Content-Type': 'application/json'
     }
  })

  // const { person } = params

  // // Simulate fetching person data
  // const personData = {
  //   name: person,
  //   age: Math.floor(Math.random() * 100),
  //   occupation: 'Developer'
  // }

  // return new Response(JSON.stringify(personData), {
  //   status: 200,
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // })
}