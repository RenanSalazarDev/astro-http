import type { APIRoute } from 'astro'

export const GET: APIRoute = async ({ params }) => {
  const { person } = params

  // Simulate fetching person data
  const personData = {
    name: person,
    age: Math.floor(Math.random() * 100),
    occupation: 'Developer'
  }

  return new Response(JSON.stringify(personData), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}